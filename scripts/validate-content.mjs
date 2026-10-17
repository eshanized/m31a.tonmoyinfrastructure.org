#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
let failures = 0;

function check(condition, message) {
  if (condition) console.log(`  PASS ${message}`);
  else {
    console.error(`  FAIL ${message}`);
    failures += 1;
  }
}
function read(file) {
  const filename = path.join(root, file);
  return fs.existsSync(filename) ? fs.readFileSync(filename, 'utf8') : '';
}

console.log('M31A website integrity and SEO checks\n');

const requiredRoutes = [
  'app/page.tsx', 'app/download/page.tsx', 'app/features/page.tsx',
  'app/architecture/page.tsx', 'app/security/page.tsx', 'app/docs/page.tsx',
  'app/docs/[...slug]/page.tsx', 'app/cli/page.tsx', 'app/changelog/page.tsx',
  'app/roadmap/page.tsx', 'app/community/page.tsx', 'app/about/page.tsx',
  'app/not-found.tsx', 'app/layout.tsx', 'app/sitemap.ts', 'app/robots.ts',
];
for (const file of requiredRoutes) check(fs.existsSync(path.join(root, file)), `route file exists: ${file}`);

const homepage = read('app/page.tsx');
const cli = read('app/cli/page.tsx');
const retired = [
  'components/home/hero-terminal.tsx',
  'components/home/product-workflow.tsx',
  'components/home/repository-capabilities.tsx',
  'components/home/terminal-native.tsx',
  'components/home/cli-showcase.tsx',
  'components/site/signature-visual.tsx',
];
for (const file of retired) check(!fs.existsSync(path.join(root, file)), `retired simulated UI removed: ${file}`);
check(!/HeroTerminal|ProductWorkflow|RepositoryCapabilities|TerminalNative/.test(homepage), 'homepage does not import simulated runtime UI');
check(!cli.includes('CliShowcase'), 'CLI reference does not import simulated output');
check(fs.existsSync(path.join(root, 'public/favicon.svg')), 'favicon asset exists');
check(fs.existsSync(path.join(root, 'public/m31a-logo.svg')), 'logo asset exists');

const product = read('lib/m31a/product.ts');
check(product.includes("version: '0.1.9'"), 'product version is 0.1.9');
check(product.includes("canonicalUrl: 'https://m31a.tonmoyinfrastructure.org/'"), 'canonical origin is the production HTTPS origin');
check(product.includes("repositoryUrl: 'https://github.com/eshanized/M31A'"), 'canonical repository URL is correct');
check(product.includes("rustVersion: '1.85+'"), 'minimum Rust version is documented');
check(product.includes("edition: '2024'"), 'Rust edition is documented');
check(product.includes("licenses: ['MIT']"), 'runtime license is MIT');
check(product.includes("canonicalProvider: 'NVIDIA NIM (nvidia_nim)'"), 'canonical model provider is NVIDIA NIM');
check(product.includes("canonicalModelId: 'nvidia/nemotron-3-ultra-550b-a55b'"), 'canonical model ID is documented');
check(product.includes("canonicalProviderEndpoint: 'https://integrate.api.nvidia.com/v1'"), 'canonical provider endpoint is documented');
check(product.includes("targetTriple: 'x86_64-unknown-linux-gnu'") && product.includes("classification: 'SUPPORTED'"), 'Linux x86_64 support qualification exists');
check(product.includes("os: 'macOS'") && product.includes("classification: 'INTEGRATED'"), 'macOS integration qualification exists');
check(product.includes("classification: 'COMPILE-CHECKED'"), 'compile-checked platform classification exists');

const toolIds = [...product.matchAll(/id:\s*'([a-z_]+)'/g)].map((m) => m[1]);
check(new Set(toolIds).size >= 28, `at least 28 unique tools are defined (found ${new Set(toolIds).size})`);
const commandIds = [...product.matchAll(/command:\s*'([^']+)'/g)];
check(commandIds.length >= 18, `at least 18 CLI command definitions exist (found ${commandIds.length})`);

const docsContent = read('lib/docs/content.tsx');
const allSlugs = [...product.matchAll(/slug:\s*'([a-z0-9-]+)'/g)].map((m) => m[1]);
const slugs = [...new Set(allSlugs)];
check(slugs.length === 19, `exactly 19 documentation slugs are defined (found ${slugs.length})`);
check(slugs.length === allSlugs.length, 'documentation manifest slugs are unique');
for (const slug of slugs) check(docsContent.includes(`case '${slug}':`), `documentation article is mapped: ${slug}`);

const nav = read('lib/m31a/nav.ts');
check(!nav.includes('LICENSE-MIT'), 'no stale LICENSE-MIT URL remains in navigation');
check(!nav.includes('LICENSE-APACHE'), 'no stale LICENSE-APACHE URL remains in navigation');
check(nav.includes('/blob/master/LICENSE'), 'navigation points to LICENSE');
check(nav.includes('/blob/master/CONTRIBUTING.md'), 'navigation points to CONTRIBUTING.md');
check(nav.includes('/blob/master/SECURITY.md'), 'navigation points to SECURITY.md');

const seo = read('lib/m31a/seo.ts');
const sitemap = read('app/sitemap.ts');
const robots = read('app/robots.ts');
check(sitemap.includes('PRODUCT.canonicalUrl'), 'sitemap uses the canonical base URL');
check(sitemap.includes('DOCS.map'), 'sitemap includes documentation entries');
check(seo.includes('alternates:') && seo.includes('canonical'), 'metadata helper emits canonical links');
check(seo.includes('openGraph:') && seo.includes('twitter:'), 'metadata helper emits social metadata');
check(robots.includes("allow: '/'"), 'robots.txt permits public crawling');
check(robots.includes('sitemap.xml'), 'robots.txt points to sitemap');
check(robots.includes('PRODUCT.canonicalUrl'), 'robots.txt sitemap uses the canonical host');

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

const titlePaths = new Map();
const descriptionPaths = new Map();
const metaPaths = new Set();

for (const [file, route] of indexableRoutes) {
  const source = read(file);
  check(source.includes('createPageMetadata'), `${route} uses the shared metadata helper`);
  check(source.includes(`path: "${route}"`), `${route} declares its own canonical path`);
  check(!metaPaths.has(route), `${route} is unique in the static route manifest`);
  metaPaths.add(route);

  const metadata = source.match(/createPageMetadata\(\s*\{([\s\S]*?)\}\s*\)/)?.[1] ?? '';
  const title = metadata.match(/title:\s*"([^"]+)"/)?.[1];
  const description = metadata.match(/description:\s*"([^"]+)"/)?.[1];
  check(Boolean(title), `${route} has a title declaration`);
  check(Boolean(description), `${route} has a description declaration`);

  if (title) {
    const key = title.trim().toLowerCase();
    check(!titlePaths.has(key), `${route} title is unique`);
    if (titlePaths.has(key)) console.error(`    also used at ${titlePaths.get(key)}`);
    titlePaths.set(key, route);
  }
  if (description) {
    const key = description.trim().toLowerCase();
    check(!descriptionPaths.has(key), `${route} description is unique`);
    if (descriptionPaths.has(key)) console.error(`    also used at ${descriptionPaths.get(key)}`);
    descriptionPaths.set(key, route);
  }
}

const docPage = read('app/docs/[...slug]/page.tsx');
check(docPage.includes('generateStaticParams'), 'documentation routes are statically generated');
check(docPage.includes('createPageMetadata'), 'documentation routes have page-specific metadata');
check(docPage.includes('path: `/docs/${slug}`'), 'documentation canonical URLs contain their own slug');
check(docPage.includes("robots: { index: false, follow: false }"), 'unknown doc slugs are marked noindex');

const expectedStaticRoutes = [
  '/', '/features', '/architecture', '/security', '/docs',
  '/cli', '/download', '/changelog', '/roadmap', '/community', '/about',
];
const staticRouteBlock = sitemap.match(/const staticRoutes = \[([\\s\\S]*?)\];/)?.[1] ?? '';
const declaredStaticRoutes = [...staticRouteBlock.matchAll(/'([^']+)'/g)].map((match) => match[1]);
for (const route of expectedStaticRoutes) {
  check(declaredStaticRoutes.includes(route), `sitemap includes static route ${route}`);
}
check(
  sitemap.includes('url: toCanonicalUrl(path)'),
  'sitemap resolves static paths against the canonical origin'
);
check(
  sitemap.includes('url: toCanonicalUrl(`/docs/${doc.slug}`)'),
  'sitemap resolves each docs manifest slug against the canonical origin'
);
check(
  sitemap.includes('...DOCS.map((doc) => ({'),
  'sitemap enumerates the documentation manifest instead of hard-coded article URLs'
);

check(seo.includes("if (path === '/') return PRODUCT.canonicalUrl"), 'homepage canonical resolves to root');
check(seo.includes('new URL(relativePath, PRODUCT.canonicalUrl)'), 'non-root canonicals use the canonical origin');

console.log('\n' + '-'.repeat(52));
if (failures === 0) {
  console.log('All website integrity and SEO checks passed.');
  process.exit(0);
}
console.error(`${failures} validation check(s) failed.`);
process.exit(1);
