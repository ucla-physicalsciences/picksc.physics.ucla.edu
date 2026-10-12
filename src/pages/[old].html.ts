// Forwarding pages for the old site's addresses (e.g. /osiris.html), so bookmarks and links in papers keep working.
// GitHub Pages can't send server redirects, so each one is a small page that forwards the browser.
import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import { href } from '../data/softwareNav';

// Pages whose old and new names match (team.html, news.html, ...) need no entry: the new page is built at that file.
const PAGES: Record<string, string> = {
  'index-slideshow': '/',
  services: '/',
  'secondary-sidebar': '/',
  'about-us': '/about',
  'publications-old': '/publications',
  'research-overview': '/research',
  'high-performance-computing': '/research#software-hpc',
  'plasma-based-acceleration': '/research#plasma-acceleration',
  'nonlinear-optics-of-plasmas': '/research#nonlinear-optics',
};

export const getStaticPaths = (async () => {
  // Software pages record their old file name in `legacy`.
  const software = (await getCollection('software'))
    .filter((p) => p.data.legacy)
    .map((p) => [p.data.legacy!.replace(/\.html$/, ''), href(p)]);
  return [...Object.entries(PAGES), ...software].map(([old, to]) => ({ params: { old }, props: { to } }));
}) satisfies GetStaticPaths;

export const GET: APIRoute = ({ props }) => {
  const to = props.to as string;
  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Moved · UCLA Plasma Simulation Group</title>
<meta http-equiv="refresh" content="0; url=${to}">
<link rel="canonical" href="${to}">
<meta name="robots" content="noindex">
<script>location.replace(${JSON.stringify(to)}${to.includes('#') ? '' : ' + location.hash'});</script>
</head>
<body><p>This page has moved to <a href="${to}">${to}</a>.</p></body>
</html>
`;
  return new Response(html, { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
};
