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
    defineField({ name: 'getLink', title: 'Get Link (external)', type: 'url' }),
    defineField({ name: 'publishedAt', title: 'Published At', type: 'datetime' }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'titleJa', media: 'heroImage' },
  },
})
