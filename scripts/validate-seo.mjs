#!/usr/bin/env node

/**
 * M31A Automated SEO, Metadata, Sitemap & HTML Integrity Test Suite
 * 
 * Verifies:
 * 1. All indexable routes have unique, non-empty titles.
 * 2. All indexable routes have non-empty, compelling descriptions.
 * 3. All canonical URLs use https://m31a.tonmoyinfrastructure.org and are self-referencing.
 * 4. All sitemap.xml entries resolve to real exported HTML pages in out/.
 * 5. All new search-intent landing routes exist in out/ and in sitemap.xml.
 * 6. Internal links across all pages resolve without broken 404 targets.
 * 7. Structured data (JSON-LD) is valid JSON and adheres to Schema.org standards.
 * 8. Competitor comparison pages include verified dates and official source citations.
 * 9. No unsupported claims of free unlimited inference or unverified platforms.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const outDir = path.join(rootDir, 'out');

console.log('🔍 Starting M31A Automated SEO & Metadata Verification Suite...\n');

let errorCount = 0;
let passedCount = 0;

function assert(condition, message) {
  if (!condition) {
    console.error(`❌ FAIL: ${message}`);
    errorCount++;
  } else {
    console.log(`  ✓ ${message}`);
    passedCount++;
  }
}

// 0. Ensure out directory exists
assert(fs.existsSync(outDir), 'Static export directory "out" exists (run "npm run build" first)');
if (errorCount > 0) {
  process.exit(1);
}

// Helper: Recursively walk out directory to collect all HTML files
function getHtmlFiles(dir, fileList = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== '_next') {
        getHtmlFiles(fullPath, fileList);
      }
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

const htmlFiles = getHtmlFiles(outDir);
console.log(`Discovered ${htmlFiles.length} exported HTML pages in out/.\n`);

// Data structures for cross-page checks
const pageMetadata = new Map(); // relativeRoute -> { title, description, canonical, jsonLd, text, links }
const titleToRoute = new Map();

// Helper: Map disk file path to route pathname
function filePathToRoute(filePath) {
  const rel = path.relative(outDir, filePath);
  if (rel === 'index.html') return '/';
  if (rel === '404.html' || rel === '_not-found.html') return '/404';
  if (rel.endsWith('/index.html')) return '/' + rel.slice(0, -'/index.html'.length);
  if (rel.endsWith('.html')) return '/' + rel.slice(0, -'.html'.length);
  return '/' + rel;
}

console.log('1. Parsing and Validating Page Metadata:');

for (const filePath of htmlFiles) {
  const route = filePathToRoute(filePath);
  const html = fs.readFileSync(filePath, 'utf-8');

  // Skip 404 / google verification from indexing tests
  if (route === '/404' || route.includes('google')) {
    continue;
  }

  // Extract <title>
  const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : null;

  // Extract <meta name="description">
  const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["'][^>]*>/i)
    || html.match(/<meta[^>]*content=["']([^"']*)["'][^>]*name=["']description["'][^>]*>/i);
  const description = descMatch ? descMatch[1].trim() : null;

  // Extract <link rel="canonical">
  const canonMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["'][^>]*>/i)
    || html.match(/<link[^>]*href=["']([^"']*)["'][^>]*rel=["']canonical["'][^>]*>/i);
  const canonical = canonMatch ? canonMatch[1].trim() : null;

  // Extract Open Graph
  const ogTitleMatch = html.match(/<meta[^>]*property=["']og:title["'][^>]*content=["']([^"']*)["'][^>]*>/i);
  const ogUrlMatch = html.match(/<meta[^>]*property=["']og:url["'][^>]*content=["']([^"']*)["'][^>]*>/i);

  // Extract JSON-LD scripts
  const jsonLdBlocks = [];
  const scriptRegex = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let match;
  while ((match = scriptRegex.exec(html)) !== null) {
    try {
      const parsed = JSON.parse(match[1]);
      jsonLdBlocks.push(parsed);
    } catch (e) {
      assert(false, `Invalid JSON-LD on ${route}: ${e.message}`);
    }
  }

  // Extract all <a href="..."> links
  const links = [];
  const linkRegex = /<a[^>]*href=["']([^"']*)["'][^>]*>/gi;
  let lMatch;
  while ((lMatch = linkRegex.exec(html)) !== null) {
    links.push(lMatch[1]);
  }

  pageMetadata.set(route, {
    filePath,
    title,
    description,
    canonical,
    ogTitle: ogTitleMatch ? ogTitleMatch[1] : null,
    ogUrl: ogUrlMatch ? ogUrlMatch[1] : null,
    jsonLdBlocks,
    links,
    html,
  });

  // Verify basic presence
  assert(title && title.length > 5, `${route} has valid title ("${title}")`);
  assert(description && description.length > 20, `${route} has substantive meta description`);
  assert(canonical && canonical.startsWith('https://m31a.tonmoyinfrastructure.org'), `${route} canonical uses production HTTPS domain`);

  // Verify self-referencing canonical
  const expectedCanonical = route === '/'
    ? 'https://m31a.tonmoyinfrastructure.org'
    : `https://m31a.tonmoyinfrastructure.org${route}`;
  assert(canonical === expectedCanonical, `${route} self-referencing canonical matches expected: ${expectedCanonical} (got ${canonical})`);

  // Verify unique title
  if (title) {
    if (titleToRoute.has(title)) {
      assert(false, `Duplicate title "${title}" found on ${route} and ${titleToRoute.get(title)}`);
    } else {
      titleToRoute.set(title, route);
    }
  }
}

// 2. Validate Sitemap.xml Integrity
console.log('\n2. Validating sitemap.xml Consistency:');
const sitemapPath = path.join(outDir, 'sitemap.xml');
assert(fs.existsSync(sitemapPath), 'sitemap.xml exists in out/');
const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');

const sitemapUrlMatches = [...sitemapContent.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
assert(sitemapUrlMatches.length >= 25, `sitemap.xml contains at least 25 URLs (found ${sitemapUrlMatches.length})`);

for (const url of sitemapUrlMatches) {
  assert(url.startsWith('https://m31a.tonmoyinfrastructure.org'), `Sitemap URL uses HTTPS domain: ${url}`);
  const urlObj = new URL(url);
  const pathname = urlObj.pathname.replace(/\/$/, '') || '/';
  
  // Verify matching HTML exists on disk
  const matchedRoute = pageMetadata.has(pathname);
  assert(matchedRoute, `Sitemap URL ${url} corresponds to exported HTML route (${pathname})`);
}

// 3. Verify New Search-Intent Landing Routes Specifically
console.log('\n3. Verifying Required Search-Intent Landing Routes:');
const requiredLandingRoutes = [
  '/free-ai-coding-agent',
  '/alternatives',
  '/alternatives/cursor',
  '/alternatives/claude-code',
  '/alternatives/opencode',
  '/ai-coding-agent-linux',
  '/terminal-coding-agent',
];

for (const r of requiredLandingRoutes) {
  assert(pageMetadata.has(r), `Landing route exported to disk: ${r}`);
  const expectedUrl = `https://m31a.tonmoyinfrastructure.org${r}`;
  assert(sitemapContent.includes(expectedUrl), `Landing route registered in sitemap.xml: ${r}`);
}

// 4. Competitor Comparison Verification Invariants
console.log('\n4. Verifying Comparison Page Invariants & Sources:');
const comparisonChecks = [
  {
    route: '/alternatives/cursor',
    mustInclude: ['October 2026', 'cursor.com', 'Anysphere', 'VS Code', 'Electron', 'cgroups'],
    mustNotInclude: ['drop-in replacement for any GUI', 'free unlimited inference'],
  },
  {
    route: '/alternatives/claude-code',
    mustInclude: ['October 2026', 'claude.ai', 'Anthropic', 'Node.js', 'policy gate', 'SQLite'],
    mustNotInclude: ['free unlimited Claude tokens'],
  },
  {
    route: '/alternatives/opencode',
    mustInclude: ['October 2026', 'opencode.ai', 'Anomaly', 'MIT License', 'LSP', 'NVIDIA NIM'],
    mustNotInclude: ['free unmetered GPU inference'],
  },
  {
    route: '/free-ai-coding-agent',
    mustInclude: ['MIT', 'NVIDIA NIM', 'budget-tokens', 'budget-cost', 'compute'],
    mustNotInclude: ['guaranteed free unlimited inference', 'zero cost tokens forever'],
  },
];

for (const check of comparisonChecks) {
  const meta = pageMetadata.get(check.route);
  if (!meta) continue;

  for (const str of check.mustInclude) {
    assert(meta.html.includes(str), `${check.route} contains required fact/source "${str}"`);
  }
  for (const forbidden of check.mustNotInclude) {
    assert(!meta.html.toLowerCase().includes(forbidden.toLowerCase()), `${check.route} does not contain forbidden claim "${forbidden}"`);
  }
}

// 5. Internal Links Integrity (Check for 404s)
console.log('\n5. Verifying Internal Links Crawlability (Zero Broken Links):');
const allKnownRoutes = new Set(pageMetadata.keys());
allKnownRoutes.add('/#product-demo');
allKnownRoutes.add('/#install');

let checkedLinks = 0;
let brokenLinks = 0;

for (const [pageRoute, data] of pageMetadata.entries()) {
  for (const rawLink of data.links) {
    // Check internal links only
    if (rawLink.startsWith('/') && !rawLink.startsWith('//')) {
      checkedLinks++;
      const [linkPath, hash] = rawLink.split('#');
      const cleanPath = linkPath.replace(/\/$/, '') || '/';
      
      // Ignore static assets like images, js, favicon
      if (cleanPath.startsWith('/_next') || cleanPath.endsWith('.png') || cleanPath.endsWith('.svg') || cleanPath.endsWith('.ico')) {
        continue;
      }

      if (!allKnownRoutes.has(cleanPath)) {
        console.error(`❌ Broken link on ${pageRoute} -> "${rawLink}" (target "${cleanPath}" does not exist)`);
        brokenLinks++;
        errorCount++;
      }
    }
  }
}
assert(brokenLinks === 0, `All internal relative links resolve successfully (checked ${checkedLinks} links, ${brokenLinks} broken)`);

// 6. Structured Data Verification
console.log('\n6. Verifying Schema.org Structured Data:');
let breadcrumbCount = 0;
let softwareAppCount = 0;
let techArticleCount = 0;

for (const [route, data] of pageMetadata.entries()) {
  for (const block of data.jsonLdBlocks) {
    const entities = Array.isArray(block['@graph']) ? block['@graph'] : [block];
    for (const entity of entities) {
      const type = entity['@type'];
      if (type === 'BreadcrumbList') {
        breadcrumbCount++;
        assert(Array.isArray(entity.itemListElement), `${route} BreadcrumbList contains itemListElement array`);
      } else if (type === 'SoftwareApplication') {
        softwareAppCount++;
        assert(entity.operatingSystem && entity.operatingSystem.includes('Linux'), `${route} SoftwareApplication accurately specifies Linux support`);
        assert(!entity.operatingSystem.includes('Linux, macOS, Windows'), `${route} SoftwareApplication does NOT falsely claim unverified Windows support`);
      } else if (type === 'TechArticle') {
        techArticleCount++;
        assert(entity.headline && entity.headline.length > 5, `${route} TechArticle contains valid headline`);
        assert(entity.datePublished, `${route} TechArticle contains datePublished`);
      }
    }
  }
}

assert(breadcrumbCount >= 20, `Found at least 20 BreadcrumbList schemas across pages (found ${breadcrumbCount})`);
assert(softwareAppCount >= 1, `Found valid SoftwareApplication schema (found ${softwareAppCount})`);
assert(techArticleCount >= 10, `Found at least 10 TechArticle schemas across articles (found ${techArticleCount})`);

// 7. Final Summary
console.log('\n' + '='.repeat(60));
if (errorCount === 0) {
  console.log(`✅ SEO VALIDATION PASSED! ${passedCount} assertions succeeded. Zero errors.`);
  process.exit(0);
} else {
  console.error(`❌ SEO VALIDATION FAILED with ${errorCount} error(s). (${passedCount} passed)`);
  process.exit(1);
}
