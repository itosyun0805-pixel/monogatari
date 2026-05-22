import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PortableText, type PortableTextBlock, type PortableTextComponents } from '@portabletext/react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PieceCard from '@/components/PieceCard'
import { client } from '@/sanity/lib/client'
import { storyBySlugQuery } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'

export const revalidate = 60

type Props = { params: Promise<{ slug: string }> }

const bodyComponents: PortableTextComponents = {
  types: {
    image: ({ value }: { value: any }) => (
      <figure className="my-10">
        <Image
          src={urlFor(value).width(900).url()}
          alt={value.caption || ''}
          width={900}
          height={600}
          className="w-full object-cover"
        />
        {value.caption && (
          <figcaption className="mt-3 text-center label-caps" style={{ color: 'var(--color-outline)', fontSize: '10px' }}>
            {value.caption}
          </figcaption>
        )}
      </figure>
    ),
  },
  block: {
    h2: ({ children }) => (
      <h2 className="font-serif mt-12 mb-4" style={{ fontSize: '1.75rem', color: 'var(--color-on-surface)', lineHeight: 1.3 }}>{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-serif mt-8 mb-3" style={{ fontSize: '1.25rem', color: 'var(--color-on-surface)' }}>{children}</h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-8 pl-6 font-serif italic" style={{ borderLeft: '3px solid var(--color-primary-container)', fontSize: '1.25rem', color: 'var(--color-on-surface)', lineHeight: 1.6 }}>
        {children}
      </blockquote>
    ),
    normal: ({ children }) => (
      <p className="mb-6 font-sans" style={{ color: 'var(--color-on-surface)', lineHeight: '1.85', fontSize: '1.0625rem' }}>{children}</p>
    ),
  },
}

export default async function StoryDetailPage({ params }: Props) {
  const { slug } = await params
  const story = await client.fetch(storyBySlugQuery, { slug })
  if (!story) notFound()

  const date = story.publishedAt
    ? new Date(story.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    : null

  return (
    <>
      <Navbar />

      {/* Hero */}
      {story.heroImage ? (
        <section className="relative w-full overflow-hidden" style={{ height: '70vh' }}>
          <Image
            src={urlFor(story.heroImage).width(1600).height(900).url()}
            alt={story.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(28,28,24,0.75) 0%, transparent 55%)' }} />
          <div className="absolute bottom-12 left-8 right-8 max-w-3xl">
            <div className="flex items-center gap-4 mb-4">
              {story.location && (
                <span className="label-caps text-white/70" style={{ fontSize: '11px' }}>◎ {story.location.toUpperCase()}</span>
              )}
              {date && (
                <span className="label-caps text-white/50" style={{ fontSize: '11px' }}>{date}</span>
              )}
            </div>
            <h1 className="font-serif text-white" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1 }}>
              {story.title}
            </h1>
            {story.titleJa && (
              <p className="font-serif text-white/60 text-xl mt-2">/ {story.titleJa}</p>
            )}
          </div>
        </section>
      ) : (
        <section className="pt-40 pb-16 px-8" style={{ backgroundColor: 'var(--color-surface-container)' }}>
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              {story.location && (
                <span className="label-caps" style={{ color: 'var(--color-primary-container)', fontSize: '11px' }}>◎ {story.location.toUpperCase()}</span>
              )}
              {date && (
                <span className="label-caps" style={{ color: 'var(--color-outline)', fontSize: '11px' }}>{date}</span>
              )}
            </div>
            <h1 className="font-serif mb-3" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--color-on-surface)', lineHeight: 1.1 }}>
              {story.title}
            </h1>
            {story.titleJa && (
              <p className="font-serif text-xl" style={{ color: 'var(--color-on-surface-variant)' }}>/ {story.titleJa}</p>
            )}
          </div>
        </section>
      )}

      {/* Body */}
      <main className="px-8 pb-24" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="max-w-2xl mx-auto pt-16">

          {story.excerpt && (
            <p className="font-serif text-xl mb-10 leading-relaxed" style={{ color: 'var(--color-on-surface-variant)' }}>
              {story.excerpt}
            </p>
          )}

          {story.excerpt && <div className="hairline mb-10" />}

          {story.body && (
            <PortableText value={story.body as PortableTextBlock[]} components={bodyComponents} />
          )}

          {story.tags && story.tags.length > 0 && (
            <div className="flex flex-wrap gap-3 mt-16 pt-8" style={{ borderTop: '1px solid var(--color-outline-variant)' }}>
              {story.tags.map((tag: string) => (
                <span key={tag} className="label-caps" style={{ color: 'var(--color-outline)', fontSize: '10px' }}>#{tag}</span>
              ))}
            </div>
          )}
        </div>

        {/* Related Pieces */}
        {story.relatedPieces?.length > 0 && (
          <div className="max-w-5xl mx-auto mt-24 pt-16" style={{ borderTop: '1px solid var(--color-outline-variant)' }}>
            <span className="label-caps block mb-10" style={{ color: 'var(--color-on-surface-variant)' }}>RELATED PIECES</span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {story.relatedPieces.map((piece: any) => (
                <PieceCard key={piece._id} {...piece} />
              ))}
            </div>
          </div>
        )}

        {/* Back */}
        <div className="max-w-2xl mx-auto mt-16">
          <Link href="/stories" className="label-caps transition-opacity hover:opacity-60" style={{ color: 'var(--color-on-surface-variant)' }}>
            ← ALL STORIES
          </Link>
        </div>
      </main>

      <Footer />
    </>
  )
}
