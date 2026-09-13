import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import BuyBox from '@/components/BuyBox'
import CrossoverBlock from '@/components/CrossoverBlock'
import Footer from '@/components/Footer'
import GetSection from '@/components/GetSection'
import MobilePurchaseBar from '@/components/MobilePurchaseBar'
import Navbar from '@/components/Navbar'
import SectionBlock from '@/components/SectionBlock'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { pieceBySlugQuery } from '@/sanity/lib/queries'

export const revalidate = 60

type Props = { params: Promise<{ slug: string }> }

export default async function PieceDetailPage({ params }: Props) {
  const { slug } = await params
  const piece = await client.fetch(pieceBySlugQuery, { slug })
  if (!piece) notFound()

  return (
    <>
      <Navbar />

      <main
        className="pb-24 lg:grid lg:grid-cols-[minmax(0,1fr)_24rem] lg:pb-0 xl:grid-cols-[minmax(0,1fr)_28rem]"
        style={{ backgroundColor: 'var(--color-surface)' }}
      >
        <div className="min-w-0">
          <section className="relative h-[68svh] min-h-[32rem] w-full overflow-hidden lg:h-screen">
            {piece.heroImage ? (
              <Image
                src={urlFor(piece.heroImage).width(1600).height(1200).url()}
                alt={piece.title}
                fill
                className="object-cover"
                priority
              />
            ) : (
              <div
                className="absolute inset-0"
                style={{ backgroundColor: 'var(--color-surface-high)' }}
              />
            )}
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(28,28,24,0.7) 0%, transparent 55%)' }}
            />
            <div className="absolute bottom-12 left-6 sm:left-8 lg:bottom-16">
              <p className="label-caps mb-3 text-white/70">SHOP / PIECE</p>
              <h1
                className="font-serif text-white"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1.1, letterSpacing: '-0.02em' }}
              >
                {piece.title}
              </h1>
              <span className="font-serif text-xl text-white/60" lang="ja">/ {piece.titleJa}</span>
            </div>
          </section>

          <div className="px-6 py-12 sm:px-8 lg:hidden">
            <BuyBox
              headingId="buy-box-title-mobile"
              title={piece.title}
              titleJa={piece.titleJa}
              price={piece.price}
              currency={piece.currency}
              availability={piece.availability}
              availabilityNote={piece.availabilityNote}
              waitlistCount={piece.waitlistCount}
              getLink={piece.getLink}
              placeName={piece.placeName}
            />
          </div>

          <article className="mx-auto max-w-4xl px-6 sm:px-8">
            {piece.newUse?.length > 0 && (
              <section className="hairline py-20">
                <span
                  className="label-caps mb-10 block"
                  style={{ color: 'var(--color-on-surface-variant)' }}
                >
                  NEW USE
                </span>
                <div className="grid grid-cols-1 gap-10">
                  {piece.newUse.map((item: any, index: number) => (
                    <div key={item._key ?? item.caption}>
                      {item.image && (
                        <Image
                          src={urlFor(item.image).width(900).height(675).url()}
                          alt={`${piece.title} in contemporary use, view ${index + 1}`}
                          width={900}
                          height={675}
                          className="mb-4 w-full object-cover"
                          style={{ aspectRatio: '4/3' }}
                        />
                      )}
                      <p
                        className="font-sans text-sm leading-relaxed"
                        style={{ color: 'var(--color-on-surface-variant)' }}
                      >
                        {item.caption}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {piece.origin && <SectionBlock label="ORIGIN" body={piece.origin} />}
            {piece.craft && <SectionBlock label="CRAFT" body={piece.craft} />}

            {piece.maker?.name && (
              <section className="hairline py-20 text-center">
                {piece.maker.photo && (
                  <div className="mx-auto mb-4 h-20 w-20 overflow-hidden rounded-full">
                    <Image
                      src={urlFor(piece.maker.photo).width(160).height(160).url()}
                      alt={piece.maker.name}
                      width={80}
                      height={80}
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}
                <span
                  className="label-caps mb-2 block"
                  style={{ color: 'var(--color-on-surface-variant)' }}
                >
                  THE MAKER
                </span>
                <p className="font-serif mb-1 text-xl" style={{ color: 'var(--color-on-surface)' }}>
                  {piece.maker.name}
                </p>
                <p className="mb-6 text-sm" style={{ color: 'var(--color-on-surface-variant)' }}>
                  {piece.maker.location}
                </p>
                {piece.maker.quote && (
                  <blockquote
                    className="font-serif mx-auto max-w-md text-2xl italic leading-relaxed"
                    style={{ color: 'var(--color-on-surface)' }}
                  >
                    &ldquo;{piece.maker.quote}&rdquo;
                  </blockquote>
                )}
              </section>
            )}

            {piece.crossover && <CrossoverBlock text={piece.crossover} />}

            {piece.howItLives && <SectionBlock label="HOW IT LIVES" body={piece.howItLives} />}

            {piece.keepers?.length > 0 && (
              <section className="hairline py-20">
                <span
                  className="label-caps mb-8 block"
                  style={{ color: 'var(--color-on-surface-variant)' }}
                >
                  THE KEEPERS
                </span>
                <div className="space-y-8">
                  {piece.keepers.map((keeper: any) => (
                    <div key={keeper._key ?? keeper.name} className="max-w-xl">
                      <p
                        className="font-serif mb-2 text-lg italic"
                        style={{ color: 'var(--color-on-surface)' }}
                      >
                        &ldquo;{keeper.quote}&rdquo;
                      </p>
                      <p className="label-caps" style={{ color: 'var(--color-on-surface-variant)' }}>
                        — {keeper.name}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {piece.placeName && (
              <div className="hairline flex items-center gap-3 py-12">
                <span style={{ color: 'var(--color-outline)' }}>◎</span>
                <Link
                  href="/map"
                  className="label-caps hover:underline"
                  style={{ color: 'var(--color-on-surface-variant)' }}
                >
                  {piece.placeName.toUpperCase()}
                </Link>
              </div>
            )}

            <GetSection availability={piece.availability} getLink={piece.getLink} />
          </article>
        </div>

        <aside
          className="hidden border-l lg:sticky lg:top-0 lg:flex lg:h-screen lg:self-start lg:items-center lg:px-8 xl:px-12"
          style={{ borderColor: 'var(--color-outline-variant)' }}
        >
          <div className="w-full">
              <BuyBox
                headingId="buy-box-title-desktop"
                title={piece.title}
                titleJa={piece.titleJa}
                price={piece.price}
                currency={piece.currency}
                availability={piece.availability}
                availabilityNote={piece.availabilityNote}
                waitlistCount={piece.waitlistCount}
                getLink={piece.getLink}
                placeName={piece.placeName}
              />
          </div>
        </aside>
      </main>

      <MobilePurchaseBar
        price={piece.price}
        currency={piece.currency}
        availability={piece.availability}
        getLink={piece.getLink}
      />

      <Footer />
    </>
  )
}
