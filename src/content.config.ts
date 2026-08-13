import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const news = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().default('https://space.lne.st/wp-content/themes/lnest_space/images/top/fva@2x.jpg'),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { news };
