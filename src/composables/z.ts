import { z } from "zod"

export const zMetadata = z.object({
	title: z.string().min(1),
	image: z.string().optional(),
	tags: z.string().min(1),
	categories: z.string().min(1),
	excerpt: z.string().min(30)
})