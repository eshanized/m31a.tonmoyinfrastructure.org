#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

console.log('🔍 Starting M31A Website Content & Integrity Validation...\n');

let errorCount = 0;
function assert(condition, message) {
  if (!condition) {
    console.error(`❌ ERROR: ${message}`);
    errorCount++;
  } else {
    console.log(`  ✓ ${message}`);
  }
}

function read(relativePath) {
  const filePath = path.join(rootDir, relativePath);
  return fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf8') : '';
}

function extractStringProperty(source, property) {
  const match = source.match(new RegExp(`(?:const )?${property}:\\s*['"]([^'"]+)['"]`));
  return match?.[1] ?? null;
}

// 1. Verify Core Routes on Disk
console.log('Checking required Next.js App Router pages:');
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

for (const route of requiredRoutes) {
  assert(fs.existsSync(path.join(rootDir, route)), `Route file exists: ${route}`);
}

// 1a. Ensure the public website does not ship simulated runtime interfaces.
console.log('\nChecking that public pages do not include simulated M31A sessions:');
const retiredSimulationFiles = [
  'components/home/hero-terminal.tsx',
  'components/home/product-workflow.tsx',
  'components/home/repository-capabilities.tsx',
  'components/home/terminal-native.tsx',
  'components/home/cli-showcase.tsx',
  'components/site/signature-visual.tsx',
];
for (const file of retiredSimulationFiles) {
  assert(!fs.existsSync(path.join(rootDir, file)), `Removed simulated interface: ${file}`);
}
const homepageSource = read('app/page.tsx');
const cliPageSource = read('app/cli/page.tsx');
assert(
  !/HeroTerminal|ProductWorkflow|RepositoryCapabilities|TerminalNative/.test(homepageSource),
  'Homepage imports no simulated runtime showcases'
);
assert(!cliPageSource.includes('CliShowcase'), 'CLI reference renders no simulated command output');
assert(fs.existsSync(path.join(rootDir, 'public/favicon.svg')), 'M31A favicon asset exists');
assert(fs.existsSync(path.join(rootDir, 'public/m31a-logo.svg')), 'M31A logo lockup exists');

// 2. Read authoritative product data.
console.log('\nValidating lib/m31a/product.ts invariants:');
const productFile = read('lib/m31a/product.ts');
assert(productFile.includes("version: '0.1.9'"), 'PRODUCT version is 0.1.9');
assert(productFile.includes("canonicalUrl: 'https://m31a.tonmoyinfrastructure.org/'"), 'Canonical URL uses the production HTTPS origin');
assert(productFile.includes("repositoryUrl: 'https://github.com/eshanized/M31A'"), 'Repository URL matches authoritative repo');
assert(productFile.includes("rustVersion: '1.85+'"), 'Rust version is 1.85+');
assert(productFile.includes("edition: '2024'"), 'Rust edition is 2024');
assert(productFile.includes("licenses: ['MIT']"), 'Runtime license matches canonical MIT license');

// Provider invariant.
assert(productFile.includes("canonicalProvider: 'NVIDIA NIM (nvidia_nim)'"), 'Production canonical provider is NVIDIA NIM');
assert(productFile.includes("canonicalModelId: 'nvidia/nemotron-3-ultra-550b-a55b'"), 'Canonical model ID matches production Nemotron');
assert(productFile.includes("canonicalProviderEndpoint: 'https://integrate.api.nvidia.com/v1'"), 'Provider endpoint is NVIDIA integrate API');

// Platform support matrix invariants.
console.log('\nValidating platform qualification matrix:');
assert(productFile.includes("targetTriple: 'x86_64-unknown-linux-gnu'") && productFile.includes("classification: 'SUPPORTED'"), 'Linux x86_64 is release-qualified');
assert(productFile.includes("os: 'macOS'") && productFile.includes("classification: 'INTEGRATED'"), 'macOS native mechanisms are integrated');
assert(productFile.includes("classification: 'COMPILE-CHECKED'"), 'Compile-checked classifications are present for non-qualified targets');

// Core tools and CLI catalog sanity checks.
console.log('\nValidating core tools and CLI catalogs:');
const toolMatches = productFile.match(/id:\s*'([a-z_]+)'/g) || [];
const toolIds = toolMatches.map((match) => match.replace(/id:\s*'|'/g, ''));
assert(new Set(toolIds).size >= 28, `Found at least 28 unique tool definitions (found ${new Set(toolIds).size})`);
const cliDefMatches = productFile.match(/command:\s*'([^']+)'/g) || [];
assert(cliDefMatches.length >= 18, `Found at least 18 CLI command definitions (found ${cliDefMatches.length})`);

// Documentation manifest and article mapping.
console.log('\nValidating documentation topics and article mapping:');
const contentFile = read('lib/docs/content.tsx');
const slugMatches = [...productFile.matchAll(/slug:\s*'([a-z0-9-]+)'/g)].map((match) => match[1]);
const uniqueSlugs = [...new Set(slugMatches)];
assert(uniqueSlugs.length === 19, `Exact 19 documentation slugs defined in product.ts (found ${uniqueSlugs.length})`);
assert(uniqueSlugs.length === slugMatches.length, 'Documentation slugs are unique in the source manifest');
for (const slug of uniqueSlugs) {
  assert(contentFile.includes(`case '${slug}':`), `lib/docs/content.tsx provides article for slug: ${slug}`);
}

// Navigation and footer targets.
console.log('\nValidating navigation and footer targets:');
const navFile = read('lib/m31a/nav.ts');
assert(!navFile.includes('LICENSE-MIT'), 'No dead links to LICENSE-MIT (uses LICENSE)');
assert(!navFile.includes('LICENSE-APACHE'), 'No dead links to LICENSE-APACHE (uses LICENSE)');
assert(navFile.includes('/blob/master/LICENSE'), 'Nav correctly points to /blob/master/LICENSE');
assert(navFile.includes('/blob/master/CONTRIBUTING.md'), 'Nav correctly points to /blob/master/CONTRIBUTING.md');
assert(navFile.includes('/blob/master/SECURITY.md'), 'Nav correctly points to /blob/master/SECURITY.md');

// 4. SEO contracts: one canonical URL per route and unique page-level metadata.
console.log('\nValidating SEO metadata and sitemap contracts:');
const origin = 'https://m31a.tonmoyinfrastructure.org';
const canonicalBase = origin + '/';
const sitemapSource = read('app/sitemap.ts');
const seoSource = read('lib/m31a/seo.ts');
const robotsSource = read('app/robots.ts');

assert(sitemapSource.includes('PRODUCT.canonicalUrl'), 'Sitemap is built from PRODUCT.canonicalUrl');
assert(sitemapSource.includes('DOCS.map'), 'Sitemap dynamically includes documentation articles');
assert(seoSource.includes('alternates:') && seoSource.includes('canonical'), 'Shared metadata helper emits canonical URLs');
assert(seoSource.includes('openGraph:') && seoSource.includes('twitter:'), 'Shared metadata helper emits Open Graph and Twitter metadata');
assert(robotsSource.includes("allow: '/'"), 'robots.txt allows public content to be crawled');
assert(robotsSource.includes('sitemap.xml'), 'robots.txt declares a sitemap location');
assert(robotsSource.includes('PRODUCT.canonicalUrl'), 'robots.txt sitemap is based on the production canonical origin');

// Every indexable static page must opt into the shared metadata helper and use its own path.
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
const seenMetadataPaths = new Set();
const seenTitles = new Map();
const seenDescriptions = new Map();

for (const [file, route] of indexableRoutes) {
  const source = read(file);
  const expectedPath = `path: "${route}"`;
  assert(source.includes('createPageMetadata'), `${file} uses shared SEO metadata`);
  assert(source.includes(expectedPath), `${file} declares canonical path ${route}`);
  if (seenMetadataPaths.has(route)) assert(false, `Duplicate SEO route path ${route}`);
  seenMetadataPaths.add(route);

  const metadataBlock = source.match(/createPageMetadata\(\s*\{([\s\S]*?)\}\s*\)/);
  const block = metadataBlock?.[1] ?? '';
  const title = block.match(/title:\s*"([^"]+)"/)?.[1];
  const description = block.match(/description:\s*"([^"]+)"/)?.[1];
  if (title) {
    const key = title.trim().toLowerCase();
    assert(!seenTitles.has(key), `Unique page title for ${route}`);
    if (seenTitles.has(key)) console.error(`  ↳ same title also used by ${seenTitles.get(key)}`);
    seenTitles.set(key, route);
  } else {
    assert(false, `Page title is statically declared for ${route}`);
  }
  if (description) {
    const key = description.trim().toLowerCase();
    assert(!seenDescriptions.has(key), `Unique meta description for ${route}`);
    if (seenDescriptions.has(key)) console.error(`  ↳ same description also used by ${seenDescriptions.get(key)}`);
    seenDescriptions.set(key, route);
  } else {
    assert(false, `Meta description is statically declared for ${route}`);
  }
}

const docsRoute = read('app/docs/[...slug]/page.tsx');
assert(docsRoute.includes('generateStaticParams'), 'Documentation articles are statically generated');
assert(docsRoute.includes('createPageMetadata'), 'Documentation articles use page-specific metadata');
assert(docsRoute.includes('path: `/docs/${slug}`'), 'Documentation article canonical uses its own slug');
assert(docsRoute.includes("robots: { index: false, follow: false }"), 'Unknown documentation routes are excluded from indexing');

const sitemapRoutes = [
  '/', '/features', '/architecture', '/security', '/docs',
  '/cli', '/download', '/changelog', '/roadmap', '/community', '/about',
  ...uniqueSlugs.map((slug) => `/docs/${slug}`),
];
const duplicateSitemapRoutes = sitemapRoutes.filter((route, index) => sitemapRoutes.indexOf(route) !== index);
assert(duplicateSitemapRoutes.length === 0, 'Sitemap route manifest contains no duplicate paths');
for (const route of sitemapRoutes) {
  const url = route === '/' ? canonicalBase : new URL(route.slice(1), canonicalBase).toString();
  assert(sitemapSource.includes(url), `Sitemap source contains canonical route ${url}`);
}

// Check canonical URL builder logic has a root special-case to avoid malformed root URLs.
assert(seoSource.includes("if (path === '/') return PRODUCT.canonicalUrl"), 'Homepage canonical resolves to the site root');
assert(seoSource.includes('new URL(relativePath, PRODUCT.canonicalUrl)'), 'Non-root canonicals resolve against the canonical origin');

// Final summary.
console.log('\n' + '='.repeat(50));
if (errorCount === 0) {
  console.log('✅ ALL AUDIT INVARIANTS PASSED! Zero errors found.');
  process.exit(0);
}
console.error(`❌ VALIDATION FAILED with ${errorCount} error(s).`);
process.exit(1);
