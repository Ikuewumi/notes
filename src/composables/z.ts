import { z } from "zod"

export const zMetadata = z.object({
	title: z.string(),
	image: z.string().optional(),
	tags: z.string(),
	categories: z.string(),
	excerpt: z.string()
})