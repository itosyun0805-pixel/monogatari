import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { NorenLink } from '@/components/NorenTransition'

export const metadata: Metadata = {
  title: 'Order received',
  description: 'Your return from Monogatari secure checkout.',
  alternates: { canonical: '/order-confirmed' },
  robots: { index: false, follow: false },
}

export default function OrderConfirmedPage() {
  return (
    <>
      <Navbar />
      <main className="legal-page page-shell">
        <header>
          <span className="eyebrow">PAYMENT RETURN · お支払い後</span>
          <h1>Thank you.</h1>
          <p>Order follow-up</p>
        </header>
        <div className="legal-page__body">
          <section>
            <h2>What happens next</h2>
            <p>If your payment was completed, Stripe will email your receipt. We will follow with packing and shipping details using the email address supplied at checkout.</p>
          </section>
          <section>
            <h2>While you wait</h2>
            <p><NorenLink className="text-link" href="/magazine">Read the stories behind the objects <span>↗</span></NorenLink></p>
          </section>
          <section>
            <h2>Questions</h2>
            <p>Reply to your order email when it arrives so we can identify the order and help you directly.</p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
