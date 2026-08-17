import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { NorenLink } from '@/components/NorenTransition'

export const metadata: Metadata = {
  title: 'Subscription confirmed',
  description: 'Your subscription to The Monogatari Letter is confirmed.',
  robots: { index: false, follow: false },
}

export default function NewsletterConfirmedPage() {
  return (
    <>
      <Navbar />
      <main className="letter-page">
        <section className="letter-page__hero page-shell">
          <div>
            <span className="eyebrow">THE LETTER · CONFIRMED</span>
            <h1>You’re in.<br />The next story<br />will find you.</h1>
          </div>
          <div className="letter-page__form">
            <p>Your email is confirmed. Expect one quiet letter a week about a Japanese object, its context, and the life around it.</p>
            <NorenLink className="text-link" href="/magazine">Read the latest stories <span>↗</span></NorenLink>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
