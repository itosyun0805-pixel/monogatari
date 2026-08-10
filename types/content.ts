import type { PortableTextBlock } from '@portabletext/react'

export type PieceSummary = {
  _id: string
  title: string
  titleJa: string
  slug: { current: string }
  category?: string
  lifestyleTags?: string[]
  region?: string
  placeName?: string
  heroImage?: object | null
  crossover?: string
  publishedAt?: string
}

export type PieceDetail = PieceSummary & {
  origin?: PortableTextBlock[]
  craft?: PortableTextBlock[]
  maker?: {
    name?: string
    photo?: object
    location?: string
    quote?: string
  }
  newUse?: Array<{ _key?: string; image?: object; caption?: string }>
  howItLives?: PortableTextBlock[]
  keepers?: Array<{ _key?: string; name?: string; quote?: string }>
  getLink?: string
}
