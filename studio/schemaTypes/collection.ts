import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'collection',
  title: 'Collection',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Collection Name (English)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'nameSi',
      title: 'Collection Name (Sinhala)',
      type: 'string',
      description: 'Optional. Shown when a customer views the site in Sinhala.',
    }),
    defineField({
      name: 'slug',
      title: 'Slug (for URL)',
      type: 'string',
      description:
        'Unique identifier for the collection URL — used in links like /collection/mens-sliders. Letters, numbers and hyphens only, no spaces.',
      validation: (Rule) =>
        Rule.required()
          .regex(/^[a-z0-9-]+$/, {name: 'slug format', invert: false})
          .error('Use only lowercase letters, numbers and hyphens (e.g. mens-sliders).')
          .custom(async (slug, context) => {
            if (!slug) return true
            const {document, getClient} = context
            const client = getClient({apiVersion: '2024-01-01'})
            const id = document?._id?.replace(/^drafts\./, '')
            const duplicate = await client.fetch(
              `count(*[_type == "collection" && lower(slug) == lower($slug) && !(_id in [$id, "drafts." + $id])])`,
              {slug, id},
            )
            return duplicate > 0 ? 'This slug is already used by another collection.' : true
          }),
    }),
    defineField({
      name: 'description',
      title: 'Description (English)',
      type: 'text',
      rows: 3,
      description: 'Optional. A short description shown on the collection page.',
    }),
    defineField({
      name: 'descriptionSi',
      title: 'Description (Sinhala)',
      type: 'text',
      rows: 3,
      description: 'Optional. Falls back to the English description if left blank.',
    }),
    defineField({
      name: 'products',
      title: 'Products in this Collection',
      type: 'array',
      description: 'Add products to this collection. Drag to reorder.',
      of: [{type: 'reference', to: [{type: 'product'}]}],
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers show first in the collections grid on the homepage.',
    }),
  ],
  preview: {
    select: {title: 'name', subtitle: 'slug'},
  },
})
