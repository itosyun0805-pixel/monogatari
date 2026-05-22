import { groq } from 'next-sanity'

export const allPiecesQuery = groq`
  *[_type == "piece" && !(_id in path("drafts.**"))] | order(publishedAt desc) {
    _id, title, titleJa, slug, category, lifestyleTags, region, placeName,
    heroImage, crossover, publishedAt
  }
`

export const pieceBySlugQuery = groq`
  *[_type == "piece" && !(_id in path("drafts.**")) && slug.current == $slug][0] {
    _id, title, titleJa, slug, category, lifestyleTags, region, placeName,
    heroImage, origin, craft,
    maker { name, photo, location, quote },
    crossover,
    newUse[] { image, caption },
    howItLives,
    keepers[] { name, quote },
    getLink, publishedAt
  }
`

export const piecesByRegionQuery = groq`
  *[_type == "piece" && !(_id in path("drafts.**")) && region == $region] | order(publishedAt desc) {
    _id, title, titleJa, slug, category, lifestyleTags, region, heroImage
  }
`

export const allStoriesQuery = groq`
  *[_type == "story" && !(_id in path("drafts.**"))] | order(publishedAt desc) {
    _id, title, titleJa, slug, publishedAt, location, region, heroImage, excerpt, tags
  }
`

export const storyBySlugQuery = groq`
  *[_type == "story" && !(_id in path("drafts.**")) && slug.current == $slug][0] {
    _id, title, titleJa, slug, publishedAt, location, region,
    heroImage, excerpt, body, tags,
    relatedPieces[]-> { _id, title, titleJa, slug, heroImage }
  }
`

export const featuredPiecesQuery = groq`
  *[_type == "piece" && !(_id in path("drafts.**"))] | order(publishedAt desc) [0...4] {
    _id, title, titleJa, slug, category, lifestyleTags, heroImage
  }
`
