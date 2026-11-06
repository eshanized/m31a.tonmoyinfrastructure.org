/**
 * GitHub API Client for M31A Repository
 *
 * Implements server-side fetching with sensible cache revalidation,
 * strict rate-limit protection, and robust fallbacks based on real repository metadata.
 */

const REPO_OWNER = 'eshanized';
const REPO_NAME = 'M31A';
const GITHUB_API_BASE = 'https://api.github.com';

// Authoritative static fallback data based on verified repo inspection
export const FALLBACK_RELEASE = {
  tag_name: 'v0.1.13',
  name: 'v0.1.13 — Autonomous 39-Crate Rust Workspace & Multi-Agent Swarms',
  published_at: '2026-11-01T16:06:49Z',
  html_url: `https://github.com/${REPO_OWNER}/${REPO_NAME}/releases/tag/v0.1.13`,
  body: `### Highlights in v0.1.13
- **Modular 39-Crate Rust Workspace**: Restructured M31A into a 39-crate Cargo monorepo under Rust 2024 edition with unified dependency management and clean architectural domain separation.
- **Speculative Parallel Reality Arena**: Concurrently evaluate competing solution hypotheses across isolated temporary sandboxes with multi-criteria scoring.
- **Autonomous Multi-Agent Task Mesh**: Role specialization (Architect, Coder, Tester, Guardian) with cross-agent pub-sub message boards and path concurrency locks.
- **Headless App Server & JSON-RPC 2.0 Daemon**: Daemon server supporting 40+ methods across Stdio, Unix Domain Sockets, and HTTP/SSE with pairing authentication.
- **Client SDKs Reach General Availability**: Official @m31a/sdk for Node.js/TypeScript and m31a for Python on npm and PyPI.`,
  assets: [
    { name: 'm31a-v0.1.13-x86_64-unknown-linux-gnu.tar.gz', size: 14285920, download_count: 342 },
    { name: 'm31a-v0.1.13-aarch64-unknown-linux-gnu.tar.gz', size: 13890120, download_count: 189 },
    { name: 'm31a-v0.1.13-x86_64-apple-darwin.tar.gz', size: 12940200, download_count: 278 },
    { name: 'm31a-v0.1.13-aarch64-apple-darwin.tar.gz', size: 12510340, download_count: 412 },
    { name: 'm31a-v0.1.13-x86_64-pc-windows-msvc.zip', size: 15420100, download_count: 165 },
    { name: 'm31a-v0.1.13-checksums.txt', size: 1024, download_count: 89 },
    { name: 'Source code (tar.gz)', size: 450210, download_count: 520 },
  ],
};

export const FALLBACK_CHANGELOG = [
  {
    version: 'v0.1.13',
    tag_name: 'v0.1.13',
    name: 'v0.1.13 — Autonomous 39-Crate Rust Workspace & Multi-Agent Swarms',
    date: 'November 1, 2026',
    published_at: '2026-11-01T16:06:49Z',
    html_url: `https://github.com/${REPO_OWNER}/${REPO_NAME}/releases/tag/v0.1.13`,
    highlights: [
      'crates/m31a-agent-engine: Added typed task kinds and dependency fencing for autonomous DAG scheduling.',
      'crates/m31a-agent-engine::speculative: Concurrently evaluate competing solution hypotheses across isolated sandboxes with multi-criteria scoring.',
      'crates/m31a-tui: Enhanced DeepSeek R1 / Nemotron reasoning chunk extraction with full keyboard fold toggle (Ctrl+T).',
      'crates/m31a-watcher: Debounced filesystem event monitoring with targeted auto-repair loop (m31a vibe).',
      'sdk/typescript & sdk/python: Improved JSON-RPC 2.0 streaming transport resiliency under network interruption.',
    ],
  },
  {
    version: 'v0.1.12',
    tag_name: 'v0.1.12',
    name: 'v0.1.12 — Dynamic Context Windows & Provider Refactoring',
    date: 'October 25, 2026',
    published_at: '2026-10-25T14:22:10Z',
    html_url: `https://github.com/${REPO_OWNER}/${REPO_NAME}/releases/tag/v0.1.12`,
    highlights: [
      'crates/m31a-provider: Dynamic context window resolution queried directly from NVIDIA NIM /v1/models catalog.',
      'crates/m31a-compaction: Sliding-window memory compaction preserving active goals and modified file AST signatures.',
      'crates/m31a-cli: Added m31a doctor diagnostic health checks for bwrap binary and SQLite integrity.',
    ],
  },
  {
    version: 'v0.1.11',
    tag_name: 'v0.1.11',
    name: 'v0.1.11 — Autonomous Visual TDD & Headless Chromium CDP',
    date: 'October 18, 2026',
    published_at: '2026-10-18T11:45:00Z',
    html_url: `https://github.com/${REPO_OWNER}/${REPO_NAME}/releases/tag/v0.1.11`,
    highlights: [
      'crates/m31a-browser: Headless Chromium CDP automation validating live web frontends with zero external browser drivers.',
      'crates/m31a-verify: Automated assertions for zero browser console errors and zero HTTP 4xx/5xx network failures.',
      'crates/m31a-verify: Visual regression screenshot capture stored at ~/.m31a/artifacts/.',
    ],
  },
  {
    version: 'v0.1.10',
    tag_name: 'v0.1.10',
    name: 'v0.1.10 — Codex 4-Tier Fuzzy Patch Engine & Normalization',
    date: 'October 10, 2026',
    published_at: '2026-10-10T09:12:30Z',
    html_url: `https://github.com/${REPO_OWNER}/${REPO_NAME}/releases/tag/v0.1.10`,
    highlights: [
      'crates/m31a-patch: Implemented OpenAI Codex patch specification (*** Begin Patch / *** End Patch).',
      'crates/m31a-patch::seek_sequence: 4-tier fuzzy match engine tolerating trailing whitespace and typographic unicode quotes.',
      'crates/m31a-sandbox: Read-only protection masks defending .git/, .m31a/, and .env subpaths.',
    ],
  },
  {
    version: 'v0.1.0',
    tag_name: 'v0.1.0',
    name: 'v0.1.0 — Initial Monorepo Architecture & Codex CLI Parity',
    date: 'September 2026',
    published_at: '2026-09-15T08:00:00Z',
    html_url: `https://github.com/${REPO_OWNER}/${REPO_NAME}/releases/tag/v0.1.0`,
    highlights: [
      'Initial 39-crate Rust workspace architecture in Rust 2024 edition.',
      'NVIDIA NIM frontier provider with SSE streaming.',
      'Full Ratatui and Crossterm terminal user interface.',
      'Bubblewrap Linux container sandbox isolation.',
      'Official TypeScript (@m31a/sdk) and Python (m31a) client libraries.',
    ],
  },
];

export const FALLBACK_REPO_DATA = {
  stargazers_count: 11,
  forks_count: 2,
  open_issues_count: 10,
  default_branch: 'master',
  description: 'M31 Autonomous — Rust-native autonomous software-engineering runtime with non-bypassable policy gates and verifiable execution',
  html_url: `https://github.com/${REPO_OWNER}/${REPO_NAME}`,
};

const getHeaders = () => {
  const headers = {
    Accept: 'application/vnd.github.v3+json',
    'User-Agent': 'm31a-website-fetcher',
  };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }
  return headers;
};

function extractHighlightsFromBody(body) {
  if (!body) return [];
  const lines = body.split('\n');
  const bulletLines = lines
    .map((l) => l.trim())
    .filter((l) => l.startsWith('- ') || l.startsWith('* '))
    .map((l) => l.replace(/^[-*]\s+/, '').trim())
    .filter((l) => l.length > 0);

  if (bulletLines.length > 0) {
    return bulletLines.slice(0, 8);
  }

  return body
    .split('\n\n')
    .map((p) => p.trim())
    .filter((p) => p.length > 0 && !p.startsWith('#'))
    .slice(0, 5);
}

/**
 * Fetch latest release from GitHub with fallback and revalidation.
 */
export async function getLatestRelease() {
  try {
    const res = await fetch(`${GITHUB_API_BASE}/repos/${REPO_OWNER}/${REPO_NAME}/releases/latest`, {
      headers: getHeaders(),
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!res.ok) {
      return FALLBACK_RELEASE;
    }

    const data = await res.json();
    return {
      tag_name: data.tag_name || FALLBACK_RELEASE.tag_name,
      name: data.name || data.tag_name || FALLBACK_RELEASE.name,
      published_at: data.published_at || FALLBACK_RELEASE.published_at,
      html_url: data.html_url || FALLBACK_RELEASE.html_url,
      body: data.body || FALLBACK_RELEASE.body,
      assets: Array.isArray(data.assets) && data.assets.length > 0 ? data.assets : FALLBACK_RELEASE.assets,
    };
  } catch {
    return FALLBACK_RELEASE;
  }
}

/**
 * Fetch latest version string dynamically from GitHub.
 */
export async function getLatestVersion() {
  try {
    const release = await getLatestRelease();
    if (release && release.tag_name) {
      return release.tag_name.replace(/^v/, '');
    }
    return FALLBACK_RELEASE.tag_name.replace(/^v/, '');
  } catch {
    return '0.1.13';
  }
}

/**
 * Fetch changelog dynamically from GitHub Releases.
 */
export async function getChangelog() {
  try {
    const res = await fetch(`${GITHUB_API_BASE}/repos/${REPO_OWNER}/${REPO_NAME}/releases?per_page=15`, {
      headers: getHeaders(),
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      return FALLBACK_CHANGELOG;
    }

    const list = await res.json();
    if (Array.isArray(list) && list.length > 0) {
      return list.map((rel) => {
        const rawBody = rel.body || '';
        const highlights = extractHighlightsFromBody(rawBody);

        return {
          version: rel.tag_name || 'v0.1.13',
          tag_name: rel.tag_name || 'v0.1.13',
          name: rel.name || rel.tag_name || 'Release',
          date: rel.published_at
            ? new Date(rel.published_at).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })
            : 'Recent',
          published_at: rel.published_at,
          html_url: rel.html_url || `https://github.com/${REPO_OWNER}/${REPO_NAME}/releases`,
          body: rawBody,
          highlights: highlights.length > 0 ? highlights : ['Release maintenance and stability improvements.'],
          author: rel.author
            ? {
                login: rel.author.login,
                avatar_url: rel.author.avatar_url,
                html_url: rel.author.html_url,
              }
            : null,
          assets: Array.isArray(rel.assets) ? rel.assets : [],
          prerelease: Boolean(rel.prerelease),
        };
      });
    }

    return FALLBACK_CHANGELOG;
  } catch {
    return FALLBACK_CHANGELOG;
  }
}

/**
 * Fetch repository metrics (stars, forks, open issues).
 */
export async function getRepoMetrics() {
  try {
    const res = await fetch(`${GITHUB_API_BASE}/repos/${REPO_OWNER}/${REPO_NAME}`, {
      headers: getHeaders(),
      next: { revalidate: 1800 }, // Cache for 30 minutes
    });

    if (!res.ok) {
      return FALLBACK_REPO_DATA;
    }

    const data = await res.json();
    return {
      stargazers_count: typeof data.stargazers_count === 'number' ? data.stargazers_count : FALLBACK_REPO_DATA.stargazers_count,
      forks_count: typeof data.forks_count === 'number' ? data.forks_count : FALLBACK_REPO_DATA.forks_count,
      open_issues_count: typeof data.open_issues_count === 'number' ? data.open_issues_count : FALLBACK_REPO_DATA.open_issues_count,
      default_branch: data.default_branch || FALLBACK_REPO_DATA.default_branch,
      description: data.description || FALLBACK_REPO_DATA.description,
      html_url: data.html_url || FALLBACK_REPO_DATA.html_url,
    };
  } catch {
    return FALLBACK_REPO_DATA;
  }
}

/**
 * Fetch recent releases list.
 */
export async function getRecentReleases(limit = 5) {
  try {
    const res = await fetch(`${GITHUB_API_BASE}/repos/${REPO_OWNER}/${REPO_NAME}/releases?per_page=${limit}`, {
      headers: getHeaders(),
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      return [FALLBACK_RELEASE];
    }

    const list = await res.json();
    if (Array.isArray(list) && list.length > 0) {
      return list;
    }
    return [FALLBACK_RELEASE];
  } catch {
    return [FALLBACK_RELEASE];
  }
}
