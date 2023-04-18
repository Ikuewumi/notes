import { SchemaTypeDefinition} from "sanity"

export default {
    name: 'series',
    title: 'Series',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule) => Rule.required().max(100)
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96
        },
        validation: (Rule) => Rule.required()
      },
      {
        name: 'coverImage',
        title: 'Cover Image',
        type: 'image',
        validation: (Rule) => Rule.required()
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        rows: 2,
        validation: (Rule) => Rule.required().max(250)
      },
      {
        name: 'blogs',
        title: 'Blogs',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'blog' }] }]
      }
    ]
} as SchemaTypeDefinition