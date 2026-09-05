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
  imageUrl?: string
  crossover?: string
  publishedAt?: string
  saleStatus?: 'editorial' | 'waitlist' | 'available' | 'soldOut'
  isAvailable?: boolean
  price?: number
  currency?: 'USD' | 'JPY' | 'GBP' | 'EUR'
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
  makerVerified?: boolean
  newUse?: Array<{ _key?: string; image?: object; caption?: string }>
  howItLives?: PortableTextBlock[]
  keepers?: Array<{ _key?: string; name?: string; quote?: string }>
  price?: number
  currency?: 'USD' | 'JPY' | 'GBP' | 'EUR'
  checkoutUrl?: string
  availabilityNote?: string
  shippingNote?: string
  salesReady?: boolean
  getLink?: string
}
