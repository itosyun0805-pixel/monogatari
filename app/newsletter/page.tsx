import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import NewsletterSignup from '@/components/NewsletterSignup'

export const metadata: Metadata = {
  title: 'The Letter',
  description: 'One Japanese object, one useful story, and the life around it — delivered weekly by Monogatari.',
  alternates: { canonical: '/newsletter' },
}

export default function NewsletterPage() {
  return (
    <>
      <Navbar />
      <main className="letter-page">
        <section className="letter-page__hero page-shell">
          <div>
            <span className="eyebrow">THE LETTER · ニュースレター</span>
            <h1>One object.<br />One story.<br />Every week.</h1>
          </div>
          <div className="letter-page__form">
            <p>A quiet weekly note about a Japanese object, the people behind it, and one way it can live in the present.</p>
            <NewsletterSignup source="newsletter-page" />
          </div>
        </section>
        <section className="letter-page__details page-shell">
          {[
            ['01', 'The object', 'A noren, a daruma, a piece of pottery — chosen for what it reveals about life in Japan.'],
            ['02', 'The context', 'Its origin, maker, region, ritual, and the details that usually disappear when an object travels.'],
            ['03', 'The new life', 'A practical way to use it now, without turning culture into decoration or craft into nostalgia.'],
          ].map(([number, title, copy]) => (
            <article key={number}>
              <span>{number}</span>
              <h2>{title}</h2>
              <p>{copy}</p>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </>
  )
}
