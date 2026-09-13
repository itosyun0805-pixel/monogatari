import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import {
  type Availability,
  formatPrice,
  getAvailabilityText,
  resolveAvailability,
} from '@/lib/commerce'

type Props = {
  title: string
  titleJa: string
  slug: { current: string }
  heroImage?: object | null
  lifestyleTags?: string[]
  category?: string
  price?: number
  currency?: string
  availability?: Availability
  availabilityNote?: string
  waitlistCount?: number
  getLink?: string
}

export default function PieceCard({
  title,
  titleJa,
  slug,
  heroImage,
  lifestyleTags,
  category,
  price,
  currency,
  availability: availabilityValue,
  availabilityNote,
  waitlistCount,
  getLink,
}: Props) {
  const availability = resolveAvailability(availabilityValue, getLink)

  return (
    <Link href={`/pieces/${slug.current}`} className="group block">
      <div className="overflow-hidden" style={{ aspectRatio: '4/5', backgroundColor: 'var(--color-surface-high)' }}>
        {heroImage && (
          <Image
            src={urlFor(heroImage).width(600).height(750).url()}
            alt={title}
            width={600}
            height={750}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        )}
      </div>
      <div className="mt-4">
        <div className="flex flex-wrap gap-2 mb-2">
          {lifestyleTags?.slice(0, 2).map(tag => (
            <span key={tag} className="label-caps" style={{ color: 'var(--color-primary-container)', fontSize: '10px' }}>
              {tag}
            </span>
          ))}
          {category && (
            <span className="label-caps" style={{ color: 'var(--color-outline)', fontSize: '10px' }}>{category}</span>
          )}
        </div>
        <div className="flex items-baseline justify-between">
          <span className="font-serif text-xl" style={{ color: 'var(--color-on-surface)' }}>{title}</span>
          <span className="text-sm ml-3" style={{ color: 'var(--color-on-surface-variant)' }}>{titleJa}</span>
        </div>
        <div className="mt-4 border-t pt-4" style={{ borderColor: 'var(--color-outline-variant)' }}>
          <p className="font-sans text-sm" style={{ color: 'var(--color-on-surface)' }}>
            {formatPrice(price, currency)}
          </p>
          <p className="mt-1 text-xs" style={{ color: 'var(--color-on-surface-variant)' }}>
            {getAvailabilityText({ availability, availabilityNote, waitlistCount })}
          </p>
        </div>
      </div>
    </Link>
  )
}
