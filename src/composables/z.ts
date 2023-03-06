import { z } from "zod"

export const zNote = z.object({
	title: z.string().min(1),
	image: z.string().default(""),
	tags: z.string().min(1),
	categories: z.string().min(1),
	excerpt: z.string().min(30),
	content: z.string().default("")
})



export const zDbNote = zNote.extend({
	code: z.string().min(1).max(10),
	uid: z.string(),
	createdAt: z.number(),
	updatedAt: z.number(),
	author: z.string().min(1),
	authorImage: z.string().min(1)
})