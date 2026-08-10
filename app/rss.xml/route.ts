import { editorialStories } from '@/content/editorial'
import { siteDescription, siteUrl } from '@/lib/site'

function escapeXml(value: string) {
  return value.replace(/[<>&'\"]/g, (character) => ({
    '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;',
  })[character] || character)
}

export async function GET() {
  const items = editorialStories.map((story) => `
    <item>
      <title>${escapeXml(story.title)}</title>
      <link>${siteUrl}/magazine/${story.slug}</link>
      <guid isPermaLink="true">${siteUrl}/magazine/${story.slug}</guid>
      <pubDate>${new Date(story.publishedAt).toUTCString()}</pubDate>
      <description>${escapeXml(story.excerpt)}</description>
    </item>`).join('')

  const feed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0"><channel>
    <title>Monogatari Magazine</title>
    <link>${siteUrl}/magazine</link>
    <description>${escapeXml(siteDescription)}</description>
    <language>en</language>${items}
  </channel></rss>`

  return new Response(feed, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8', 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' },
  })
}
