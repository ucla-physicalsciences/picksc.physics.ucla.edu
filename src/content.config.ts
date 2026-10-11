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

// Software and educational-code pages, migrated from the old site. `group` puts a page in a section of
// /software (the page with order 0 is that section's overview); `legacy` is its old URL, which redirects here.
const software = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/software' }),
  schema: z.object({
    title: z.string(),
    group: z.enum(['overview', 'production', 'skeleton', 'frameworks', 'education']),
    order: z.number(),
    legacy: z.string().optional(),
    repo: z.string().url().optional(),
  }),
});

// News: one Markdown file per item, shown newest first on /news together with the research highlights.
// `datePrecision` says how much of `date` to show (several old items are only known to the year);
// `archive` marks items carried over from the old PICKSC site.
const news = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/news' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      datePrecision: z.enum(['day', 'month', 'year']).default('day'),
      image: image().optional(),
      imageAlt: z.string().default(''),
      archive: z.boolean().default(false),
    }),
});

export const collections = { highlights, areas, software, news };
