#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const out = path.join(root, 'out');
let failures = 0;

function check(condition, message) {
  if (condition) console.log(`  PASS ${message}`);
  else {
    console.error(`  FAIL ${message}`);
    failures += 1;
  }
}

function read(file) {
  const filename = path.join(out, file);
  return fs.existsSync(filename) ? fs.readFileSync(filename, 'utf8') : '';
}

function exists(...parts) {
  return fs.existsSync(path.join(out, ...parts));
}

if (!fs.existsSync(out)) {
  console.error('Static export not found. Run npm run build before SEO output validation.');
  process.exit(1);
}

console.log('Validating generated static output for indexing\n');

const expectedPages = [
  ['index.html', 'https://m31a.tonmoyinfrastructure.org/', 'M31A — Open-Source Autonomous Coding Agent'],
  ['features.html', 'https://m31a.tonmoyinfrastructure.org/features', 'Autonomous Coding Agent Features | M31A'],
  ['architecture.html', 'https://m31a.tonmoyinfrastructure.org/architecture', 'Runtime Architecture | M31A'],
  ['security.html', 'https://m31a.tonmoyinfrastructure.org/security', 'Security Model and Policy Gates | M31A'],
  ['docs.html', 'https://m31a.tonmoyinfrastructure.org/docs', 'Documentation and Developer Guide | M31A'],
  ['cli.html', 'https://m31a.tonmoyinfrastructure.org/cli', 'CLI Command Reference | M31A'],
  ['download.html', 'https://m31a.tonmoyinfrastructure.org/download', 'Download and Install M31A | M31A'],
  ['changelog.html', 'https://m31a.tonmoyinfrastructure.org/changelog', 'Release Notes and Changelog | M31A'],
  ['roadmap.html', 'https://m31a.tonmoyinfrastructure.org/roadmap', 'Roadmap and Development Status | M31A'],
  ['community.html', 'https://m31a.tonmoyinfrastructure.org/community', 'Community and Contributions | M31A'],
  ['about.html', 'https://m31a.tonmoyinfrastructure.org/about', 'About the M31A Project | M31A'],
];

const seenCanonical = new Set();
for (const [file, canonical, title] of expectedPages) {
  check(exists(file), `exported HTML page exists: ${file}`);
  const html = read(file);
  if (!html) continue;
  check(html.includes(`<link rel="canonical" href="${canonical}"`) || html.includes(`<link href="${canonical}" rel="canonical"`), `${file} has the expected canonical URL`);
  check(html.includes(`<title>${title}</title>`), `${file} has the expected title`);
  check(/<meta name="description" content="[^"]{20,}"/.test(html), `${file} has a non-empty meta description`);
  check(!html.includes('noindex'), `${file} is not accidentally marked noindex`);
  check(!seenCanonical.has(canonical), `canonical URL is unique: ${canonical}`);
  seenCanonical.add(canonical);
}

const sitemapXml = read('sitemap.xml');
const robotsTxt = read('robots.txt');
check(Boolean(sitemapXml), 'exported sitemap.xml exists');
check(Boolean(robotsTxt), 'exported robots.txt exists');
check(robotsTxt.includes('User-agent: *'), 'robots.txt includes a wildcard crawler rule');
check(robotsTxt.includes('Allow: /'), 'robots.txt allows public pages');
check(robotsTxt.includes('https://m31a.tonmoyinfrastructure.org/sitemap.xml'), 'robots.txt advertises the production sitemap');

if (sitemapXml) {
  check(sitemapXml.includes('<urlset'), 'sitemap is XML urlset');
  check(sitemapXml.includes('<loc>https://m31a.tonmoyinfrastructure.org/</loc>'), 'sitemap includes homepage');
  const locs = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  check(locs.length >= 30, `sitemap includes the static pages and doc routes (found ${locs.length})`);
  check(new Set(locs).size === locs.length, 'sitemap contains no duplicate URLs');
  for (const loc of locs) {
    check(loc.startsWith('https://m31a.tonmoyinfrastructure.org/'), `sitemap URL uses canonical host: ${loc}`);
    check(!loc.includes('#') && !loc.includes('?'), `sitemap URL does not contain fragment/query: ${loc}`);
  }
}

const docFiles = [
  'docs/introduction.html',
  'docs/installation.html',
  'docs/concepts.html',
];
for (const file of docFiles) {
  check(exists(file), `exported documentation page exists: ${file}`);
  const html = read(file);
  if (html) {
    check(html.includes('rel="canonical"'), `${file} exposes a canonical URL`);
    check(/<meta name="description" content="[^"]{20,}"/.test(html), `${file} has a descriptive meta description`);
  }
}

check(exists('404.html'), 'static export includes a 404 page');
check(exists('CNAME'), 'static export includes GitHub Pages custom domain CNAME');
check(exists('.nojekyll'), 'static export disables Jekyll processing');

console.log('\n' + '-'.repeat(52));
if (failures === 0) {
  console.log('All generated SEO output checks passed.');
  process.exit(0);
}
console.error(`${failures} generated SEO output check(s) failed.`);
process.exit(1);
