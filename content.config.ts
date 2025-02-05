import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        blog: defineCollection({
            schema: z.object({
                title: z.string(),
                description: z.string(),
                date: z.date(),
                image: z.string().optional(),
                tags: z.array(z.string()).optional(),
                draft: z.boolean().optional(),
            }),
            type: 'page',
            source: './blog/**.md',
        })
    }
})
