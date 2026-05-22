import Link from 'next/link'

const links = [
  { href: '/pieces',  label: 'PIECES',  labelJa: '工芸' },
  { href: '/stories', label: 'STORIES', labelJa: '物語' },
  { href: '/map',     label: 'MAP',     labelJa: '地図' },
  { href: '/about',   label: 'ABOUT',   labelJa: 'について' },
]

export default function Navbar() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5"
      style={{ backgroundColor: 'var(--color-surface)' }}
    >
      <Link href="/" className="flex items-center gap-3">
        <span className="font-serif text-base font-normal tracking-widest uppercase" style={{ color: 'var(--color-on-surface)' }}>
          MONOGATARI
        </span>
        <span className="text-sm" style={{ color: 'var(--color-on-surface-variant)' }}>物語</span>
      </Link>

      <nav className="flex items-center gap-8">
        {links.map(l => (
          <Link key={l.href} href={l.href} className="flex items-center gap-1.5 group">
            <span className="label-caps" style={{ color: 'var(--color-on-surface)' }}>{l.label}</span>
            <span className="text-xs" style={{ color: 'var(--color-on-surface-variant)' }}>{l.labelJa}</span>
          </Link>
        ))}
      </nav>
    </header>
  )
}
