// Loads src/data/dissertations.yaml.
import { parse } from 'yaml';
import raw from './dissertations.yaml?raw';

export interface Dissertation {
  name: string;
  year: number;
  title: string;
  advisor?: string;
  url?: string;
}

export const dissertations: Dissertation[] = parse(raw);

export const dissertationOf = (name: string) => dissertations.find((d) => d.name === name);
