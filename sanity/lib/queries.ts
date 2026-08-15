import { groq } from 'next-sanity'

export const allPiecesQuery = groq`
  *[_type == "piece" && !(_id in path("drafts.**"))] | order(publishedAt desc) {
    _id, title, titleJa, slug, category, lifestyleTags, region, placeName,
    heroImage, crossover, saleStatus,
    "isAvailable": saleStatus == "available" && salesReady == true && defined(checkoutUrl) && defined(price),
    publishedAt
  }
`

export const pieceBySlugQuery = groq`
  *[_type == "piece" && !(_id in path("drafts.**")) && slug.current == $slug][0] {
    _id, title, titleJa, slug, category, lifestyleTags, region, placeName,
    heroImage, origin, craft,
    maker { name, photo, location, quote }, makerVerified,
    crossover,
    newUse[] { image, caption },
    howItLives,
    keepers[] { name, quote },
    saleStatus, price, currency, checkoutUrl, availabilityNote, shippingNote, salesReady,
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
    _id, title, titleJa, slug, category, lifestyleTags, heroImage, saleStatus,
    "isAvailable": saleStatus == "available" && salesReady == true && defined(checkoutUrl) && defined(price)
  }
`
