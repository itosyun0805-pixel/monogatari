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
      className="fixed top-0 left-0 right-0 z-50 flex flex-wrap items-center justify-between px-4 py-3 sm:px-8 md:flex-nowrap md:py-5"
      style={{ backgroundColor: 'var(--color-surface)' }}
    >
      <Link href="/" className="flex items-center gap-3">
        <span className="font-serif text-base font-normal tracking-widest uppercase" style={{ color: 'var(--color-on-surface)' }}>
          MONOGATARI
        </span>
        <span className="hidden text-sm sm:inline" style={{ color: 'var(--color-on-surface-variant)' }}>物語</span>
      </Link>

      <nav
        className="order-3 mt-3 flex basis-full items-center justify-between gap-4 border-t pt-3 md:order-2 md:mt-0 md:basis-auto md:border-0 md:pt-0 lg:gap-8"
        style={{ borderColor: 'var(--color-outline-variant)' }}
      >
        {links.map(l => (
          <Link key={l.href} href={l.href} className="flex items-center gap-1.5 group">
            <span className="label-caps" style={{ color: 'var(--color-on-surface)' }}>{l.label}</span>
            <span className="hidden text-xs lg:inline" style={{ color: 'var(--color-on-surface-variant)' }}>{l.labelJa}</span>
          </Link>
        ))}
      </nav>

      <button
        type="button"
        disabled
        aria-label="Cart, 0 items"
        title="Cart checkout is coming soon"
        className="order-2 flex items-center gap-1.5 md:order-3"
        style={{ color: 'var(--color-on-surface)' }}
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M3.5 4.5h2l1.6 10.2h10.8l2-7.2H6.1" />
          <circle cx="9" cy="19" r="1" />
          <circle cx="17" cy="19" r="1" />
        </svg>
        <span
          className="flex h-4 min-w-4 items-center justify-center border px-1 text-[10px] leading-none tabular-nums"
          style={{ borderColor: 'var(--color-outline)' }}
          aria-hidden="true"
        >
          0
        </span>
      </button>
    </header>
  )
}
