'use client'

import { track } from '@vercel/analytics/react'
import NewsletterSignup from './NewsletterSignup'
import { NorenLink } from './NorenTransition'

type SaleStatus = 'editorial' | 'waitlist' | 'available' | 'soldOut'

type Props = {
  title: string
  slug: string
  status?: SaleStatus
  price?: number
  currency?: 'USD' | 'JPY' | 'GBP' | 'EUR'
  checkoutUrl?: string
  availabilityNote?: string
  shippingNote?: string
  salesReady?: boolean
  editorialHref?: string
}

function formatPrice(price: number, currency: NonNullable<Props['currency']>) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    maximumFractionDigits: currency === 'JPY' ? 0 : 2,
  }).format(price)
}

export default function PurchasePanel({
  title,
  slug,
  status = 'editorial',
  price,
  currency = 'USD',
  checkoutUrl,
  availabilityNote,
  shippingNote,
  salesReady = false,
  editorialHref,
}: Props) {
  const canCheckout = status === 'available' && salesReady && Boolean(checkoutUrl) && typeof price === 'number'
  const effectiveStatus: SaleStatus = status === 'available' && !canCheckout ? 'waitlist' : status

  if (effectiveStatus === 'available' && checkoutUrl && typeof price === 'number') {
    return (
      <section id="purchase" className="purchase-panel purchase-panel--available" aria-labelledby="purchase-heading">
        <span className="eyebrow eyebrow--light">AVAILABLE · 販売中</span>
        <h2 id="purchase-heading">Bring {title} into your life.</h2>
        <p className="purchase-panel__price">{formatPrice(price, currency)}</p>
        {availabilityNote && <p className="purchase-panel__availability">{availabilityNote}</p>}
        {shippingNote && <p className="purchase-panel__shipping">{shippingNote}</p>}
        <a
          className="purchase-panel__button"
          href={checkoutUrl}
          onClick={() => track('acquire_click', { piece: slug, currency, price })}
        >
          ACQUIRE
        </a>
        <p className="purchase-panel__fineprint">Secure checkout is handled by Stripe.</p>
      </section>
    )
  }

  if (effectiveStatus === 'soldOut') {
    return (
      <section id="purchase" className="purchase-panel" aria-labelledby="purchase-heading">
        <span className="eyebrow">SOLD OUT · 完売</span>
        <h2 id="purchase-heading">This edition has found its homes.</h2>
        <p>Join the letter to hear when a new edition or related object becomes available.</p>
        <div className="purchase-panel__form">
          <NewsletterSignup source={`restock-${slug}`} buttonLabel="Notify me about the next edition" />
        </div>
      </section>
    )
  }

  if (effectiveStatus === 'waitlist') {
    return (
      <section id="purchase" className="purchase-panel" aria-labelledby="purchase-heading">
        <span className="eyebrow">COMING WITH CARE · 入荷準備中</span>
        <h2 id="purchase-heading">We are sourcing the real object, not just the look.</h2>
        <p>We will open sales only after the maker, provenance, photography, delivery, and care conditions are confirmed.</p>
        <div className="purchase-panel__form">
          <NewsletterSignup source={`waitlist-${slug}`} buttonLabel="Notify me when it is ready" />
        </div>
      </section>
    )
  }

  return (
    <section id="purchase" className="purchase-panel" aria-labelledby="purchase-heading">
      <span className="eyebrow">COMING SOON · 販売準備中</span>
      <h2 id="purchase-heading">This is where the object will become available.</h2>
      <p>We are confirming the real object, maker, provenance, photography, delivery, and care conditions before opening sales.</p>
      <span className="purchase-panel__button purchase-panel__button--disabled" aria-disabled="true">
        ACQUIRE · COMING SOON
      </span>
      {editorialHref ? (
        <NorenLink className="purchase-panel__story" href={editorialHref}>
          Read the culture &amp; function story
        </NorenLink>
      ) : (
        <NorenLink className="purchase-panel__story" href="/newsletter">
          Receive the next story
        </NorenLink>
      )}
    </section>
  )
}
