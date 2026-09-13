import {
  type Availability,
  formatPrice,
  getCtaLabel,
  resolveAvailability,
} from '@/lib/commerce'

type Props = {
  price?: number
  currency?: string
  availability?: Availability
  getLink?: string
}

export default function MobilePurchaseBar({
  price,
  currency,
  availability: availabilityValue,
  getLink,
}: Props) {
  const availability = resolveAvailability(availabilityValue, getLink)
  const ctaLabel = getCtaLabel(availability)

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 flex items-center gap-4 border-t px-4 py-3 lg:hidden"
      style={{
        borderColor: 'var(--color-outline-variant)',
        backgroundColor: 'var(--color-surface)',
      }}
    >
      <p
        className="min-w-0 flex-1 font-serif text-lg"
        style={{ color: 'var(--color-on-surface)' }}
      >
        {formatPrice(price, currency)}
      </p>

      {getLink ? (
        <a
          href={getLink}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 px-5 py-3 text-center label-caps"
          style={{
            color: 'white',
            backgroundColor: 'var(--color-primary-container)',
          }}
        >
          {ctaLabel}
        </a>
      ) : (
        <button
          type="button"
          disabled
          aria-disabled="true"
          className="shrink-0 cursor-not-allowed px-5 py-3 text-center opacity-50 label-caps"
          style={{
            color: 'white',
            backgroundColor: 'var(--color-primary-container)',
          }}
        >
          {ctaLabel}
        </button>
      )}
    </div>
  )
}
