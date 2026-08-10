import Image from 'next/image'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import NewsletterSignup from '@/components/NewsletterSignup'
import StructuredData from '@/components/StructuredData'
import { NorenLink } from '@/components/NorenTransition'
import { editorialStories, getEditorialStory } from '@/content/editorial'
import { client } from '@/sanity/lib/client'
import { pieceBySlugQuery } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'
import { siteUrl } from '@/lib/site'

export const revalidate = 60

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return editorialStories.map((story) => ({ slug: story.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const story = getEditorialStory(slug)
  if (!story) return {}
  const piece = await client.fetch(pieceBySlugQuery, { slug: story.relatedPieceSlug })
  const image = piece?.heroImage ? urlFor(piece.heroImage).width(1200).height(630).url() : undefined

  return {
    title: story.title,
    description: story.excerpt,
    alternates: { canonical: `/magazine/${story.slug}` },
    openGraph: {
      type: 'article',
      title: story.title,
      description: story.excerpt,
      url: `/magazine/${story.slug}`,
      publishedTime: story.publishedAt,
      authors: ['Shun Ito'],
      images: image ? [{ url: image, width: 1200, height: 630, alt: story.title }] : undefined,
    },
    twitter: { card: 'summary_large_image', title: story.title, description: story.excerpt, images: image ? [image] : undefined },
  }
}

export default async function MagazineStoryPage({ params }: Props) {
  const { slug } = await params
  const story = getEditorialStory(slug)
  if (!story) notFound()
  const piece = await client.fetch(pieceBySlugQuery, { slug: story.relatedPieceSlug })
  const index = editorialStories.indexOf(story)
  const next = editorialStories[(index + 1) % editorialStories.length]
  const image = piece?.heroImage ? urlFor(piece.heroImage).width(1600).height(1000).url() : undefined
  const published = new Date(story.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })

  return (
    <>
      <Navbar />
      <main>
        <article className="article-page">
          <header className="article-header page-shell">
            <div className="article-header__meta">
              <span>{story.category}</span><span>Story {story.number}</span><span>{published}</span>
            </div>
            <h1>{story.title}</h1>
            <p className="article-header__ja" lang="ja">{story.titleJa}</p>
            <p className="article-header__dek">{story.excerpt}</p>
            <div className="article-header__byline">
              <span>Words by <b>Shun Ito</b></span>
              <span>{story.location} · {story.readTime}</span>
            </div>
          </header>

          {image && (
            <figure className="article-hero-image">
              <Image src={image} alt={story.title} fill priority sizes="100vw" className="object-cover" />
              <figcaption>{story.relatedPieceSlug.toUpperCase()} · MONOGATARI FIELD NOTES</figcaption>
            </figure>
          )}

          <div className="article-layout page-shell">
            <aside className="article-aside">
              <span className="eyebrow">IN THIS STORY</span>
              <dl><dt>Format</dt><dd>{story.format}</dd><dt>Object</dt><dd>{piece?.title || story.relatedPieceSlug}</dd><dt>Place</dt><dd>{story.location}</dd></dl>
            </aside>
            <div className="article-body">
              {story.paragraphs.map((paragraph, paragraphIndex) => (
                <div key={paragraph}>
                  <p className={paragraphIndex === 0 ? 'article-body__opener' : ''}>{paragraph}</p>
                  {paragraphIndex === 1 && <blockquote>{story.quote}</blockquote>}
                  {paragraphIndex === 2 && (
                    <section className="article-inline-letter">
                      <span className="eyebrow">THE LETTER</span>
                      <h2>Keep reading by email.</h2>
                      <p>One object and one story from Japan, every week.</p>
                      <NewsletterSignup source={`article:${story.slug}`} compact />
                    </section>
                  )}
                </div>
              ))}

              {piece && (
                <section className="article-object">
                  <span className="eyebrow">FROM THIS STORY · この物語の品</span>
                  <div>
                    <h2>{piece.title}<small lang="ja">{piece.titleJa}</small></h2>
                    <p>This object carries the practice described above into daily use.</p>
                    <NorenLink href={`/pieces/${piece.slug.current}`} className="button button--ink">Continue to the object</NorenLink>
                  </div>
                </section>
              )}
            </div>
          </div>

          <NorenLink href={`/magazine/${next.slug}`} className="next-story">
            <span>Next story · 次の物語へ</span>
            <strong>{next.title}</strong>
            <i>↗</i>
          </NorenLink>
        </article>
      </main>
      <Footer />
      <StructuredData data={{
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: story.title,
        description: story.excerpt,
        image: image ? [image] : undefined,
        datePublished: story.publishedAt,
        dateModified: story.publishedAt,
        mainEntityOfPage: `${siteUrl}/magazine/${story.slug}`,
        author: { '@type': 'Person', name: 'Shun Ito', url: `${siteUrl}/about` },
        publisher: { '@type': 'Organization', name: 'Monogatari', url: siteUrl },
        inLanguage: 'en',
      }} />
      <StructuredData data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Magazine', item: `${siteUrl}/magazine` },
          { '@type': 'ListItem', position: 3, name: story.title, item: `${siteUrl}/magazine/${story.slug}` },
        ],
      }} />
    </>
  )
}
