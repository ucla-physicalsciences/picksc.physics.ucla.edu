// Loads presentations.yaml and reports.yaml.
import { parse } from 'yaml';
import presRaw from './presentations.yaml?raw';
import reportsRaw from './reports.yaml?raw';

export interface Entry {
  authors?: string;
  speaker?: string;
  title?: string;
  venue?: string;
  year?: number;
  note?: string;
  file?: string;
  url?: string;
}
interface Workshop {
  title: string;
  year: number;
  agenda?: string;
  sessions: { title: string; talks: Entry[] }[];
}

export const presentations: { workshops: Workshop[]; talks: Entry[]; proceedings: Entry[] } = parse(presRaw);
export const reports: { section: string; items: Entry[] }[] = parse(reportsRaw);
