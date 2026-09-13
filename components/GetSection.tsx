import {
  type Availability,
  getCtaLabel,
  resolveAvailability,
} from '@/lib/commerce'

type Props = {
  availability?: Availability
  getLink?: string
}

export default function GetSection({ availability: value, getLink }: Props) {
  const availability = resolveAvailability(value, getLink)
  const ctaLabel = getCtaLabel(availability)
  const isSecondary = availability === 'sold-out'
  const className =
    'inline-block px-12 py-4 label-caps transition-opacity hover:opacity-80'
  const style = isSecondary
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

  return (
    <section
      className="py-16 text-center"
      style={{ borderTop: '2px solid var(--color-primary-container)' }}
    >
      {getLink ? (
        <a
          href={getLink}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
          style={style}
        >
          {ctaLabel}
        </a>
      ) : (
        <button
          type="button"
          disabled
          aria-disabled="true"
          className={`${className} cursor-not-allowed opacity-50`}
          style={style}
        >
          {ctaLabel}
        </button>
      )}
    </section>
  )
}
