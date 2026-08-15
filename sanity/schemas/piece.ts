import { defineField, defineType } from 'sanity'

const LIFESTYLE_TAGS = [
  'Whisky Lovers', 'Minimalist Kitchen', 'Zero Waste',
  'Slow Morning', 'Travel Light', 'Sunday Brunch',
  'Yoga & Wellness', 'Gift', 'Camp', 'Zen Living',
  'Mindful Rituals', 'Interior Design',
]

const REGIONS = [
  '北海道', '東北', '関東', '中部', '近畿', '中国', '四国', '九州・沖縄',
]

const CATEGORIES = ['工芸', '食', '日用品', '衣', 'その他']

export const pieceType = defineType({
  name: 'piece',
  title: 'Piece',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'English Name', type: 'string', validation: r => r.required() }),
    defineField({ name: 'titleJa', title: '日本語名', type: 'string', validation: r => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: r => r.required() }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: { list: CATEGORIES.map(c => ({ title: c, value: c })) },
      validation: r => r.required(),
    }),
    defineField({
      name: 'lifestyleTags',
      title: 'Lifestyle Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: { list: LIFESTYLE_TAGS.map(t => ({ title: t, value: t })) },
    }),
    defineField({
      name: 'region',
      title: 'Region / 地域',
      type: 'string',
      options: { list: REGIONS.map(r => ({ title: r, value: r })) },
    }),
    defineField({ name: 'placeName', title: 'Place Name / 産地名', type: 'string' }),
    defineField({ name: 'heroImage', title: 'Hero Image', type: 'image', options: { hotspot: true }, validation: r => r.required() }),
    defineField({ name: 'origin', title: 'Origin — Why it was born', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'craft', title: 'Craft — How it is made', type: 'array', of: [{ type: 'block' }] }),
    defineField({
      name: 'maker',
      title: 'The Maker',
      type: 'object',
      fields: [
        defineField({ name: 'name', title: 'Name', type: 'string' }),
        defineField({ name: 'photo', title: 'Photo', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'location', title: 'Location', type: 'string' }),
        defineField({ name: 'quote', title: 'Quote', type: 'text', rows: 3 }),
      ],
    }),
    defineField({
      name: 'makerVerified',
      title: 'Maker information verified and approved',
      type: 'boolean',
      description: 'Turn on only after the maker name, quote, photograph, and permission to publish have been confirmed.',
      initialValue: false,
    }),
    defineField({ name: 'crossover', title: 'Crossover — In your world, this is...', type: 'text', rows: 4 }),
    defineField({
      name: 'newUse',
      title: 'New Use',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
          defineField({ name: 'caption', title: 'Caption', type: 'text', rows: 2 }),
        ],
      }],
    }),
    defineField({ name: 'howItLives', title: 'How It Lives — In daily Japanese life', type: 'array', of: [{ type: 'block' }] }),
    defineField({
      name: 'keepers',
      title: 'The Keepers',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'name', title: 'Name', type: 'string' }),
          defineField({ name: 'quote', title: 'Quote', type: 'text', rows: 2 }),
        ],
      }],
    }),
    defineField({
      name: 'saleStatus',
      title: 'Sale Status',
      type: 'string',
      description: 'Editorial is the safe default. Available will only show checkout when every required sales field below is complete.',
      initialValue: 'editorial',
      options: {
        layout: 'radio',
        list: [
          { title: 'Editorial — story only', value: 'editorial' },
          { title: 'Waitlist — collect interest', value: 'waitlist' },
          { title: 'Available — show checkout', value: 'available' },
          { title: 'Sold out — collect restock interest', value: 'soldOut' },
        ],
      },
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: rule => rule.positive(),
    }),
    defineField({
      name: 'currency',
      title: 'Currency',
      type: 'string',
      initialValue: 'USD',
      options: {
        list: [
          { title: 'USD', value: 'USD' },
          { title: 'JPY', value: 'JPY' },
          { title: 'GBP', value: 'GBP' },
          { title: 'EUR', value: 'EUR' },
        ],
      },
    }),
    defineField({
      name: 'checkoutUrl',
      title: 'Stripe Payment Link',
      type: 'url',
      description: 'Use a Stripe-hosted Payment Link and set its after-payment redirect to https://monostories.com/order-confirmed. This is never shown unless Sale Status is Available and Sales readiness is confirmed.',
      validation: rule => rule.uri({ scheme: ['https'] }),
    }),
    defineField({
      name: 'availabilityNote',
      title: 'Availability Note',
      type: 'string',
      description: 'Example: Edition of 10 · Ships in 2–3 weeks',
    }),
    defineField({
      name: 'shippingNote',
      title: 'Shipping Note',
      type: 'text',
      rows: 3,
      description: 'State the destination, delivery timing, and whether shipping and duties are included.',
    }),
    defineField({
      name: 'salesReady',
      title: 'Sales readiness confirmed',
      type: 'boolean',
      description: 'Confirm only after supply terms, the real object, permitted photography, provenance, pricing, shipping, returns, and customer support are ready.',
      initialValue: false,
    }),
    defineField({
      name: 'getLink',
      title: 'Legacy Get Link — do not use',
      type: 'url',
      description: 'Retained for old data. Use Stripe Payment Link above for new sales.',
      hidden: true,
    }),
    defineField({ name: 'publishedAt', title: 'Published At', type: 'datetime' }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'titleJa', media: 'heroImage' },
  },
})
