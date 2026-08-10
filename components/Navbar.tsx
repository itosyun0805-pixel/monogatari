'use client'

import { useState } from 'react'
import { NorenLink } from './NorenTransition'

const links = [
  { href: '/pieces', label: 'Objects', labelJa: 'もの' },
  { href: '/magazine', label: 'Magazine', labelJa: '読み物' },
  { href: '/map', label: 'Places', labelJa: '産地' },
  { href: '/about', label: 'About', labelJa: '私たち' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <NorenLink href="/" className="site-logo" aria-label="Monogatari home" onClick={() => setOpen(false)}>
        <span className="noren-mark" aria-hidden="true"><i /><i /></span>
        <span className="site-logo__type">
          <b>mono.stories</b>
          <small>OBJECTS · CULTURE · STORIES</small>
        </span>
      </NorenLink>

      <button
        type="button"
        className="site-menu-button"
        aria-expanded={open}
        aria-controls="primary-navigation"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? 'Close' : 'Menu'}
      </button>

      <nav id="primary-navigation" className={`site-nav ${open ? 'site-nav--open' : ''}`} aria-label="Primary navigation">
        {links.map(l => (
          <NorenLink key={l.href} href={l.href} onClick={() => setOpen(false)}>
            <span>{l.label}</span>
            <small lang="ja">{l.labelJa}</small>
          </NorenLink>
        ))}
        <NorenLink href="/newsletter" className="site-nav__letter" onClick={() => setOpen(false)}>
          The Letter
        </NorenLink>
      </nav>
    </header>
  )
}
