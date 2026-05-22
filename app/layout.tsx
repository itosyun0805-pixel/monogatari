import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Monogatari 物語 — Culture as a bridge, objects as a lens.',
  description: 'A cultural translator. We connect Japanese traditions to the emotions and habits already in your life.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
