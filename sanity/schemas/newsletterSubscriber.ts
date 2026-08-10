import { defineField, defineType } from 'sanity'

export const newsletterSubscriberType = defineType({
  name: 'newsletterSubscriber',
  title: 'Newsletter Subscriber',
  type: 'document',
  fields: [
    defineField({ name: 'email', title: 'Email', type: 'string', readOnly: true }),
    defineField({ name: 'source', title: 'Signup Source', type: 'string', readOnly: true }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: { list: ['subscribed', 'unsubscribed'] },
      readOnly: true,
    }),
    defineField({ name: 'consentedAt', title: 'Consented At', type: 'datetime', readOnly: true }),
    defineField({ name: 'createdAt', title: 'Created At', type: 'datetime', readOnly: true }),
  ],
  preview: {
    select: { title: 'email', subtitle: 'source' },
  },
})
