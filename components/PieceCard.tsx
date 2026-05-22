import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'

type Props = {
  title: string
  titleJa: string
  slug: { current: string }
  heroImage: object
  lifestyleTags?: string[]
  category?: string
}

export default function PieceCard({ title, titleJa, slug, heroImage, lifestyleTags, category }: Props) {
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
      </div>
    </Link>
  )
}
