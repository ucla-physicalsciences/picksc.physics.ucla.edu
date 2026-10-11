// Loads src/data/team.yaml and resolves photo file names to images in src/assets/team/.
import type { ImageMetadata } from 'astro';
import { parse } from 'yaml';
import raw from './team.yaml?raw';

export interface Person {
  name: string;
  role?: string;
  title?: string;
  focus?: string;
  photo?: string;
  email?: string;
  website?: string;
  scholar?: string;
  github?: string;
  linkedin?: string;
  researchgate?: string;
  dblp?: string;
}
export interface Alum {
  name: string;
  role?: string;
  years?: string;
  now?: string;
}
interface Team {
  pis: Person[];
  groups: { title: string; members: Person[] }[];
  collaborators: Person[];
  alumni: Alum[];
}

export const team: Team = parse(raw);

const photos = import.meta.glob<{ default: ImageMetadata }>('../assets/team/*.{jpg,jpeg,png,webp}', { eager: true });

export function photoFor(p: Person): ImageMetadata | undefined {
  if (!p.photo) return undefined;
  const hit = photos[`../assets/team/${p.photo}`];
  if (!hit) throw new Error(`Photo ${p.photo} for ${p.name} not found in src/assets/team/`);
  return hit.default;
}

export const initials = (name: string) =>
  name
    .split(/\s+/)
    .filter((w) => /^[A-Z]/.test(w) && !w.endsWith('.'))
    .map((w) => w[0])
    .slice(0, 2)
    .join('') || name[0];

const LINK_LABELS: [keyof Person, string][] = [
  ['email', 'Email'],
  ['website', 'Website'],
  ['scholar', 'Google Scholar'],
  ['github', 'GitHub'],
  ['linkedin', 'LinkedIn'],
  ['researchgate', 'ResearchGate'],
  ['dblp', 'dblp'],
];

export const linksFor = (p: Person) =>
  LINK_LABELS.filter(([k]) => p[k]).map(([k, label]) => ({
    label,
    href: k === 'email' ? `mailto:${p[k]}` : (p[k] as string),
  }));
