#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
let errors = 0;

function check(condition, message) {
  if (condition) {
    console.log(`  ✓ ${message}`);
  } else {
    console.error(`  ✗ ${message}`);
    errors += 1;
  }
}

function read(relativePath) {
  const fullPath = path.join(rootDir, relativePath);
  return fs.existsSync(fullPath) ? fs.readFileSync(fullPath, 'utf8') : '';
}

console.log('M31A website content and SEO validation\n');

const requiredRoutes = [
  'app/page.tsx',
  'app/download/page.tsx',
  'app/features/page.tsx',
  'app/architecture/page.tsx',
  'app/security/page.tsx',
  'app/docs/page.tsx',
  'app/docs/[...slug]/page.tsx',
  'app/cli/page.tsx',
  'app/changelog/page.tsx',
  'app/roadmap/page.tsx',
  'app/community/page.tsx',
  'app/about/page.tsx',
  'app/not-found.tsx',
  'app/layout.tsx',
  'app/sitemap.ts',
  'app/robots.ts',
];

console.log('Checking required routes:');
for (const route of requiredRoutes) {
  check(fs.existsSync(path.join(rootDir, route)), `Route file exists: ${route}`);
}

console.log('\nChecking retired simulated interfaces:');
const retiredSimulationFiles = [
  'components/home/hero-terminal.tsx',
  'components/home/product-workflow.tsx',
  'components/home/repository-capabilities.tsx',
  'components/home/terminal-native.tsx',
  'components/home/cli-showcase.tsx',
  'components/site/signature-visual.tsx',
];
for (const file of retiredSimulationFiles) {
  check(!fs.existsSync(path.join(rootDir, file)), `Removed simulated interface: ${file}`);
}
const homepage = read('app/page.tsx');
const cliPage = read('app/cli/page.tsx');
check(!/HeroTerminal|ProductWorkflow|RepositoryCapabilities|TerminalNative/.test(homepage), 'Homepage imports no simulated runtime showcases');
check(!cliPage.includes('CliShowcase'), 'CLI reference renders no simulated command output');
check(fs.existsSync(path.join(rootDir, 'public/favicon.svg')), 'Favicon asset exists');
check(fs.existsSync(path.join(rootDir, 'public/m31a-logo.svg')), 'Logo lockup exists');

const product = read('lib/m31a/product.ts');
console.log('\nChecking product identity and support invariants:');
check(product.includes("version: '0.1.9'"), 'Product version is 0.1.9');
check(product.includes("canonicalUrl: 'https://m31a.tonmoyinfrastructure.org/'"), 'Canonical URL uses production HTTPS origin');
check(product.includes("repositoryUrl: 'https://github.com/eshanized/M31A'"), 'Repository URL matches authoritative repository');
check(product.includes("rustVersion: '1.85+'"), 'Minimum Rust version is 1.85+');
check(product.includes("edition: '2024'"), 'Rust edition is 2024');
check(product.includes("licenses: ['MIT']"), 'Runtime license is MIT');
check(product.includes("canonicalProvider: 'NVIDIA NIM (nvidia_nim)'"), 'Production model provider is NVIDIA NIM');
check(product.includes("canonicalModelId: 'nvidia/nemotron-3-ultra-550b-a55b'"), 'Canonical model ID matches expected provider');
check(product.includes("canonicalProviderEndpoint: 'https://integrate.api.nvidia.com/v1'"), 'Provider endpoint matches NVIDIA API');

console.log('\nChecking platform support matrix:');
check(product.includes("targetTriple: 'x86_64-unknown-linux-gnu'") && product.includes("classification: 'SUPPORTED'"), 'Linux x86_64 is release-qualified');
check(product.includes("os: 'macOS'") && product.includes("classification: 'INTEGRATED'"), 'macOS native mechanisms are integrated');
check(product.includes("classification: 'COMPILE-CHECKED'"), 'Compile-checked target classifications exist');

console.log('\nChecking tools, CLI commands, and docs:');
const toolIds = [...product.matchAll(/id:\s*'([a-z_]+)'/g)].map((match) => match[1]);
check(new Set(toolIds).size >= 28, `At least 28 unique tool definitions exist (found ${new Set(toolIds).size})`);
const commands = [...product.matchAll(/command:\s*'([^']+)'/g)];
check(commands.length >= 18, `At least 18 CLI command definitions exist (found ${commands.length})`);

const content = read('lib/docs/content.tsx');
const slugMatches = [...product.matchAll(/slug:\s*'([a-z0-9-]+)'/g)].map((match) => match[1]);
const docSlugs = [...new Set(slugMatches)];
check(docSlugs.length === 19, `Exactly 19 documentation slugs are defined (found ${docSlugs.length})`);
check(docSlugs.length === slugMatches.length, 'Documentation slugs are unique');
for (const slug of docSlugs) {
  check(content.includes(`case '${slug}':`), `Documentation article exists for ${slug}`);
}

console.log('\nChecking navigation links:');
const nav = read('lib/m31a/nav.ts');
check(!nav.includes('LICENSE-MIT'), 'No dead LICENSE-MIT navigation links');
check(!nav.includes('LICENSE-APACHE'), 'No dead LICENSE-APACHE navigation links');
check(nav.includes('/blob/master/LICENSE'), 'Navigation points at LICENSE');
check(nav.includes('/blob/master/CONTRIBUTING.md'), 'Navigation points at CONTRIBUTING.md');
check(nav.includes('/blob/master/SECURITY.md'), 'Navigation points at SECURITY.md');

console.log('\nChecking SEO metadata and sitemap route contracts:');
const seo = read('lib/m31a/seo.ts');
const sitemap = read('app/sitemap.ts');
const robots = read('app/robots.ts');
check(sitemap.includes('PRODUCT.canonicalUrl'), 'Sitemap uses the canonical production URL');
check(sitemap.includes('DOCS.map'), 'Sitemap includes documentation manifest entries');
check(seo.includes('alternates:') && seo.includes('canonical'), 'Metadata helper emits canonical URLs');
check(seo.includes('openGraph:') && seo.includes('twitter:'), 'Metadata helper emits social metadata');
check(robots.includes("allow: '/'"), 'robots.txt allows public content');
check(robots.includes('sitemap.xml'), 'robots.txt advertises sitemap');
check(robots.includes('PRODUCT.canonicalUrl'), 'robots.txt sitemap uses canonical host');

const indexableRoutes = [
  ['app/page.tsx', '/'],
  ['app/features/page.tsx', '/features'],
  ['app/architecture/page.tsx', '/architecture'],
  ['app/security/page.tsx', '/security'],
  ['app/docs/page.tsx', '/docs'],
  ['app/cli/page.tsx', '/cli'],
  ['app/download/page.tsx', '/download'],
  ['app/changelog/page.tsx', '/changelog'],
  ['app/roadmap/page.tsx', '/roadmap'],
  ['app/community/page.tsx', '/community'],
  ['app/about/page.tsx', '/about'],
];

const titles = new Map();
const descriptions = new Map();
const metadataPaths = new Set();
for (const [file, route] of indexableRoutes) {
  const source = read(file);
  check(source.includes('createPageMetadata'), `${file} uses shared page metadata`);
  check(source.includes(`path: "${route}"`), `${file} declares its own canonical route`);

  const block = source.match(/createPageMetadata\(\s*\{([\s\S]*?)\}\s*\)/)?.[1] ?? '';
  const title = block.match(/title:\s*"([^"]+)"/)?.[1];
  const description = block.match(/description:\s*"([^"]+)"/)?.[1];
  check(Boolean(title), `${route} has an explicit page title`);
  check(Boolean(description), `${route} has an explicit meta description`);

  if (title) {
    const key = title.trim().toLowerCase();
    check(!titles.has(key), `${route} title is unique`);
    titles.set(key, route);
  }
  if (description) {
    const key = description.trim().toLowerCase();
    check(!descriptions.has(key), `${route} description is unique`);
    descriptions.set(key, route);
  }
  check(!metadataPaths.has(route), `${route} is not duplicated in metadata route manifest`);
  metadataPaths.add(route);
}

const docsRoute = read('app/docs/[...slug]/page.tsx');
check(docsRoute.includes('generateStaticParams'), 'Docs entries are statically generated');
check(docsRoute.includes('createPageMetadata'), 'Each doc uses its own metadata');
check(docsRoute.includes('path: `/docs/${slug}`'), 'Each doc canonical includes the doc slug');
check(docsRoute.includes("robots: { index: false, follow: false }"), 'Unknown docs routes are excluded from indexing');

const sitemapRoutes = [
  '/', '/features', '/architecture', '/security', '/docs',
  '/cli', '/download', '/changelog', '/roadmap', '/community', '/about',
  ...docSlugs.map((slug) => `/docs/${slug}`),
];
const seenRoutes = new Set();
for (const route of sitemapRoutes) {
  check(!seenRoutes.has(route), `Sitemap route ${route} appears once`);
  seenRoutes.add(route);
  const canonicalUrl = route === '/' ? 'https://m31a.tonmoyinfrastructure.org/' : `https://m31a.tonmoyinfrastructure.org${route}`;
  check(sitemap.includes(canonicalUrl), `Sitemap includes canonical URL ${canonicalUrl}`);
}
check(seo.includes("if (path === '/') return PRODUCT.canonicalUrl"), 'Homepage canonical is the root URL');
check(seo.includes('new URL(relativePath, PRODUCT.canonicalUrl)'), 'Other canonical URLs use the production origin');

console.log('\n==================================================');
if (errors === 0) {
  console.log('✅ All content and SEO invariants passed.');
  process.exit(0);
}
console.error(`❌ Validation failed with ${errors} error(s).`);
process.exit(1);
