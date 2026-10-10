# UCLA Plasma Simulation Group website (Astro)

Source for the redesigned UCLA Plasma Simulation Group website (currently [picksc.physics.ucla.edu](https://picksc.physics.ucla.edu)), built with
[Astro](https://astro.build) and Tailwind CSS. Work in progress on the `astro-revamp` branch; the live
site is still served from the `gh-pages` branch (Jekyll).

## Run locally

```sh
npm install
npm run dev      # http://localhost:4321, reloads on save
npm run build    # static site in dist/
```

## Where content lives

| What | Where |
|---|---|
| Research areas (Research page: text, figure, 3 papers each) | `src/content/areas/*.md` |
| Research area figures | `src/assets/areas/` |
| Homepage highlight cards (one per featured paper) | `src/content/highlights/*.md` |
| Highlight figures | `src/assets/research/` |
| Candidate simulation figures (homepage hero) | `src/assets/simulations/` |
| Publications | `src/data/publications.json` |
| Menu, research themes, software list | `src/data/site.ts` |
| Group logo files (SVG, PNG, PDF; not served by the site) | `brand/` |
| Logo used in the header | `src/assets/group-logo.svg` (copy of `brand/SVG/PSG_lockup-horizontal_color.svg`, outer margin trimmed) |

To add a research highlight, copy an existing file in `src/content/highlights/`, put its figure in
`src/assets/research/`, and edit the front matter. The build checks every field, so a missing or
misspelled field fails with a clear error instead of silently breaking the page.
