# M31A Organic Discovery & SEO Operations Manual

**Authoritative Domain:** `https://m31a.tonmoyinfrastructure.org`  
**Site Repository:** `https://github.com/eshanized/m31a.tonmoyinfrastructure.org`  
**Runtime Repository:** `https://github.com/eshanized/M31A`  
**Last Verified:** October 2026  

---

## 1. Google Search Console Setup & Verification

The repository contains an existing HTML verification file in `public/google9ff15fb83f6fb1b9.html`.

### Verification Steps
1. Navigate to [Google Search Console](https://search.google.com/search-console).
2. Add Property: Choose **URL prefix** (`https://m31a.tonmoyinfrastructure.org/`) or **Domain** (`tonmoyinfrastructure.org`).
3. If using URL prefix, select **HTML file verification**. The deployed site serves `https://m31a.tonmoyinfrastructure.org/google9ff15fb83f6fb1b9.html` with:
   ```html
   google-site-verification: google9ff15fb83f6fb1b9.html
   ```
4. Click **Verify**.
5. Alternatively, add a DNS TXT record at your DNS registrar for `m31a.tonmoyinfrastructure.org`.

### Sitemap Submission
1. In Search Console, select **Sitemaps** from the left navigation.
2. Enter `sitemap.xml` under "Add a new sitemap".
3. Verify status returns **Success** and confirms discovery of all 37 routes (11 core pages, 7 discovery landing pages, and 19 documentation articles).

---

## 2. Priority URL Inspection & Indexing-Request Workflow

Search engines take time to discover newly deployed static pages. Use the **URL Inspection** tool in Search Console to accelerate discovery for the highest-intent pages:

### Priority Queue
Submit these URLs in order via **URL Inspection → Request Indexing**:
1. `https://m31a.tonmoyinfrastructure.org/` (Homepage)
2. `https://m31a.tonmoyinfrastructure.org/free-ai-coding-agent` (High commercial intent)
3. `https://m31a.tonmoyinfrastructure.org/alternatives` (Hub directory)
4. `https://m31a.tonmoyinfrastructure.org/alternatives/cursor` (Direct comparison)
5. `https://m31a.tonmoyinfrastructure.org/alternatives/claude-code` (Terminal agent comparison)
6. `https://m31a.tonmoyinfrastructure.org/alternatives/opencode` (Open-source comparison)
7. `https://m31a.tonmoyinfrastructure.org/ai-coding-agent-linux` (Platform qualification intent)
8. `https://m31a.tonmoyinfrastructure.org/terminal-coding-agent` (TUI/CLI intent)

### Inspection Checklist
- **Coverage Status:** Must report "URL is on Google" or "Discovered – currently not indexed".
- **User-declared Canonical:** Must match `https://m31a.tonmoyinfrastructure.org/<path>`.
- **Google-selected Canonical:** Must match user-declared canonical (self-referencing).
- **Mobile Usability:** Verified green with no text-too-small or viewport issues.

---

## 3. Baseline Metrics & Tracking Framework

Do not claim artificial search traffic improvements without empirical Search Console metrics. Record baseline figures during the first 30 days post-indexing:

| Metric | Baseline Target Window | Measurement Source |
| :--- | :--- | :--- |
| **Total Impressions** | Day 1–30 Post-Index | GSC Performance (Search Results) |
| **Total Clicks** | Day 1–30 Post-Index | GSC Performance (Search Results) |
| **Average CTR** | Day 1–30 Post-Index | GSC Performance (Target: > 3.0% on brand/comparison) |
| **Average Position** | Day 1–30 Post-Index | GSC Queries Breakdown |

### Key Query Groups to Monitor
* **Brand Queries:** `m31a`, `m31 autonomous`, `tonmoy infrastructure m31a`
* **Category Queries:** `open source AI coding agent`, `terminal coding agent`, `linux ai coding assistant`
* **Alternative Queries:** `cursor alternative terminal`, `claude code open source alternative`, `opencode alternative`
* **Cost Queries:** `free ai coding agent`, `free cursor alternative`

---

## 4. Conversion & Adoption Measurement

Track real developer adoption through verifiable repository and installation metrics:

| Conversion Goal | Measurement Channel | Verification Method |
| :--- | :--- | :--- |
| **GitHub Stars** | `https://github.com/eshanized/M31A` | GitHub API stargazers counter |
| **Install Script Execution** | Raw GitHub raw.githubusercontent.com requests | Cloudflare / GitHub traffic insights |
| **Cargo Installs** | `cargo install m31a` | Crates.io download counter |
| **Documentation Depth** | `/docs/*` session duration & topic navigation | Server access logs / privacy-respecting telemetry |

---

## 5. Monthly Fact-Checking & Maintenance Cadence

Competitor features, pricing models, and LLM provider token costs evolve quickly. Every 30 days, execute this review checklist:

### Competitor Audit Checklist
- [ ] **Cursor (Anysphere):** Check `https://www.cursor.com/pricing` for changes to Pro/Business plans or fast request quotas.
- [ ] **Claude Code (Anthropic):** Check `https://claude.ai` and Anthropic docs for new CLI commands, pricing models, or model tiers.
- [ ] **OpenCode (Anomaly):** Check `https://github.com/anomalyco/opencode` for new releases, language support, or license changes.
- [ ] **NVIDIA NIM:** Verify current token pricing for `nvidia/nemotron-3-ultra-550b-a55b` and developer trial credit allocations.
- [ ] **Platform Qualification:** Review `PLATFORMS_MATRIX` in `lib/m31a/product.ts` against newly completed CI test runners.

### Content Lifecycle: Improve, Consolidate, or Prune
* **Improve:** Pages with high impressions but low CTR (< 2.0%) need meta title and description rewrites.
* **Consolidate:** If two pages begin competing for the exact same query in GSC (cannibalization), merge them and issue a 301 redirect.
* **Prune:** If a competitor product is discontinued or radically changes its model, archive or redirect the route.

---

## 6. Automated Validation in CI/CD

Before merging any commit that changes routes, documentation, or metadata, ensure these automated validation suites pass:

```bash
# 1. Content and invariant checks
npm run content:validate

# 2. TypeScript compilation
npm run typecheck

# 3. Code formatting & lint
npm run lint

# 4. Next.js static HTML export
npm run build

# 5. Automated SEO, canonical, sitemap & structured data verification
npm run seo:validate
```
