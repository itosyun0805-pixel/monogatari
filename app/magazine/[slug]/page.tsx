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
  const image = `${siteUrl}${story.heroImage}`

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
      images: [{ url: image, width: 1536, height: 1024, alt: story.heroAlt }],
    },
    twitter: { card: 'summary_large_image', title: story.title, description: story.excerpt, images: [image] },
  }
}

export default async function MagazineStoryPage({ params }: Props) {
  const { slug } = await params
  const story = getEditorialStory(slug)
  if (!story) notFound()
  const piece = await client.fetch(pieceBySlugQuery, { slug: story.relatedPieceSlug })
  const index = editorialStories.indexOf(story)
  const next = editorialStories[(index + 1) % editorialStories.length]
  const image = story.heroImage
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

          <figure className="article-hero-image">
            <Image src={image} alt={story.heroAlt} fill priority sizes="100vw" className="object-cover" />
            <figcaption>EDITORIAL IMAGE · NOT A PRODUCT PHOTOGRAPH</figcaption>
          </figure>

          <div className="article-layout page-shell">
            <aside className="article-aside">
              <span className="eyebrow">IN THIS STORY</span>
              <dl><dt>Format</dt><dd>{story.format}</dd><dt>Object</dt><dd>{piece?.title || story.relatedPieceSlug}</dd><dt>Place</dt><dd>{story.location}</dd></dl>
            </aside>
            <div className="article-body">
              <section className="article-culture-lens" aria-label="Cultural comparison">
                <span className="eyebrow">CULTURE LENS · 文化比較</span>
                <dl>
                  <div><dt>FAMILIAR MODEL</dt><dd>{story.cultureLens.familiarModel}</dd></div>
                  <div><dt>JAPANESE ALTERNATIVE</dt><dd>{story.cultureLens.japaneseAlternative}</dd></div>
                </dl>
              </section>

              {story.sections.map((section, sectionIndex) => (
                <section className="article-section" key={section.heading}>
                  <header>
                    <span>0{sectionIndex + 1}</span>
                    <h2>{section.heading}<small lang="ja">{section.headingJa}</small></h2>
                  </header>
                  {section.paragraphs.map((paragraph, paragraphIndex) => (
                    <p className={sectionIndex === 0 && paragraphIndex === 0 ? 'article-body__opener' : ''} key={paragraph}>{paragraph}</p>
                  ))}
                  {sectionIndex === 1 && <blockquote>{story.quote}</blockquote>}
                  {sectionIndex === 2 && (
                    <section className="article-inline-letter">
                      <span className="eyebrow">THE LETTER</span>
                      <h2>Keep reading by email.</h2>
                      <p>One object and one story from Japan, every week.</p>
                      <NewsletterSignup source={`article:${story.slug}`} compact />
                    </section>
                  )}
                </section>
              ))}

              <section className="article-sources">
                <span className="eyebrow">SOURCES & FURTHER READING · 参考資料</span>
                <ol>
                  {story.sources.map((source) => (
                    <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.label}</a><span>{source.publisher}</span></li>
                  ))}
                </ol>
              </section>

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
        image: [`${siteUrl}${image}`],
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
