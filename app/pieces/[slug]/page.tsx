import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionBlock from '@/components/SectionBlock'
import CrossoverBlock from '@/components/CrossoverBlock'
import { client } from '@/sanity/lib/client'
import { pieceBySlugQuery } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'

export const revalidate = 60

type Props = { params: Promise<{ slug: string }> }

export default async function PieceDetailPage({ params }: Props) {
  const { slug } = await params
  const piece = await client.fetch(pieceBySlugQuery, { slug })
  if (!piece) notFound()

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative h-screen w-full overflow-hidden">
        <Image
          src={urlFor(piece.heroImage).width(1600).height(900).url()}
          alt={piece.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(28,28,24,0.7) 0%, transparent 50%)' }} />
        <div className="absolute bottom-16 left-8">
          <h1 className="font-serif text-white" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
            {piece.title}
          </h1>
          <span className="font-serif text-white/60 text-xl">/ {piece.titleJa}</span>
        </div>
      </section>

      {/* Content */}
      <main className="px-8 max-w-7xl mx-auto" style={{ backgroundColor: 'var(--color-surface)' }}>

        {/* Origin */}
        {piece.origin && <SectionBlock label="ORIGIN" body={piece.origin} />}

        {/* Craft */}
        {piece.craft && <SectionBlock label="CRAFT" body={piece.craft} />}

        {/* The Maker */}
        {piece.maker?.name && (
          <div className="py-20 hairline text-center">
            {piece.maker.photo && (
              <div className="w-20 h-20 overflow-hidden mx-auto mb-4" style={{ borderRadius: '50%' }}>
                <Image
                  src={urlFor(piece.maker.photo).width(160).height(160).url()}
                  alt={piece.maker.name}
                  width={80} height={80}
                  className="object-cover w-full h-full"
                />
              </div>
            )}
            <span className="label-caps block mb-2" style={{ color: 'var(--color-on-surface-variant)' }}>THE MAKER</span>
            <p className="font-serif text-xl mb-1" style={{ color: 'var(--color-on-surface)' }}>{piece.maker.name}</p>
            <p className="text-sm mb-6" style={{ color: 'var(--color-on-surface-variant)' }}>{piece.maker.location}</p>
            {piece.maker.quote && (
              <blockquote className="font-serif italic max-w-md mx-auto" style={{ fontSize: '1.5rem', color: 'var(--color-on-surface)', lineHeight: 1.5 }}>
                &ldquo;{piece.maker.quote}&rdquo;
              </blockquote>
            )}
          </div>
        )}
      </main>

      {/* Crossover */}
      {piece.crossover && <CrossoverBlock text={piece.crossover} />}

      <main className="px-8 max-w-7xl mx-auto" style={{ backgroundColor: 'var(--color-surface)' }}>

        {/* New Use */}
        {piece.newUse?.length > 0 && (
          <div className="py-20 hairline">
            <span className="label-caps block mb-10" style={{ color: 'var(--color-on-surface-variant)' }}>NEW USE</span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {piece.newUse.map((item: any) => (
                <div key={item._key}>
                  {item.image && (
                    <Image
                      src={urlFor(item.image).width(700).height(500).url()}
                      alt=""
                      width={700} height={500}
                      className="w-full object-cover mb-4"
                      style={{ aspectRatio: '4/3' }}
                    />
                  )}
                  <p className="font-sans text-sm leading-relaxed" style={{ color: 'var(--color-on-surface-variant)' }}>{item.caption}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* How It Lives */}
        {piece.howItLives && <SectionBlock label="HOW IT LIVES" body={piece.howItLives} />}

        {/* The Keepers */}
        {piece.keepers?.length > 0 && (
          <div className="py-20 hairline">
            <span className="label-caps block mb-8" style={{ color: 'var(--color-on-surface-variant)' }}>THE KEEPERS</span>
            <div className="space-y-8">
              {piece.keepers.map((k: any) => (
                <div key={k._key} className="max-w-xl">
                  <p className="font-serif italic text-lg mb-2" style={{ color: 'var(--color-on-surface)' }}>&ldquo;{k.quote}&rdquo;</p>
                  <p className="label-caps" style={{ color: 'var(--color-on-surface-variant)' }}>— {k.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Place */}
        {piece.placeName && (
          <div className="py-12 hairline flex items-center gap-3">
            <span style={{ color: 'var(--color-outline)' }}>◎</span>
            <Link href="/map" className="label-caps hover:underline" style={{ color: 'var(--color-on-surface-variant)' }}>
              {piece.placeName.toUpperCase()}
            </Link>
          </div>
        )}

        {/* Get */}
        <div className="py-16 text-center" style={{ borderTop: '2px solid var(--color-primary-container)' }}>
          {piece.getLink ? (
            <a
              href={piece.getLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-4 label-caps text-white transition-opacity hover:opacity-80"
              style={{ backgroundColor: 'var(--color-primary-container)' }}
            >
              ACQUIRE {piece.title.toUpperCase()}
            </a>
          ) : (
            <span className="label-caps" style={{ color: 'var(--color-on-surface-variant)' }}>COMING SOON</span>
          )}
        </div>
      </main>

      <Footer />
    </>
  )
}
