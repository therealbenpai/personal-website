import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        blog: defineCollection({
            schema: z.object({
                title: z.string(),
                description: z.string(),
                date: z.date(),
            }),
            type: 'page',
            source: './blog/**.md',
        })
    }
})
