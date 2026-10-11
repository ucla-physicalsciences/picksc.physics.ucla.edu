// Download links for files in public/: label by type, with the size so visitors know what they're getting.
import { statSync } from 'node:fs';

const TYPES: Record<string, string> = { pdf: 'PDF', key: 'Keynote', zip: 'Keynote (zip)', pptx: 'PowerPoint' };

export function fileLink(path: string) {
  const ext = path.split('.').pop()!.toLowerCase();
  const bytes = statSync(`public/${path}`).size; // fails the build if the file is missing
  const size = bytes >= 1e6 ? `${Math.round(bytes / 1e6)} MB` : `${Math.max(1, Math.round(bytes / 1e3))} kB`;
  return { href: `/${path}`, label: `${TYPES[ext] ?? ext.toUpperCase()} · ${size}` };
}
