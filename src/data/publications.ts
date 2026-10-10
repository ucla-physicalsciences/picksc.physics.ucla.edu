// Helpers for the publication list in publications.json.
import publications from './publications.json';

export type Publication = (typeof publications)[number];
export { publications };

export const cite = (p: Publication) =>
  p.status === 'accepted'
    ? `Accepted in ${p.journal} (${p.year})`
    : [p.journal, p.volume && `${p.volume}, ${p.page}`].filter(Boolean).join(' ') + ` (${p.year})`;

export const shortAuthors = (a: string[]) => (a.length > 4 ? `${a.slice(0, 3).join(', ')}, et al.` : a.join(', '));

// Look up a paper by DOI (case-insensitive). Fails the build if it is missing,
// so a typo in a content file can't silently drop a paper from the site.
export function byDoi(doi: string): Publication {
  const p = publications.find((x) => x.doi.toLowerCase() === doi.toLowerCase());
  if (!p) throw new Error(`DOI ${doi} not found in src/data/publications.json`);
  return p;
}
