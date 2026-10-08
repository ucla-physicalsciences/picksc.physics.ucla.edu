import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Research highlights: one Markdown file per featured paper.
// The body text is the short plain-language summary shown on the site.
const highlights = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/highlights' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      theme: z.enum(['acceleration', 'computing', 'data-driven']),
      paper: z.object({
        title: z.string(),
        authors: z.string(),
        citation: z.string(),
        doi: z.string(),
      }),
      date: z.coerce.date(),
      // Optional so a highlight can be drafted before its figure arrives.
      image: image().optional(),
      imageAlt: z.string(),
      figureCredit: z.string(),
      featured: z.boolean().default(false),
    }),
});

export const collections = { highlights };
