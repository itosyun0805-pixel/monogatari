import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { NorenTransitionProvider } from '@/components/NorenTransition'
import { siteDescription, siteName, siteUrl } from '@/lib/site'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Monogatari — Objects, Culture, Stories',
    template: '%s — Monogatari',
  },
  description: siteDescription,
  applicationName: siteName,
  alternates: {
    canonical: '/',
    types: { 'application/rss+xml': '/rss.xml' },
  },
  openGraph: {
    type: 'website',
    siteName,
    title: 'Monogatari — Objects, Culture, Stories',
    description: siteDescription,
    url: '/',
    locale: 'en_US',
    images: [{ url: '/og.png', width: 1729, height: 910, alt: 'mono.stories — Objects, Culture, Stories' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Monogatari — Objects, Culture, Stories',
    description: siteDescription,
    images: ['/og.png'],
  },
  verification: {
    google: 'R5_Vrk2bY7YylhiVePhrlw4bibOfIJY_5QmKTx7S_p0',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NorenTransitionProvider>
          {children}
        </NorenTransitionProvider>
        <Analytics />
      </body>
    </html>
  )
}
