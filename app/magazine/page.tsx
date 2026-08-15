import Image from 'next/image'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import NewsletterSignup from '@/components/NewsletterSignup'
import { NorenLink } from '@/components/NorenTransition'
import { editorialCategories, editorialStories } from '@/content/editorial'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Magazine',
  description: 'Object histories, rituals, and field notes from Japan — written with context and made for life now.',
  alternates: { canonical: '/magazine' },
}

export default function MagazinePage() {
  const feature = editorialStories[0]

  return (
    <>
      <Navbar />
      <main className="magazine-page">
        <header className="magazine-masthead page-shell">
          <div>
            <span className="eyebrow">THE MONOGATARI MAGAZINE · 読み物</span>
            <h1>Stories for<br />living with<br />Japan.</h1>
          </div>
          <div className="magazine-masthead__note">
            <p>Objects are easier to buy than to understand. This magazine begins with the context.</p>
            <span>ISSUE 01 · THRESHOLDS</span>
          </div>
        </header>

        <nav className="magazine-categories page-shell" aria-label="Magazine sections">
          {editorialCategories.map((category, index) => (
            <a href={`#${category.toLowerCase().replace(' ', '-')}`} key={category}>
              <span>0{index + 1}</span>{category}
            </a>
          ))}
        </nav>

        <section className="magazine-cover page-shell">
          <NorenLink href={`/magazine/${feature.slug}`} className="magazine-cover__image">
            <Image
              src={feature.heroImage}
              alt={feature.heroAlt}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 62vw"
              className="object-cover"
            />
            <span>FEATURE STORY</span>
          </NorenLink>
          <div className="magazine-cover__copy">
            <p className="story-number">STORY {feature.number} · {feature.format}</p>
            <h2>{feature.title}</h2>
            <p className="japanese-title" lang="ja">{feature.titleJa}</p>
            <p>{feature.excerpt}</p>
            <div className="magazine-cover__byline">
              <span>Shun Ito<br /><small>Editor, Monogatari</small></span>
              <span>{feature.location}<br /><small>{feature.readTime}</small></span>
            </div>
            <NorenLink href={`/magazine/${feature.slug}`} className="button button--ink">Read the cover story</NorenLink>
          </div>
        </section>

        {editorialCategories.map((category) => {
          const stories = editorialStories.filter((story) => story.category === category && story.slug !== feature.slug)
          if (!stories.length) return null
          return (
            <section className="magazine-section page-shell" id={category.toLowerCase().replace(' ', '-')} key={category}>
              <header className="magazine-section__head">
                <span className="eyebrow">{category.toUpperCase()}</span>
                <p>{category === 'Objects' ? 'History and meaning, one object at a time.' : category === 'Rituals' ? 'Small practices that give daily life a shape.' : 'What we notice while building Monogatari.'}</p>
              </header>
              <div className="magazine-grid">
                {stories.map((story, index) => {
                  return (
                    <article className={`magazine-card ${index === 0 ? 'magazine-card--wide' : ''}`} key={story.slug}>
                      <NorenLink href={`/magazine/${story.slug}`} className="magazine-card__image">
                        <Image
                          src={story.heroImage}
                          alt={story.heroAlt}
                          fill
                          sizes="(max-width: 760px) 100vw, 50vw"
                          className="object-cover"
                        />
                      </NorenLink>
                      <div className="magazine-card__copy">
                        <p className="story-number">{story.format} · STORY {story.number}</p>
                        <h2><NorenLink href={`/magazine/${story.slug}`}>{story.title}</NorenLink></h2>
                        <p className="japanese-title" lang="ja">{story.titleJa}</p>
                        <p>{story.excerpt}</p>
                        <span>{story.location} · {story.readTime}</span>
                      </div>
                    </article>
                  )
                })}
              </div>
            </section>
          )
        })}

        <section className="magazine-letter">
          <div className="page-shell magazine-letter__inner">
            <div>
              <span className="eyebrow">CONTINUE BY EMAIL · 続きを受け取る</span>
              <h2>The magazine,<br />one story at a time.</h2>
              <p>A weekly note about one Japanese object, the life around it, and what it might become in yours.</p>
            </div>
            <NewsletterSignup source="magazine" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
