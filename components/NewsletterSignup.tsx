'use client'

import { useId, useState, type FormEvent } from 'react'
import { NorenLink } from './NorenTransition'

type Props = {
  source: string
  compact?: boolean
}

export default function NewsletterSignup({ source, compact = false }: Props) {
  const id = useId()
  const enabled = process.env.NEXT_PUBLIC_NEWSLETTER_ENABLED === 'true'
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  if (!enabled) {
    return (
      <div className="newsletter-paused" role="status">
        <span className="noren-mark noren-mark--small" aria-hidden="true"><i /><i /></span>
        <div>
          <strong>The first letter is being prepared.</strong>
          <p>Subscriptions will open shortly.</p>
        </div>
      </div>
    )
  }

  async function subscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formElement = event.currentTarget
    setStatus('loading')
    setMessage('')
    const form = new FormData(formElement)

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: form.get('email'),
          source,
          company: form.get('company'),
        }),
      })
      const result = await response.json()
      if (!response.ok) throw new Error(result.message || 'Please try again.')
      formElement.reset()
      setStatus('success')
      setMessage(result.message)
    } catch (error) {
      setStatus('error')
      setMessage(error instanceof Error ? error.message : 'Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className="newsletter-success" role="status">
        <span className="noren-mark noren-mark--small" aria-hidden="true"><i /><i /></span>
        <p>{message}</p>
      </div>
    )
  }

  return (
    <form className={`newsletter-form ${compact ? 'newsletter-form--compact' : ''}`} onSubmit={subscribe}>
      <label className="sr-only" htmlFor={`${id}-email`}>Email address</label>
      <input
        id={`${id}-email`}
        name="email"
        type="email"
        autoComplete="email"
        inputMode="email"
        placeholder="you@example.com"
        required
      />
      <div className="newsletter-honeypot" aria-hidden="true">
        <label htmlFor={`${id}-company`}>Company</label>
        <input id={`${id}-company`} name="company" tabIndex={-1} autoComplete="off" />
      </div>
      <button type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Joining…' : 'Receive the next story'}
      </button>
      {status === 'error' && <p className="newsletter-error" role="alert">{message}</p>}
      <p className="newsletter-consent">
        One quiet letter a week. Unsubscribe anytime. By subscribing, you agree to our <NorenLink href="/privacy">privacy notice</NorenLink>.
      </p>
    </form>
  )
}
