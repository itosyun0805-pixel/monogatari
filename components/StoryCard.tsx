import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'

type Props = {
  title: string
  titleJa?: string
  slug: { current: string }
  publishedAt?: string
  location?: string
  heroImage?: object
  excerpt?: string
  tags?: string[]
}

export default function StoryCard({ title, titleJa, slug, publishedAt, location, heroImage, excerpt, tags }: Props) {
  const date = publishedAt ? new Date(publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : null

  return (
    <Link href={`/stories/${slug.current}`} className="group block">
      <div className="overflow-hidden mb-5" style={{ aspectRatio: '3/2', backgroundColor: 'var(--color-surface-high)' }}>
        {heroImage && (
          <Image
            src={urlFor(heroImage).width(720).height(480).url()}
            alt={title}
            width={720}
            height={480}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        )}
      </div>

      <div className="flex items-center gap-3 mb-3">
        {location && (
          <span className="label-caps" style={{ color: 'var(--color-primary-container)', fontSize: '10px' }}>
            ◎ {location.toUpperCase()}
          </span>
        )}
        {date && (
          <span className="label-caps" style={{ color: 'var(--color-outline)', fontSize: '10px' }}>{date}</span>
        )}
      </div>

      <h2 className="font-serif text-2xl mb-2 leading-tight" style={{ color: 'var(--color-on-surface)' }}>
        {title}
      </h2>
      {titleJa && (
        <p className="text-sm mb-3" style={{ color: 'var(--color-on-surface-variant)' }}>{titleJa}</p>
      )}
      {excerpt && (
        <p className="font-sans text-sm leading-relaxed line-clamp-3" style={{ color: 'var(--color-on-surface-variant)' }}>
          {excerpt}
        </p>
      )}

      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.slice(0, 3).map(tag => (
            <span key={tag} className="label-caps" style={{ color: 'var(--color-outline)', fontSize: '10px' }}>
              #{tag}
            </span>
          ))}
        </div>
      )}
    </Link>
  )
}
