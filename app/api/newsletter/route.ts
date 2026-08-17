import { createClient } from 'next-sanity'
import { createHash } from 'node:crypto'

export const runtime = 'nodejs'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const resendHeaders = (apiKey: string) => ({
  Authorization: `Bearer ${apiKey}`,
  'Content-Type': 'application/json',
  'User-Agent': 'monogatari-newsletter/1.0',
})

const buttondownHeaders = (apiKey: string, overwrite = false) => ({
  Authorization: `Token ${apiKey}`,
  'Content-Type': 'application/json',
  'User-Agent': 'monogatari-newsletter/1.0',
  ...(overwrite ? { 'X-Buttondown-Collision-Behavior': 'overwrite' } : {}),
})

async function subscribeWithButtondown(
  email: string,
  apiKey: string,
  request: Request,
  source: string,
  intent: 'newsletter' | 'availability',
) {
  const forwardedFor = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
  const body = JSON.stringify({
    email_address: email,
    ...(forwardedFor ? { ip_address: forwardedFor } : {}),
    ...(request.headers.get('referer') ? { referrer_url: request.headers.get('referer') } : {}),
    notes: `${intent === 'availability' ? 'Availability' : 'Newsletter'} signup: ${source}`,
    utm_source: 'monostories.com',
    utm_medium: 'website',
    utm_campaign: intent === 'availability' ? source : 'monogatari-letter',
  })

  const createContact = (overwrite = false) => fetch('https://api.buttondown.com/v1/subscribers', {
    method: 'POST',
    headers: buttondownHeaders(apiKey, overwrite),
    body,
  })

  const createResponse = await createContact()
  if (createResponse.ok) return

  // A returning reader has explicitly opted in again through this form.
  if (createResponse.status === 400 || createResponse.status === 409) {
    const overwriteResponse = await createContact(true)
    if (overwriteResponse.ok) return
  }

  throw new Error('Buttondown rejected the subscriber.')
}

async function recordConsent(
  email: string,
  source: string,
  intent: 'newsletter' | 'availability',
  consentedAt: string,
  token: string,
) {
  const sanity = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'vm9j2v4c',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
    token,
    useCdn: false,
  })
  const id = `newsletterSubscriber.${createHash('sha256').update(email).digest('hex')}`
  const eventKey = createHash('sha256')
    .update(`${email}:${source}:${consentedAt}`)
    .digest('hex')
    .slice(0, 16)

  await sanity.createIfNotExists({
    _id: id,
    _type: 'newsletterSubscriber',
    email,
    source,
    status: 'subscribed',
    consentedAt,
    createdAt: consentedAt,
    subscriptions: [],
  })
  await sanity
    .patch(id)
    .set({ source, status: 'subscribed', consentedAt, lastConsentedAt: consentedAt })
    .setIfMissing({ subscriptions: [] })
    .append('subscriptions', [{ _key: eventKey, source, intent, consentedAt }])
    .commit()
}

async function subscribeWithResend(email: string, apiKey: string, segmentId?: string) {
  const createResponse = await fetch('https://api.resend.com/contacts', {
    method: 'POST',
    headers: resendHeaders(apiKey),
    body: JSON.stringify({
      email,
      unsubscribed: false,
      ...(segmentId ? { segments: [{ id: segmentId }] } : {}),
    }),
  })

  if (createResponse.ok) return

  // A returning reader may already be a Contact. The form is an explicit new
  // opt-in, so restore their subscription and make sure they are in this list.
  if (createResponse.status === 409) {
    const contactPath = encodeURIComponent(email)
    const updateResponse = await fetch(`https://api.resend.com/contacts/${contactPath}`, {
      method: 'PATCH',
      headers: resendHeaders(apiKey),
      body: JSON.stringify({ unsubscribed: false }),
    })
    if (!updateResponse.ok) throw new Error('Resend could not update the contact.')

    if (segmentId) {
      const segmentResponse = await fetch(
        `https://api.resend.com/contacts/${contactPath}/segments/${encodeURIComponent(segmentId)}`,
        { method: 'POST', headers: resendHeaders(apiKey) },
      )
      if (!segmentResponse.ok && segmentResponse.status !== 409) {
        throw new Error('Resend could not add the contact to the newsletter segment.')
      }
    }
    return
  }

  throw new Error('Resend rejected the contact.')
}

export async function POST(request: Request) {
  let payload: { email?: unknown; source?: unknown; intent?: unknown; company?: unknown }
  try {
    payload = await request.json()
  } catch {
    return Response.json({ message: 'Invalid request.' }, { status: 400 })
  }

  if (payload.company) {
    return Response.json({ message: 'Please check your inbox for the next story.' })
  }

  const email = typeof payload.email === 'string' ? payload.email.trim().toLowerCase() : ''
  const source = typeof payload.source === 'string'
    ? payload.source.trim().replace(/[^a-zA-Z0-9:_-]/g, '-').slice(0, 120) || 'website'
    : 'website'
  const intent = payload.intent === 'availability' ? 'availability' : 'newsletter'

  if (!emailPattern.test(email) || email.length > 254) {
    return Response.json({ message: 'Please enter a valid email address.' }, { status: 400 })
  }

  const token = process.env.SANITY_API_TOKEN?.trim()
  const webhook = process.env.NEWSLETTER_WEBHOOK_URL?.trim()
  const resendApiKey = process.env.RESEND_API_KEY?.trim()
  const resendSegmentId = process.env.RESEND_SEGMENT_ID?.trim()
  const buttondownApiKey = process.env.BUTTONDOWN_API_KEY?.trim()
  const consentedAt = new Date().toISOString()
  let requiresConfirmation = false
  let providerSucceeded = false

  try {
    if (buttondownApiKey) {
      await subscribeWithButtondown(email, buttondownApiKey, request, source, intent)
      requiresConfirmation = true
      providerSucceeded = true
    } else if (resendApiKey) {
      await subscribeWithResend(email, resendApiKey, resendSegmentId)
      providerSucceeded = true
    } else if (webhook) {
      const response = await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source, intent, consentedAt }),
      })
      if (!response.ok) throw new Error('Newsletter provider rejected the request.')
      providerSucceeded = true
    } else if (!token) {
      return Response.json(
        { message: 'Newsletter registration is being connected. Please try again shortly.' },
        { status: 503 },
      )
    }

    if (token) {
      try {
        await recordConsent(email, source, intent, consentedAt, token)
      } catch (error) {
        if (!providerSucceeded) throw error
        console.error('Newsletter consent logging failed after provider signup.', error)
      }
    }

    return Response.json({
      message: intent === 'availability'
        ? requiresConfirmation
          ? 'Almost there. Confirm your email to receive availability updates.'
          : 'You’re on the list. We’ll email you when this object is ready.'
        : requiresConfirmation
          ? 'Almost there. Check your inbox and confirm your subscription.'
          : 'You’re in. The next story will arrive in your inbox.',
    })
  } catch {
    return Response.json(
      { message: 'We could not save your address. Please try again in a moment.' },
      { status: 500 },
    )
  }
}
