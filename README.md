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
| Research highlights (one per featured paper) | `src/content/highlights/*.md` |
| Highlight figures | `src/assets/research/` |
| Publications | `src/data/publications.json` |
| Menu, research themes, software list | `src/data/site.ts` |

To add a research highlight, copy an existing file in `src/content/highlights/`, put its figure in
`src/assets/research/`, and edit the front matter. The build checks every field, so a missing or
misspelled field fails with a clear error instead of silently breaking the page.
