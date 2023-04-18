import {SchemaTypeDefinition} from "sanity"

export default {
    name: 'category',
    title: 'Category',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: Rule => Rule.required().max(50)
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text'
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        description: 'An image that captures the essence of this category. Optional, but recommended'

      }
    ]
} as SchemaTypeDefinition