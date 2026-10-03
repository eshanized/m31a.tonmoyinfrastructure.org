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
  const fullPath = path.join(rootDir, route);
  assert(fs.existsSync(fullPath), `Route file exists: ${route}`);
}

// 2. Read lib/m31a/product.ts
console.log('\nValidating lib/m31a/product.ts invariants:');
const productFile = fs.readFileSync(path.join(rootDir, 'lib/m31a/product.ts'), 'utf-8');

// Version Check
assert(productFile.includes("version: '0.1.1'"), "PRODUCT version is 0.1.1");
assert(productFile.includes("canonicalUrl: 'https://m31a.tonmoyinfrastructure.org/'"), "Canonical URL is https://m31a.tonmoyinfrastructure.org/");
assert(productFile.includes("repositoryUrl: 'https://github.com/eshanized/M31A'"), "Repository URL matches authoritative repo");
assert(productFile.includes("rustVersion: '1.85+'"), "Rust version is 1.85+");
assert(productFile.includes("edition: '2024'"), "Rust edition is 2024");
assert(productFile.includes("'MIT'") && productFile.includes("'Apache-2.0'"), "Dual licensed MIT / Apache-2.0");

// Provider Invariant
assert(productFile.includes("canonicalProvider: 'NVIDIA NIM (nvidia_nim)'"), "Production canonical provider is NVIDIA NIM");
assert(productFile.includes("canonicalModelId: 'nvidia/nemotron-3-ultra-550b-a55b'"), "Canonical model ID matches production Nemotron");
assert(productFile.includes("canonicalProviderEndpoint: 'https://integrate.api.nvidia.com/v1'"), "Provider endpoint is NVIDIA integrate API");

// Platform Support Matrix Invariants
console.log('\nValidating platform qualification matrix:');
assert(productFile.includes("os: 'Linux'") && productFile.includes("classification: 'SUPPORTED'"), "Linux x86_64 is classified SUPPORTED");
assert(productFile.includes("os: 'macOS'") && productFile.includes("classification: 'CONDITIONALLY SUPPORTED'"), "macOS is classified CONDITIONALLY SUPPORTED");
assert(productFile.includes("classification: 'COMPILE-ONLY'"), "COMPILE-ONLY classifications present for other targets");

// 28 Core Tools Catalog
console.log('\nValidating 28 core tools catalog:');
const toolMatches = productFile.match(/id:\s*'([a-z_]+)'/g) || [];
const toolIds = toolMatches.map(m => m.replace(/id:\s*'|'/g, ''));
const uniqueToolIds = new Set(toolIds);
assert(uniqueToolIds.size >= 28, `Found at least 28 unique tool definitions (found ${uniqueToolIds.size})`);

// 18 CLI Subcommands
console.log('\nValidating CLI subcommands:');
const cliDefMatches = productFile.match(/command:\s*'([^']+)'/g) || [];
assert(cliDefMatches.length >= 18, `Found at least 18 CLI command definitions (found ${cliDefMatches.length})`);

// 19 Documentation Topics
console.log('\nValidating 19 Documentation topics & content mapping:');
const contentFile = fs.readFileSync(path.join(rootDir, 'lib/docs/content.tsx'), 'utf-8');

const slugMatches = [...productFile.matchAll(/slug:\s*'([a-z0-9-]+)'/g)].map(m => m[1]);
const uniqueSlugs = [...new Set(slugMatches)];
assert(uniqueSlugs.length === 19, `Exact 19 documentation slugs defined in product.ts (found ${uniqueSlugs.length})`);

for (const slug of uniqueSlugs) {
  assert(contentFile.includes(`case '${slug}':`), `lib/docs/content.tsx provides article for slug: ${slug}`);
}

// 3. Navigation & Footer Links
console.log('\nValidating navigation and footer targets:');
const navFile = fs.readFileSync(path.join(rootDir, 'lib/m31a/nav.ts'), 'utf-8');
assert(!navFile.includes('LICENSE-MIT'), "No dead links to LICENSE-MIT (uses LICENSE)");
assert(!navFile.includes('LICENSE-APACHE'), "No dead links to LICENSE-APACHE (uses LICENSE)");
assert(navFile.includes('/blob/master/LICENSE'), "Nav correctly points to /blob/master/LICENSE");
assert(navFile.includes('/blob/master/CONTRIBUTING.md'), "Nav correctly points to /blob/master/CONTRIBUTING.md");
assert(navFile.includes('/blob/master/SECURITY.md'), "Nav correctly points to /blob/master/SECURITY.md");

// 4. Check Sitemap Consistency
console.log('\nValidating sitemap.ts:');
const sitemapFile = fs.readFileSync(path.join(rootDir, 'app/sitemap.ts'), 'utf-8');
assert(sitemapFile.includes('PRODUCT.canonicalUrl'), "Sitemap uses canonicalUrl");
assert(sitemapFile.includes('DOCS.map'), "Sitemap dynamically includes all documentation articles");

// Final Summary
console.log('\n' + '='.repeat(50));
if (errorCount === 0) {
  console.log('✅ ALL AUDIT INVARIANTS PASSED! Zero errors found.');
  process.exit(0);
} else {
  console.error(`❌ VALIDATION FAILED with ${errorCount} error(s).`);
  process.exit(1);
}
