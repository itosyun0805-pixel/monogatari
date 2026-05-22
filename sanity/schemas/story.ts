import { defineField, defineType } from 'sanity'

export const storyType = defineType({
  name: 'story',
  title: 'Story',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: r => r.required() }),
    defineField({ name: 'titleJa', title: 'Title (Japanese)', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: r => r.required() }),
    defineField({ name: 'publishedAt', title: 'Published At', type: 'datetime', initialValue: () => new Date().toISOString() }),
    defineField({ name: 'location', title: 'Location', type: 'string', description: 'e.g. 秩父, 京都' }),
    defineField({
      name: 'region', title: 'Region', type: 'string',
      options: {
        list: [
          { title: '北海道', value: '北海道' }, { title: '東北', value: '東北' },
          { title: '関東', value: '関東' }, { title: '中部', value: '中部' },
          { title: '近畿', value: '近畿' }, { title: '中国', value: '中国' },
          { title: '四国', value: '四国' }, { title: '九州・沖縄', value: '九州・沖縄' },
        ],
      },
    }),
    defineField({ name: 'heroImage', title: 'Hero Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'excerpt', title: 'Excerpt', type: 'text', rows: 3, description: '一覧ページに表示される短い説明（2〜3文）' }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'caption', type: 'string', title: 'Caption' },
          ],
        },
      ],
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          '取材', '職人', '産地', '伝統工芸', '食文化', '祭り', '建築', '自然', '暮らし',
        ],
      },
    }),
    defineField({
      name: 'relatedPieces',
      title: 'Related Pieces',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'piece' }] }],
    }),
  ],
  preview: {
    select: { title: 'title', location: 'location', media: 'heroImage' },
    prepare({ title, location, media }) {
      return { title, subtitle: location, media }
    },
  },
})
