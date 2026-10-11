// Site-wide settings. Pages not yet rebuilt in Astro link to the current site.
export const LEGACY = 'https://picksc.physics.ucla.edu';

export const nav = [
  { label: 'Research', href: '/research' },
  { label: 'Software', href: `${LEGACY}/software-overview.html` },
  { label: 'Publications', href: '/publications' },
  { label: 'Team', href: '/team' },
  { label: 'News', href: `${LEGACY}/news.html` },
  { label: 'Join us', href: `${LEGACY}/opportunities.html` },
];

// Labels for the research-area tag on homepage highlight cards (keys match the highlights' `theme`).
export const themes = {
  acceleration: { title: 'Plasma-based acceleration' },
  computing: { title: 'Simulation software & HPC' },
  'data-driven': { title: 'AI/ML for plasma physics' },
} as const;

export const software = [
  {
    name: 'OSIRIS',
    desc: 'Fully relativistic, massively parallel electromagnetic PIC code, now open source with GPU support.',
    href: 'https://osiris-code.github.io/',
  },
  {
    name: 'QuickPIC',
    desc: 'Fully parallel, relativistic 3D quasi-static PIC code for plasma wakefield acceleration.',
    href: 'https://github.com/UCLA-Plasma-Simulation-Group/QuickPIC-OpenSource',
  },
  {
    name: 'QPAD',
    desc: 'Quasi-3D quasi-static PIC code combining the quasi-static approximation with azimuthal decomposition.',
    href: 'https://github.com/UCLA-Plasma-Simulation-Group/QPAD',
  },
  {
    name: 'OSHUN',
    desc: 'Parallel relativistic 2D3P Vlasov–Fokker–Planck code.',
    href: 'https://github.com/UCLA-Plasma-Simulation-Group/OSHUN',
  },
  {
    name: 'UPIC & skeleton codes',
    desc: 'Trusted, bare-bones parallel PIC components and mini-apps for building new codes.',
    href: `${LEGACY}/skeleton-code.html`,
  },
  {
    name: 'Educational codes',
    desc: 'Jupyter notebooks and small PIC codes for teaching plasma physics.',
    href: `${LEGACY}/jupyterPIC.html`,
  },
];
