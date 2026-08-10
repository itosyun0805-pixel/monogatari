import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy',
  description: 'How Monogatari handles newsletter subscriptions and website analytics.',
  alternates: { canonical: '/privacy' },
  robots: { index: true, follow: true },
}

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="legal-page page-shell">
        <header>
          <span className="eyebrow">PRIVACY · プライバシー</span>
          <h1>A short, human privacy notice.</h1>
          <p>Last updated: August 9, 2026</p>
        </header>
        <div className="legal-page__body">
          <section>
            <h2>Newsletter</h2>
            <p>When you subscribe, we collect your email address, the page where you subscribed, and the time of consent. We use this information only to send the Monogatari newsletter and manage your subscription.</p>
          </section>
          <section>
            <h2>Analytics</h2>
            <p>We use privacy-conscious website analytics to understand which pages are useful and how the site performs. We do not sell personal information.</p>
          </section>
          <section>
            <h2>Your choices</h2>
            <p>Every newsletter includes an unsubscribe option. You may also ask us to correct or delete the information connected to your subscription.</p>
          </section>
          <section>
            <h2>Contact</h2>
            <p>For a privacy or data request, contact Monogatari through the account linked from this website. A dedicated privacy email will be added before the newsletter’s public launch.</p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
