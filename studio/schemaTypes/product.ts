import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Product Name (English)',
      type: 'string',
      description: 'Optional. If left blank, the product code is shown instead.',
    }),
    defineField({
      name: 'nameSi',
      title: 'Product Name (Sinhala)',
      type: 'string',
      description: 'Optional. Shown when a customer views the site in Sinhala. Falls back to the English name if left blank.',
    }),
    defineField({
      name: 'code',
      title: 'Product Code',
      type: 'string',
      description:
        'The primary ID for this product — used in the shareable URL (e.g. beto-shoes.vercel.app/product/BT-101) and quoted on WhatsApp. Letters, numbers and hyphens only, must be unique.',
      validation: (Rule) =>
        Rule.required()
          .regex(/^[A-Za-z0-9-]+$/, {name: 'code format', invert: false})
          .error('Use only letters, numbers and hyphens (e.g. BT-101) — no spaces or symbols.')
          .custom(async (code, context) => {
            if (!code) return true
            const {document, getClient} = context
            const client = getClient({apiVersion: '2024-01-01'})
            const id = document?._id?.replace(/^drafts\./, '')
            const duplicate = await client.fetch(
              `count(*[_type == "product" && lower(code) == lower($code) && !(_id in [$id, "drafts." + $id])])`,
              {code, id},
            )
            return duplicate > 0 ? 'This product code is already used by another product.' : true
          }),
    }),
    defineField({
      name: 'price',
      title: 'Price (LKR)',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'images',
      title: 'Product Images',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
      description: 'Use 2–3 clear photos. Keep file sizes small (phone camera photos are fine) — the site compresses them automatically, but fewer photos means a faster-loading page for customers.',
      validation: (Rule) => Rule.required().min(1).max(3).error('Add between 1 and 3 images'),
    }),
    defineField({
      name: 'inStock',
      title: 'In Stock',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
      description: 'Optional. Men / Women / Kids — add new categories under "Category" in the sidebar.',
    }),
    defineField({
      name: 'productType',
      title: 'Type',
      type: 'reference',
      to: [{type: 'productType'}],
      description: 'Optional. Casual / Office / Sports etc. — add new types under "Type" in the sidebar.',
    }),
    defineField({
      name: 'description',
      title: 'Description (English)',
      type: 'text',
      rows: 4,
      description: 'Optional. More detail shown on the product\'s own page (material, fit, etc.).',
    }),
    defineField({
      name: 'descriptionSi',
      title: 'Description (Sinhala)',
      type: 'text',
      rows: 4,
      description: 'Optional. Falls back to the English description if left blank.',
    }),
    defineField({
      name: 'colors',
      title: 'Colors',
      type: 'array',
      description: 'Customers must pick one of these before inquiring. Add as many as you offer; toggle "In Stock" off to disable a color without deleting it.',
      of: [
        {
          type: 'object',
          name: 'colorOption',
          fields: [
            defineField({name: 'name', title: 'Color Name (English)', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'nameSi', title: 'Color Name (Sinhala)', type: 'string', description: 'Optional, falls back to English.'}),
            defineField({
              name: 'hex',
              title: 'Swatch Color',
              type: 'string',
              description: 'Optional. A hex code for the little color dot, e.g. #1a1a1a for black, #8b4513 for brown.',
            }),
            defineField({name: 'inStock', title: 'In Stock', type: 'boolean', initialValue: true}),
          ],
          preview: {
            select: {title: 'name', subtitle: 'inStock'},
            prepare({title, subtitle}) {
              return {title, subtitle: subtitle === false ? 'Out of stock' : 'In stock'}
            },
          },
        },
      ],
    }),
    defineField({
      name: 'sizes',
      title: 'Sizes',
      type: 'array',
      description: 'Customers must pick one of these before inquiring. Toggle "In Stock" off to disable a size without deleting it.',
      of: [
        {
          type: 'object',
          name: 'sizeOption',
          fields: [
            defineField({name: 'size', title: 'Size', type: 'string', description: 'e.g. 40, 41, 42 or S / M / L', validation: (Rule) => Rule.required()}),
            defineField({name: 'inStock', title: 'In Stock', type: 'boolean', initialValue: true}),
          ],
          preview: {
            select: {title: 'size', subtitle: 'inStock'},
            prepare({title, subtitle}) {
              return {title, subtitle: subtitle === false ? 'Out of stock' : 'In stock'}
            },
          },
        },
      ],
    }),
    defineField({
      name: 'sizeChartImage',
      title: 'Size Chart Image',
      type: 'image',
      description: 'Optional. Upload a size chart photo/diagram to show on the product page.',
    }),
    defineField({
      name: 'sizeChartTable',
      title: 'Size Chart Table (text)',
      type: 'array',
      description: 'Optional. A simple text table shown alongside (or instead of) the image — e.g. Size 40 → 25.5 cm. Pre-filled with the standard chart; edit or clear if this shoe runs differently.',
      initialValue: [
        {_type: 'sizeChartRow', size: '38', measurementCm: '24.0'},
        {_type: 'sizeChartRow', size: '39', measurementCm: '24.5'},
        {_type: 'sizeChartRow', size: '40', measurementCm: '25.0'},
        {_type: 'sizeChartRow', size: '41', measurementCm: '25.5'},
        {_type: 'sizeChartRow', size: '42', measurementCm: '26.0'},
        {_type: 'sizeChartRow', size: '43', measurementCm: '26.5'},
        {_type: 'sizeChartRow', size: '44', measurementCm: '27.0'},
      ],
      of: [
        {
          type: 'object',
          name: 'sizeChartRow',
          fields: [
            defineField({name: 'size', title: 'Size', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'measurementCm', title: 'Foot Length (cm)', type: 'string', validation: (Rule) => Rule.required()}),
          ],
          preview: {
            select: {size: 'size', measurementCm: 'measurementCm'},
            prepare({size, measurementCm}) {
              return {title: `Size ${size}`, subtitle: `${measurementCm} cm`}
            },
          },
        },
      ],
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers show first. Optional.',
    }),
    defineField({
      name: 'collections',
      title: 'Collections',
      type: 'array',
      description: 'Optional. Add this product to one or more collections.',
      of: [{type: 'reference', to: [{type: 'collection'}]}],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      code: 'code',
      subtitle: 'code',
      media: 'images.0',
    },
    prepare({title, code, media}) {
      return {title: title || `#${code}`, subtitle: code, media}
    },
  },
})
