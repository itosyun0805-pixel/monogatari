export type Availability =
  | 'concept'
  | 'in-talks'
  | 'preorder'
  | 'available'
  | 'sold-out'

export function resolveAvailability(
  availability?: Availability,
  getLink?: string,
): Availability {
  return availability ?? (getLink ? 'available' : 'concept')
}

export function formatPrice(price?: number, currency = 'USD') {
  if (typeof price !== 'number') return 'Price on request'

  try {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
      currencyDisplay: 'narrowSymbol',
      minimumFractionDigits: 0,
      maximumFractionDigits: Number.isInteger(price) ? 0 : 2,
    }).format(price)
  } catch {
    return `${currency} ${price.toLocaleString('en-US')}`
  }
}

export function getAvailabilityText({
  availability,
  availabilityNote,
  waitlistCount,
}: {
  availability: Availability
  availabilityNote?: string
  waitlistCount?: number
}) {
  const labels: Record<Availability, string> = {
    concept: 'Concept only',
    'in-talks': 'In talks with the maker',
    preorder: 'Preorder',
    available: 'Available',
    'sold-out': 'Sold out',
  }

  const waitlist =
    (availability === 'concept' || availability === 'preorder') &&
    typeof waitlistCount === 'number'
      ? `${waitlistCount.toLocaleString('en-US')} ${waitlistCount === 1 ? 'person' : 'people'} on the waitlist`
      : undefined

  return [labels[availability], availabilityNote, waitlist]
    .filter(Boolean)
    .join(' — ')
}

export function getCtaLabel(availability: Availability) {
  const labels: Record<Availability, string> = {
    available: 'Add to Cart',
    preorder: 'Reserve — 20% Deposit',
    concept: 'Join the Waitlist',
    'in-talks': 'Get Notified',
    'sold-out': 'Notify Me When Back',
  }

  return labels[availability]
}
