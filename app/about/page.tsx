import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — Monogatari 物語',
  description: 'A cultural translator bridging Japanese craft and global life.',
}

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen" style={{ backgroundColor: 'var(--color-surface)' }}>

        {/* Hero */}
        <section className="pt-40 pb-24 px-8 max-w-3xl">
          <span className="label-caps block mb-6" style={{ color: 'var(--color-on-surface-variant)' }}>
            ABOUT THIS PROJECT
          </span>
          <h1 className="font-serif mb-8" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 1.1, color: 'var(--color-on-surface)' }}>
            Objects carry<br />stories across<br />cultures.
          </h1>
          <p className="font-sans text-lg max-w-xl" style={{ color: 'var(--color-on-surface-variant)', lineHeight: '1.75' }}>
            Monogatari 物語 is a cultural translation project. We take objects from
            Japan — a noren curtain, a daruma doll, a stick of incense — and retell
            them for lives lived far from where they were made.
          </p>
        </section>

        <div className="hairline mx-8" />

        {/* Mission */}
        <section className="py-24 px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl">
          <div>
            <span className="label-caps block mb-6" style={{ color: 'var(--color-primary-container)' }}>
              WHY WE EXIST
            </span>
            <p className="font-serif text-2xl leading-relaxed" style={{ color: 'var(--color-on-surface)' }}>
              "Japan is not hard to love. It is hard to explain."
            </p>
          </div>
          <div className="space-y-5 font-sans" style={{ color: 'var(--color-on-surface-variant)', lineHeight: '1.75' }}>
            <p>
              Most Japanese goods reach the world stripped of context. A lacquer box
              becomes decoration. An incense stick becomes aromatherapy. The story
              — the craft, the region, the ritual — disappears in transit.
            </p>
            <p>
              We put the story back. Each piece on this site is a dispatch: where
              an object came from, who made it, and most importantly — what role it
              might play in your world, not just the one it was born into.
            </p>
          </div>
        </section>

        <div className="hairline mx-8" />

        {/* The Method */}
        <section className="py-24 px-8 max-w-5xl">
          <span className="label-caps block mb-12" style={{ color: 'var(--color-on-surface-variant)' }}>
            HOW WE TELL IT
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {[
              {
                number: '01',
                title: 'Origin',
                titleJa: '起源',
                body: 'Where it was made, and the geography that shaped it. Every material is a consequence of climate and soil.',
              },
              {
                number: '02',
                title: 'Cultural Crossover',
                titleJa: '文化の橋',
                body: '"In your world, this is..." — the moment we translate a Japanese object into the emotion or habit it maps onto in another life.',
              },
              {
                number: '03',
                title: 'New Use',
                titleJa: '新しい使い方',
                body: 'Real people, real spaces. How these objects live outside Japan — not as museum pieces, but as tools.',
              },
            ].map((step, i) => (
              <div
                key={step.number}
                className="py-10 pr-10"
                style={{
                  borderTop: '1px solid var(--color-outline-variant)',
                  borderRight: i < 2 ? '1px solid var(--color-outline-variant)' : 'none',
                  paddingLeft: i > 0 ? '2.5rem' : '0',
                }}
              >
                <span className="label-caps block mb-4" style={{ color: 'var(--color-outline)' }}>
                  {step.number}
                </span>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="font-serif text-xl" style={{ color: 'var(--color-on-surface)' }}>{step.title}</span>
                  <span className="text-sm" style={{ color: 'var(--color-on-surface-variant)' }}>{step.titleJa}</span>
                </div>
                <p className="font-sans text-sm" style={{ color: 'var(--color-on-surface-variant)', lineHeight: '1.7' }}>
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="hairline mx-8" />

        {/* Maker-first */}
        <section className="py-24 px-8 max-w-3xl">
          <span className="label-caps block mb-6" style={{ color: 'var(--color-on-surface-variant)' }}>
            MAKER-FIRST
          </span>
          <h2 className="font-serif mb-6" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', lineHeight: 1.2, color: 'var(--color-on-surface)' }}>
            Every object is someone's life work.
          </h2>
          <p className="font-sans" style={{ color: 'var(--color-on-surface-variant)', lineHeight: '1.75', maxWidth: '36rem' }}>
            We name the makers, locate their workshops, and surface their words — because
            objects without authors are just commodities. Japan's craft traditions survived
            precisely because individuals chose to dedicate their lives to them. That
            deserves acknowledgment.
          </p>
        </section>

        <div className="hairline mx-8" />

        {/* CTA */}
        <section className="py-24 px-8 flex flex-col items-start gap-6">
          <span className="label-caps" style={{ color: 'var(--color-on-surface-variant)' }}>
            START EXPLORING
          </span>
          <div className="flex gap-4 flex-wrap">
            <a
              href="/pieces"
              className="inline-block px-8 py-4 label-caps transition-opacity hover:opacity-70"
              style={{ backgroundColor: 'var(--color-on-surface)', color: 'var(--color-surface)' }}
            >
              BROWSE PIECES →
            </a>
            <a
              href="/map"
              className="inline-block px-8 py-4 label-caps transition-opacity hover:opacity-70"
              style={{ border: '1px solid var(--color-on-surface)', color: 'var(--color-on-surface)' }}
            >
              EXPLORE BY REGION
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
