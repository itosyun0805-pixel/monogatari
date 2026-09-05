import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PieceCard from '@/components/PieceCard'
import StructuredData from '@/components/StructuredData'
import { client } from '@/sanity/lib/client'
import { allPiecesQuery } from '@/sanity/lib/queries'
import { siteUrl } from '@/lib/site'
import type { PieceSummary } from '@/types/content'
import { withTsurushiBina } from '@/content/tsurushi-bina-summary'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Japanese Objects',
  description: 'A curated index of Japanese objects, their makers, origins, rituals, and place in contemporary life.',
  alternates: { canonical: '/pieces' },
}

export default async function PiecesPage() {
  const editorialPieces = await client.fetch<PieceSummary[]>(allPiecesQuery)
  const pieces = withTsurushiBina(editorialPieces)

  return (
    <>
      <Navbar />
      <main className="objects-page">
        <header className="objects-header page-shell">
          <div>
            <span className="eyebrow">OBJECTS · もの</span>
            <h1>An index of<br />useful stories.</h1>
          </div>
          <p>Japanese objects selected for the life around them: where they come from, how they are made, and what they can become in yours.</p>
        </header>

        <div className="objects-index page-shell">
          <span>THE LIVING OBJECT INDEX</span>
          <p>{pieces.length} objects · arranged as a collection, not a catalogue</p>
        </div>

        <section className="objects-grid page-shell" aria-label="Japanese objects">
          {pieces.map((piece) => <PieceCard key={piece._id} {...piece} />)}
        </section>

        {pieces.length === 0 && <p className="objects-empty page-shell">The first objects are being prepared.</p>}
      </main>
      <Footer />
      <StructuredData data={{
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Monogatari Japanese Object Index',
        itemListElement: pieces.map((piece, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: piece.title,
          url: `${siteUrl}/pieces/${piece.slug.current}`,
        })),
      }} />
    </>
  )
}
