import { SchemaTypeDefinition } from "sanity";

export default {
    name: 'author',
    title: 'Author',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            description: 'Your name',
            validation: (rule) => rule.required().max(100)
        },
        {
            name: 'user',
            title: 'User',
            type: 'reference',
            description: 'A reference to the author\'s user document to get name, email adress and all that jazz',
            to: {
                type: 'user'
            }
        },
        {
            name: "website",
            type: "url",
            title: "Website",
            description: "The author's website"
        },
        {
            name: "social",
            type: "object",
            title: "Social Links",
            description: "Links to the author's social media profiles. These are recommended, but optional",
            fields: [
                {
                    name: "twitter",
                    type: "url",
                    title: "Twitter",
                    description: "The author's Twitter profile"
                },
                {
                    name: "facebook",
                    type: "url",
                    title: "Facebook",
                    description: "The author's Facebook profile."
                },
                {
                    name: "instagram",
                    type: "url",
                    title: "Instagram",
                    description: "The author's Instagram profile."
                },
                {
                    name: "linkedin",
                    type: "url",
                    title: "LinkedIn",
                    description: "The author's LinkedIn profile."
                }

            ]
        }
    ]
} as SchemaTypeDefinition