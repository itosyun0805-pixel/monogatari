import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import StoryCard from '@/components/StoryCard'
import { client } from '@/sanity/lib/client'
import { allStoriesQuery } from '@/sanity/lib/queries'
import type { Metadata } from 'next'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Stories — Monogatari 物語',
  description: 'Field notes from Japan. Places, people, and the culture that shapes them.',
}

export default async function StoriesPage() {
  const stories = await client.fetch(allStoriesQuery)

  return (
    <>
      <Navbar />
      <main className="pt-32 px-8 pb-24 min-h-screen" style={{ backgroundColor: 'var(--color-surface)' }}>

        <div className="mb-12">
          <h1 className="font-serif mb-4" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', color: 'var(--color-on-surface)', lineHeight: 1, letterSpacing: '-0.02em' }}>
            STORIES
          </h1>
          <p className="font-sans max-w-xl" style={{ color: 'var(--color-on-surface-variant)', lineHeight: '1.7' }}>
            Field notes from Japan. The places, the people, and the
            everyday culture that shapes how objects come to life.
          </p>
        </div>

        <div className="hairline mb-12" />

        {stories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {stories.map((story: any) => (
              <StoryCard key={story._id} {...story} />
            ))}
          </div>
        ) : (
          <div className="py-32 text-center">
            <span className="label-caps block mb-4" style={{ color: 'var(--color-on-surface-variant)' }}>COMING SOON</span>
            <p className="font-serif text-2xl" style={{ color: 'var(--color-on-surface)' }}>
              First story from Chichibu, coming soon.
            </p>
          </div>
        )}

      </main>
      <Footer />
    </>
  )
}
