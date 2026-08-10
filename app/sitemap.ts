import type { MetadataRoute } from 'next'
import { editorialStories } from '@/content/editorial'
import { client } from '@/sanity/lib/client'
import { allPiecesQuery } from '@/sanity/lib/queries'
import { siteUrl } from '@/lib/site'
import type { PieceSummary } from '@/types/content'

export const revalidate = 3600

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pieces = await client.fetch<PieceSummary[]>(allPiecesQuery)
  const staticPages = ['', '/pieces', '/magazine', '/map', '/about', '/newsletter', '/privacy']

  return [
    ...staticPages.map((path) => ({
      url: `${siteUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: path === '' ? 'weekly' as const : 'monthly' as const,
      priority: path === '' ? 1 : path === '/pieces' || path === '/magazine' ? .9 : .6,
    })),
    ...pieces.map((piece) => ({
      url: `${siteUrl}/pieces/${piece.slug.current}`,
      lastModified: piece.publishedAt ? new Date(piece.publishedAt) : new Date(),
      changeFrequency: 'monthly' as const,
      priority: .8,
    })),
    ...editorialStories.map((story) => ({
      url: `${siteUrl}/magazine/${story.slug}`,
      lastModified: new Date(story.publishedAt),
      changeFrequency: 'monthly' as const,
      priority: .8,
    })),
  ]
}
