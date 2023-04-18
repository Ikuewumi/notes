import { Rule, SchemaTypeDefinition } from "sanity"


export default {
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        validation: (Rule:Rule) => Rule.required()
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
        validation: (Rule:Rule) => Rule.required().email()
      },
      {
        name: 'avatar',
        title: 'Avatar',
        type: 'image',
        options: {
          hotspot: true
        }
      },
      {
        name: 'role',
        title: 'Role',
        type: 'string',
        options: {
          list: [
            { title: 'Admin', value: 'admin' },
            { title: 'Author', value: 'author' },
            { title: 'Reader', value: 'reader' }
          ]
        },
        validation: (Rule:Rule) => Rule.required()
      },
      {
        name: 'bio',
        title: 'Bio',
        type: 'text'
      },
      {
        name: 'bookmarks',
        title: 'Bookmarks',
        type: "array",
        of: [{ type: 'reference', to: [{ type: 'blog' }] }]
      }
    ]
} as SchemaTypeDefinition