// Sections of /software and the pages in each, built from the `software` content collection.
import { getCollection, type CollectionEntry } from 'astro:content';

export const GROUPS = [
  { id: 'production', title: 'Production codes', blurb: 'Fully featured, parallel PIC and Vlasov–Fokker–Planck codes used for research.' },
  { id: 'skeleton', title: 'Skeleton codes', blurb: 'Bare-bones, fully functional PIC codes illustrating parallel techniques from serial to GPU.' },
  { id: 'frameworks', title: 'Frameworks and techniques', blurb: 'The UPIC framework, gridless codes and Fortran 2003 programming techniques.' },
  { id: 'education', title: 'Educational software', blurb: 'Interactive codes and notebooks for teaching plasma physics.' },
] as const;

// Codes that live only on GitHub, listed alongside the production codes.
export const EXTERNAL = {
  production: [
    { title: 'UPIC-ES', href: 'https://github.com/UCLA-Plasma-Simulation-Group/educational-codes/tree/master/upic_es_h5' },
    { title: 'UPIC-Darwin', href: 'https://github.com/UCLA-Plasma-Simulation-Group/UPIC-2.0' },
  ],
} as Record<string, { title: string; href: string }[]>;

export const href = (p: CollectionEntry<'software'>) => (p.data.group === 'overview' ? '/software' : `/software/${p.id}`);

export async function softwareSections() {
  const pages = (await getCollection('software')).sort((a, b) => a.data.order - b.data.order);
  return GROUPS.map((g) => {
    const inGroup = pages.filter((p) => p.data.group === g.id);
    return { ...g, index: inGroup.find((p) => p.data.order === 0), pages: inGroup.filter((p) => p.data.order !== 0) };
  });
}
