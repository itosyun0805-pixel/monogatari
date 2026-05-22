import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mt-auto px-8 py-10 hairline" style={{ backgroundColor: 'var(--color-surface)' }}>
      <div className="flex items-center justify-between">
        <span className="label-caps" style={{ color: 'var(--color-on-surface-variant)' }}>
          © 2024 MONOGATARI. CREATED WITH INTENTION.
        </span>
        <div className="flex gap-8">
          {[['About', '/about'], ['Pieces', '/pieces'], ['Stories', '/stories'], ['Map', '/map']].map(([label, href]) => (
            <Link key={href} href={href} className="label-caps" style={{ color: 'var(--color-on-surface-variant)' }}>
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
