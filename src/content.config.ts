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

// Research areas: one Markdown file per area, shown in `order` on the Research page.
// The body is the area's description; `publications` lists DOIs from src/data/publications.json.
const areas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/areas' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subtitle: z.string(),
      order: z.number(),
      image: image().optional(),
      imageAlt: z.string().default(''),
      figureCredit: z.string().default(''),
      // Wide figures (e.g. multi-step diagrams) span the full width below the text.
      wideFigure: z.boolean().default(false),
      publications: z.array(z.string()).default([]),
    }),
});

export const collections = { highlights, areas };
