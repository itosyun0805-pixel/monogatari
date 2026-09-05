import type { PieceSummary } from '@/types/content'

export const tsurushiBinaSummary: PieceSummary = {
  _id: 'piece-tsurushi-bina-kit',
  title: 'Tsurushi-bina Kit',
  titleJa: '吊るし雛キット',
  slug: { current: 'tsurushi-bina-kit' },
  category: '工芸',
  lifestyleTags: ['Gift', 'Mindful Rituals'],
  region: '関東',
  placeName: 'Japan / 日本',
  imageUrl: '/tsurushi-bina/hero-draft.png',
  saleStatus: 'available',
  isAvailable: true,
  price: 50,
  currency: 'EUR',
  publishedAt: '2026-09-05T11:45:00.000Z',
}

export function withTsurushiBina(pieces: PieceSummary[]) {
  return [tsurushiBinaSummary, ...pieces.filter((piece) => piece.slug.current !== tsurushiBinaSummary.slug.current)]
}
