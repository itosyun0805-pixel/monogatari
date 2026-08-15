import Image from 'next/image'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionBlock from '@/components/SectionBlock'
import CrossoverBlock from '@/components/CrossoverBlock'
import StructuredData from '@/components/StructuredData'
import PurchasePanel from '@/components/PurchasePanel'
import { NorenLink } from '@/components/NorenTransition'
import { client } from '@/sanity/lib/client'
import { allPiecesQuery, pieceBySlugQuery } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'
import { siteUrl } from '@/lib/site'
import { getEditorialStoryForPiece } from '@/content/editorial'
import type { PieceDetail, PieceSummary } from '@/types/content'

export const revalidate = 60

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  const pieces = await client.fetch<PieceSummary[]>(allPiecesQuery)
  return pieces.map((piece) => ({ slug: piece.slug.current }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const piece = await client.fetch<PieceDetail | null>(pieceBySlugQuery, { slug })
  if (!piece) return {}
  const editorialStory = getEditorialStoryForPiece(piece.slug.current)
  const description = piece.crossover || `Discover the origin, craft, maker, and contemporary life of ${piece.title}, a Japanese ${piece.category || 'object'}.`
  const image = editorialStory ? `${siteUrl}${editorialStory.heroImage}` : piece.heroImage ? urlFor(piece.heroImage).width(1200).height(630).url() : undefined

  return {
    title: piece.title,
    description,
    alternates: { canonical: `/pieces/${piece.slug.current}` },
    openGraph: {
      type: 'article',
      title: piece.title,
      description,
      url: `/pieces/${piece.slug.current}`,
      images: image ? [{ url: image, width: 1200, height: 630, alt: piece.title }] : undefined,
    },
    twitter: { card: 'summary_large_image', title: piece.title, description, images: image ? [image] : undefined },
  }
}

export default async function PieceDetailPage({ params }: Props) {
  const { slug } = await params
  const piece = await client.fetch<PieceDetail | null>(pieceBySlugQuery, { slug })
  if (!piece) notFound()
  const editorialStory = getEditorialStoryForPiece(piece.slug.current)
  const heroImage = editorialStory?.heroImage || (piece.heroImage ? urlFor(piece.heroImage).width(1600).height(900).url() : undefined)
  const isSellable = piece.saleStatus === 'available'
    && piece.salesReady
    && Boolean(piece.checkoutUrl)
    && typeof piece.price === 'number'
  const objectStructuredData = isSellable ? {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: piece.title,
    alternateName: piece.titleJa,
    description: piece.crossover || `A Japanese ${piece.category || 'object'} presented with its origin, making, and everyday use.`,
    image: heroImage ? [heroImage.startsWith('/') ? `${siteUrl}${heroImage}` : heroImage] : undefined,
    url: `${siteUrl}/pieces/${piece.slug.current}`,
    category: piece.category,
    brand: { '@type': 'Brand', name: 'Monogatari' },
    offers: {
      '@type': 'Offer',
      price: piece.price,
      priceCurrency: piece.currency || 'USD',
      availability: 'https://schema.org/InStock',
      url: piece.checkoutUrl,
    },
  } : {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: piece.title,
    alternateName: piece.titleJa,
    description: piece.crossover || `A Japanese ${piece.category || 'object'} presented with its origin, making, and everyday use.`,
    image: heroImage ? [heroImage.startsWith('/') ? `${siteUrl}${heroImage}` : heroImage] : undefined,
    url: `${siteUrl}/pieces/${piece.slug.current}`,
    category: piece.category,
    publisher: { '@type': 'Organization', name: 'Monogatari', url: siteUrl },
  }

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative h-screen w-full overflow-hidden">
        {heroImage ? (
          <Image
            src={heroImage}
            alt={editorialStory?.heroAlt || piece.title}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="absolute inset-0" style={{ backgroundColor: 'var(--color-surface-dim)' }} />
        )}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(28,28,24,0.7) 0%, transparent 50%)' }} />
        <div className="piece-hero__title absolute left-8">
          <h1 className="font-serif text-white" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
            {piece.title}
          </h1>
          <span className="font-serif text-white/60 text-xl">/ {piece.titleJa}</span>
        </div>
        <a className={`piece-hero__commerce ${isSellable ? 'piece-hero__commerce--available' : ''}`} href="#purchase">
          {isSellable ? 'ACQUIRE · 販売中' : piece.saleStatus === 'soldOut' ? 'SOLD OUT · 完売' : 'COMING SOON · 販売準備中'}
          <span aria-hidden="true">↓</span>
        </a>
        {editorialStory && <span className="piece-hero__image-note">EDITORIAL IMAGE · SOURCING IN PROGRESS</span>}
      </section>

      {/* Content */}
      <main className="px-8 max-w-7xl mx-auto" style={{ backgroundColor: 'var(--color-surface)' }}>

        {/* Origin */}
        {piece.origin && <SectionBlock label="ORIGIN" body={piece.origin} />}

        {/* Craft */}
        {piece.craft && <SectionBlock label="CRAFT" body={piece.craft} />}

        {/* The Maker */}
        {piece.makerVerified && piece.maker?.name && (
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
        {(piece.newUse?.length ?? 0) > 0 && (
          <div className="py-20 hairline">
            <span className="label-caps block mb-10" style={{ color: 'var(--color-on-surface-variant)' }}>NEW USE</span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {piece.newUse?.map((item, itemIndex) => (
                <div key={item._key || item.caption || itemIndex}>
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
        {/* Place */}
        {piece.placeName && (
          <div className="py-12 hairline flex items-center gap-3">
            <span style={{ color: 'var(--color-outline)' }}>◎</span>
            <NorenLink href="/map" className="label-caps hover:underline" style={{ color: 'var(--color-on-surface-variant)' }}>
              {piece.placeName.toUpperCase()}
            </NorenLink>
          </div>
        )}

        <PurchasePanel
          title={piece.title}
          slug={piece.slug.current}
          status={piece.saleStatus}
          price={piece.price}
          currency={piece.currency}
          checkoutUrl={piece.checkoutUrl}
          availabilityNote={piece.availabilityNote}
          shippingNote={piece.shippingNote}
          salesReady={piece.salesReady}
          editorialHref={editorialStory ? `/magazine/${editorialStory.slug}` : undefined}
        />
      </main>

      <Footer />
      <StructuredData data={objectStructuredData} />
      <StructuredData data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Objects', item: `${siteUrl}/pieces` },
          { '@type': 'ListItem', position: 3, name: piece.title, item: `${siteUrl}/pieces/${piece.slug.current}` },
        ],
      }} />
    </>
  )
}
