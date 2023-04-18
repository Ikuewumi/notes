// @ts-nocheck

export default {
    name: 'blog',
    title: 'Blog',
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
          maxLength: 200
        },
        validation: (Rule) => Rule.required()
      },
      {
        name: 'publishedAt',
        title: 'Published at',
        type: 'datetime',
        validation: (Rule) => Rule.required()
      },
      {
        name: 'coverImage',
        title: 'Cover Image',
        type: 'image',
        options: {
          hotspot: true
        },
        validation: (Rule) => Rule.required()
      },
      {
        name: 'excerpt',
        title: 'Excerpt',
        type: 'text',
        validation: (Rule) => Rule.required().max(200)
      },
      {
        name: 'body',
        title: 'Body',
        type: 'array',
        of: [
            {
                type: 'block'
            },
            {
              title: "Image",
              name: "imageBlock",
              type: "object",
              fields: [
                {
                  name: "image",
                  title: "Image",
                  type: "image",
                  options: {
                    hotspot: true,
                  },
                },
                {
                  name: "alt",
                  title: "Alternative text",
                  type: "string",
                  description: "Describe what's in the image to people who can't see it",
                  validation: (Rule) =>
                    Rule.error("You have to fill out the alternative text.").required(),
                },
              ]
            }
  
        ],
        validation: (Rule) => Rule.required()
      },
      {
        name: 'author',
        title: 'Author',
        type: 'reference',
        to: {
          type: 'author'
        },
        validation: (Rule) => Rule.required()
      },
      {
        name: 'categories',
        title: 'Categories',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: {
              type: 'category'
            }
          }
        ],
        validation: (Rule) => Rule.required()
      }
    ]
  }