import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PieceCard from '@/components/PieceCard'
import { client } from '@/sanity/lib/client'
import { featuredPiecesQuery } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'

export const revalidate = 60

export default async function Home() {
  const pieces = await client.fetch(featuredPiecesQuery)
  const hero = pieces[0]

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative h-screen w-full overflow-hidden">
        {hero?.heroImage && (
          <Image
            src={urlFor(hero.heroImage).width(1600).height(900).url()}
            alt={hero.title}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(28,28,24,0.65) 0%, transparent 60%)' }} />
        <div className="absolute bottom-16 left-8 right-8">
          <h1 className="font-serif text-white mb-3" style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
            MONOGATARI
          </h1>
          <p className="text-white/80 font-sans text-lg">Culture as a bridge, objects as a lens.</p>
          <Link href="/pieces" className="mt-8 inline-flex items-center gap-2 label-caps text-white/60 hover:text-white transition-colors">
            EXPLORE <span>↓</span>
          </Link>
        </div>
      </section>

      {/* Mission statement */}
      <section className="px-8 py-24 text-center" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="max-w-2xl mx-auto">
          <div className="w-8 h-8 border-2 flex items-center justify-center mx-auto mb-8" style={{ borderColor: 'var(--color-primary-container)' }}>
            <span className="font-serif text-sm" style={{ color: 'var(--color-primary-container)' }}>M</span>
          </div>
          <p className="font-sans text-lg leading-relaxed" style={{ color: 'var(--color-on-surface)', lineHeight: '1.8' }}>
            Monogatari is a cultural translator. We don&apos;t just sell objects; we
            connect Japanese traditions to the emotions and habits already in your life.
          </p>
          <div className="mt-8 w-16 mx-auto" style={{ borderBottom: '1px solid var(--color-outline-variant)' }} />
        </div>
      </section>

      {/* Featured pieces */}
      <section className="px-8 pb-24" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="flex items-center justify-between mb-10" style={{ borderBottom: '1px solid var(--color-outline-variant)', paddingBottom: '16px' }}>
          <span className="label-caps" style={{ color: 'var(--color-on-surface-variant)' }}>CURATED LENS</span>
          <Link href="/pieces" className="label-caps flex items-center gap-2" style={{ color: 'var(--color-primary-container)' }}>
            VIEW ALL ——
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pieces.slice(0, 3).map((piece: any) => (
            <PieceCard key={piece._id} {...piece} />
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}
