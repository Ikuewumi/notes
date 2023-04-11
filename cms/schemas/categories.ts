import {Rule} from "sanity"

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
      }
    ]
  }