import { BlockDefinition, Rule } from "sanity";

export default {
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
  ],
  preview: {
    select: {
      imageUrl: "image.asset.url",
      title: "alt",
    },
    prepare({ imageUrl, title }) {
      return {
        title: title,
        media: <img src={imageUrl} alt={title} />
      }
    },
  },
} as BlockDefinition








interface ImageBlock {
  type: "imageBlock";
  title: string;
  fields: {
    alt: {
      type: "string";
      title: "Alternative text";
      validation: (Rule: Rule) => Rule.required().max(100);
      description: "Describe the content of the image for accessibility purposes";
    };
    image: {
      type: "image";
      title: "Image";
      validation: (Rule: Rule) => Rule.required();
    };
  };
}
