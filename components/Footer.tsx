import NewsletterSignup from './NewsletterSignup'
import { NorenLink } from './NorenTransition'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__letter">
        <div>
          <span className="eyebrow">THE LETTER · 週に一つの物語</span>
          <h2>One object. One story.<br />A quieter way to know Japan.</h2>
        </div>
        <NewsletterSignup source="footer" compact />
      </div>
      <div className="site-footer__base">
        <div className="site-footer__brand">
          <span className="noren-mark noren-mark--small" aria-hidden="true"><i /><i /></span>
          <span>mono.stories</span>
        </div>
        <nav aria-label="Footer navigation">
          {[['Objects', '/pieces'], ['Magazine', '/magazine'], ['Places', '/map'], ['About', '/about'], ['Privacy', '/privacy']].map(([label, href]) => (
            <NorenLink key={href} href={href}>{label}</NorenLink>
          ))}
        </nav>
        <p>© 2026 Monogatari. From Japan, with context.</p>
      </div>
    </footer>
  )
}
