import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PieceCard from '@/components/PieceCard'
import { client } from '@/sanity/lib/client'
import { allPiecesQuery } from '@/sanity/lib/queries'

export const revalidate = 60

const CATEGORIES = ['ALL', '工芸', '食', '日用品', '衣', 'その他']
const LIFESTYLE_TAGS = ['Whisky Lovers', 'Minimalist Kitchen', 'Zero Waste', 'Slow Morning', 'Yoga & Wellness', 'Gift', 'Zen Living', 'Mindful Rituals', 'Interior Design']

export default async function PiecesPage() {
  const pieces = await client.fetch(allPiecesQuery)

  return (
    <>
      <Navbar />
      <main className="pt-32 px-8 pb-24 min-h-screen" style={{ backgroundColor: 'var(--color-surface)' }}>

        {/* Header */}
        <div className="mb-12">
          <h1 className="font-serif mb-4" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', color: 'var(--color-on-surface)', lineHeight: 1, letterSpacing: '-0.02em' }}>
            PIECES
          </h1>
          <p className="font-sans max-w-xl" style={{ color: 'var(--color-on-surface-variant)', lineHeight: '1.7' }}>
            A curated collection of artifacts. Each piece embodies the quiet confidence and
            tactile heritage of Japanese craftsmanship.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-4">
          {CATEGORIES.map(cat => (
            <button key={cat} className="label-caps px-4 py-2 border transition-colors" style={{ borderColor: 'var(--color-outline-variant)', color: 'var(--color-on-surface)' }}>
              {cat} {cat !== 'ALL' && <span style={{ color: 'var(--color-on-surface-variant)' }}>{cat === '工芸' ? '工芸' : cat}</span>}
            </button>
          ))}
        </div>

        {/* Tag filter */}
        <div className="flex flex-wrap gap-3 mb-12" style={{ borderBottom: '1px solid var(--color-outline-variant)', paddingBottom: '24px' }}>
          {LIFESTYLE_TAGS.map(tag => (
            <span key={tag} className="label-caps" style={{ color: 'var(--color-on-surface-variant)', fontSize: '10px' }}>
              # {tag.toUpperCase()}
            </span>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {pieces.map((piece: any) => (
            <PieceCard key={piece._id} {...piece} />
          ))}
        </div>

        {pieces.length === 0 && (
          <div className="text-center py-24">
            <p className="font-sans" style={{ color: 'var(--color-on-surface-variant)' }}>No pieces found.</p>
          </div>
        )}

        <div className="mt-16 text-center" style={{ borderTop: '1px solid var(--color-outline-variant)', paddingTop: '40px' }}>
          <span className="label-caps" style={{ color: 'var(--color-on-surface-variant)' }}>DISCOVER MORE ↓</span>
        </div>
      </main>
      <Footer />
    </>
  )
}
