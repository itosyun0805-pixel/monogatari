import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import NewsletterSignup from '@/components/NewsletterSignup'
import StructuredData from '@/components/StructuredData'
import { NorenLink } from '@/components/NorenTransition'
import PieceCard from '@/components/PieceCard'
import { editorialStories } from '@/content/editorial'
import { client } from '@/sanity/lib/client'
import { allPiecesQuery } from '@/sanity/lib/queries'
import { siteDescription, siteUrl } from '@/lib/site'
import type { PieceSummary } from '@/types/content'

export const revalidate = 60

export default async function Home() {
  const pieces = await client.fetch<PieceSummary[]>(allPiecesQuery)
  const hero = pieces.find((piece) => piece.slug?.current === 'noren') || pieces[0]
  const featured = [hero, ...pieces.filter((piece) => piece._id !== hero?._id)].filter((piece): piece is PieceSummary => Boolean(piece)).slice(0, 3)
  const leadStory = editorialStories[0]

  return (
    <>
      <Navbar />
      <main>
        <section className="home-hero">
          <Image
            src={leadStory.heroImage}
            alt={leadStory.heroAlt}
            fill
            className="home-hero__image"
            priority
            sizes="100vw"
          />
          <div className="home-hero__veil" />
          <div className="home-hero__copy">
            <span className="eyebrow eyebrow--light">A MAGAZINE YOU CAN LIVE WITH</span>
            <h1>Objects carry<br />stories across<br />cultures.</h1>
            <p>Japanese objects, the people behind them, and the context that helps them live in your world.</p>
            <div className="button-row">
              <NorenLink href="/magazine" className="button button--light">Read the magazine</NorenLink>
              <NorenLink href="/pieces" className="text-link text-link--light">Meet the objects <span>↗</span></NorenLink>
            </div>
          </div>
          <div className="home-hero__threshold" aria-hidden="true">
            <span lang="ja">くぐる</span>
            <i />
          </div>
        </section>

        <section className="manifesto page-shell">
          <div className="manifesto__mark"><span className="noren-mark" aria-hidden="true"><i /><i /></span></div>
          <div>
            <span className="eyebrow">MONOGATARI · 物語</span>
            <p className="manifesto__lead">Japan is not hard to love. It is hard to explain.</p>
            <p className="manifesto__body">We translate objects through use, history, and cultural context — not as relics, but as living expressions made for homes now.</p>
          </div>
        </section>

        <section className="home-section page-shell">
          <header className="section-heading">
            <div><span className="eyebrow">OBJECTS · もの</span><h2>Three ways into Japan.</h2></div>
            <NorenLink href="/pieces" className="text-link">Explore all objects <span>↗</span></NorenLink>
          </header>
          <div className="piece-grid">
            {featured.map((piece) => <PieceCard key={piece._id} {...piece} />)}
          </div>
        </section>

        <section className="editorial-feature">
          <div className="page-shell editorial-feature__grid">
            <div className="editorial-feature__image">
              <Image
                src={leadStory.heroImage}
                alt={leadStory.heroAlt}
                fill
                sizes="(max-width: 800px) 100vw, 58vw"
                className="object-cover"
              />
            </div>
            <div className="editorial-feature__copy">
              <span className="eyebrow">MAGAZINE · ISSUE 01</span>
              <p className="story-number">STORY {leadStory.number} · {leadStory.readTime}</p>
              <h2>{leadStory.title}</h2>
              <p className="japanese-title" lang="ja">{leadStory.titleJa}</p>
              <p>{leadStory.excerpt}</p>
              <NorenLink href={`/magazine/${leadStory.slug}`} className="button button--ink">Enter the story</NorenLink>
            </div>
          </div>
        </section>

        <section className="home-section page-shell">
          <header className="section-heading">
            <div><span className="eyebrow">LATEST READING · 最新の読み物</span><h2>Context before possession.</h2></div>
            <NorenLink href="/magazine" className="text-link">Open the magazine <span>↗</span></NorenLink>
          </header>
          <div className="story-list">
            {editorialStories.slice(1, 5).map((story) => (
              <NorenLink href={`/magazine/${story.slug}`} key={story.slug} className="story-row">
                <span className="story-row__meta">{story.category}<small>{story.format}</small></span>
                <span><b>{story.title}</b><small lang="ja">{story.titleJa}</small></span>
                <span>{story.readTime} ↗</span>
              </NorenLink>
            ))}
          </div>
        </section>

        <section className="home-letter">
          <div className="page-shell home-letter__inner">
            <div>
              <span className="eyebrow eyebrow--light">THE LETTER · ニュースレター</span>
              <h2>One object.<br />One story.<br />Every week.</h2>
              <p>No discount noise. Just a useful object, the people behind it, and the life around it.</p>
            </div>
            <NewsletterSignup source="home" />
          </div>
        </section>
      </main>
      <Footer />
      <StructuredData data={{
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Organization',
            '@id': `${siteUrl}/#organization`,
            name: 'Monogatari',
            alternateName: 'mono.stories',
            url: siteUrl,
            description: siteDescription,
            sameAs: ['https://www.instagram.com/mono.stories/'],
          },
          {
            '@type': 'WebSite',
            '@id': `${siteUrl}/#website`,
            name: 'Monogatari',
            url: siteUrl,
            description: siteDescription,
            publisher: { '@id': `${siteUrl}/#organization` },
            inLanguage: 'en',
          },
        ],
      }} />
    </>
  )
}
