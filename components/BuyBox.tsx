import {
  type Availability,
  formatPrice,
  getAvailabilityText,
  getCtaLabel,
  resolveAvailability,
} from '@/lib/commerce'

type Props = {
  headingId?: string
  title: string
  titleJa: string
  price?: number
  currency?: string
  availability?: Availability
  availabilityNote?: string
  waitlistCount?: number
  getLink?: string
  placeName?: string
}

export default function BuyBox({
  headingId = 'buy-box-title',
  title,
  titleJa,
  price,
  currency,
  availability: availabilityValue,
  availabilityNote,
  waitlistCount,
  getLink,
  placeName,
}: Props) {
  const availability = resolveAvailability(availabilityValue, getLink)
  const ctaLabel = getCtaLabel(availability)
  const isSecondary = availability === 'sold-out'
  const buttonStyle = isSecondary
    ? {
        border: '1px solid var(--color-on-surface)',
        color: 'var(--color-on-surface)',
        backgroundColor: 'transparent',
      }
    : {
        border: '1px solid var(--color-primary-container)',
        color: 'white',
        backgroundColor: 'var(--color-primary-container)',
      }
  const ctaClassName =
    'block w-full px-6 py-4 text-center label-caps transition-opacity hover:opacity-80'

  return (
    <section
      aria-labelledby={headingId}
      className="border-y py-8 lg:border lg:p-8"
      style={{ borderColor: 'var(--color-outline-variant)' }}
    >
      <div className="mb-8">
        <h2
          id={headingId}
          className="font-serif text-3xl leading-tight"
          style={{ color: 'var(--color-on-surface)' }}
        >
          {title}
        </h2>
        <p
          className="mt-1 font-serif text-base"
          lang="ja"
          style={{ color: 'var(--color-on-surface-variant)' }}
        >
          {titleJa}
        </p>
      </div>

      <p
        className="font-serif text-2xl"
        style={{ color: 'var(--color-on-surface)' }}
      >
        {formatPrice(price, currency)}
      </p>
      <p
        className="mt-3 text-sm leading-relaxed"
        style={{ color: 'var(--color-on-surface-variant)' }}
      >
        {getAvailabilityText({ availability, availabilityNote, waitlistCount })}
      </p>

      <div className="mt-8">
        {getLink ? (
          <a
            href={getLink}
            target="_blank"
            rel="noopener noreferrer"
            className={ctaClassName}
            style={buttonStyle}
          >
            {ctaLabel}
          </a>
        ) : (
          <button
            type="button"
            disabled
            aria-disabled="true"
            className={`${ctaClassName} cursor-not-allowed opacity-50`}
            style={buttonStyle}
          >
            {ctaLabel}
          </button>
        )}
      </div>

      {placeName && (
        <ul
          className="mt-8 border-t text-sm"
          style={{ borderColor: 'var(--color-outline-variant)' }}
        >
          <li
            className="border-b py-4"
            style={{ borderColor: 'var(--color-outline-variant)' }}
          >
            Made in {placeName}
          </li>
        </ul>
      )}
    </section>
  )
}
