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

// Highlight group authors (current members and alumni on the team page). Authors are stored as
// initials and surname ("W. B. Mori"), so an author matches a member with the same surname and
// first initial. Namesakes who are not group members are listed below.
import { team } from './team';

// Same surname and initial as a group member but a different person: everywhere, or only in one paper (by DOI).
const NOT_GROUP = new Set(['C.-K. Huang', 'F. Y. Li']); // Chen-Kang Huang; Fei-Yu Li
const NOT_GROUP_IN: Record<string, string[]> = {
  '10.1038/ncomms11893': ['Y. Zhao'], // Yao Zhao, not alumnus Yujian Zhao
};

const parse = (name: string) => {
  const words = name.normalize('NFD').replace(/\p{M}/gu, '').replace(/\(.*?\)/g, '').replace(/\./g, '. ').trim().split(/\s+/);
  const first = words[0];
  return { key: `${first[0]} ${words.at(-1)}`.toLowerCase(), first: /^[^.]{2,}$/.test(first) ? first.toLowerCase() : null };
};
const members = new Map<string, (string | null)[]>();
for (const p of [...team.pis, ...team.groups.flatMap((g) => g.members), ...team.alumni]) {
  const { key, first } = parse(p.name);
  members.set(key, [...(members.get(key) ?? []), first]);
}
export const isGroupAuthor = (author: string, doi?: string) => {
  if (NOT_GROUP.has(author) || (doi && NOT_GROUP_IN[doi]?.includes(author))) return false;
  const { key, first } = parse(author);
  return (members.get(key) ?? []).some((f) => !first || !f || f === first);
};
