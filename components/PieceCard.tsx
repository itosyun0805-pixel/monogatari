import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { NorenLink } from './NorenTransition'
import type { PieceSummary } from '@/types/content'
import { getEditorialStoryForPiece } from '@/content/editorial'

export default function PieceCard({ title, titleJa, slug, heroImage, lifestyleTags, category }: PieceSummary) {
  const editorialImage = getEditorialStoryForPiece(slug.current)

  return (
    <NorenLink href={`/pieces/${slug.current}`} className="piece-card">
      <div className="piece-card__image">
        {(editorialImage || heroImage) && (
          <Image
            src={editorialImage?.heroImage || urlFor(heroImage!).width(600).height(750).url()}
            alt={editorialImage?.heroAlt || title}
            width={600}
            height={750}
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <div className="piece-card__copy">
        <div className="piece-card__meta">
          {lifestyleTags?.slice(0, 2).map(tag => (
            <span key={tag}>
              {tag}
            </span>
          ))}
          {category && (
            <span>{category}</span>
          )}
        </div>
        <div className="piece-card__title">
          <span>{title}</span>
          <small lang="ja">{titleJa}</small>
        </div>
      </div>
    </NorenLink>
  )
}
