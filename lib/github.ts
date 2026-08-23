export interface ReleaseAsset {
  name: string;
  downloadUrl: string;
  size: number;
  contentType: string;
}

export interface GitHubRelease {
  tagName: string;
  name: string;
  publishedAt: string;
  htmlUrl: string;
  body: string;
  assets: ReleaseAsset[];
  isPrerelease: boolean;
  isDraft: boolean;
}

export interface ChangelogEntry {
  version: string;
  rawContent: string;
  htmlUrl: string;
}

const GITHUB_OWNER = 'eshanized';
const GITHUB_REPO = 'M31A';
const GITHUB_API = 'https://api.github.com';

async function fetchWithTimeout(url: string, options: RequestInit = {}, timeoutMs = 10000): Promise<Response> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, {
      ...options,
      signal: controller.signal,
      headers: {
        Accept: 'application/vnd.github.v3+json',
        'User-Agent': 'M31A-Website',
        ...options.headers,
      },
    });
    return res;
  } finally {
    clearTimeout(timeout);
  }
}

export async function fetchChangelog(): Promise<ChangelogEntry | null> {
  try {
    const res = await fetchWithTimeout(
      `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/master/CHANGELOG.md`
    );
    if (!res.ok) return null;
    const rawContent = await res.text();
    return {
      version: 'latest',
      rawContent,
      htmlUrl: `https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}/blob/master/CHANGELOG.md`,
    };
  } catch {
    return null;
  }
}

export async function fetchReleases(): Promise<GitHubRelease[]> {
  try {
    const res = await fetchWithTimeout(
      `${GITHUB_API}/repos/${GITHUB_OWNER}/${GITHUB_REPO}/releases?per_page=20`
    );
    if (!res.ok) return [];
    const data = await res.json();
    return (data as Array<Record<string, unknown>>).map((item) => ({
      tagName: String(item.tag_name ?? ''),
      name: String(item.name ?? item.tag_name ?? ''),
      publishedAt: String(item.published_at ?? ''),
      htmlUrl: String(item.html_url ?? ''),
      body: String(item.body ?? ''),
      isPrerelease: Boolean(item.prerelease),
      isDraft: Boolean(item.draft),
      assets: Array.isArray(item.assets)
        ? (item.assets as Array<Record<string, unknown>>).map((asset) => ({
            name: String(asset.name ?? ''),
            downloadUrl: String(asset.browser_download_url ?? ''),
            size: Number(asset.size ?? 0),
            contentType: String(asset.content_type ?? ''),
          }))
        : [],
    }));
  } catch {
    return [];
  }
}

export interface RepoStats {
  commits: number;
  issues: number;
  pullRequests: number;
}

export async function fetchRepoStats(): Promise<RepoStats> {
  try {
    const [commitsRes, issuesRes, prsRes] = await Promise.all([
      fetchWithTimeout(`${GITHUB_API}/repos/${GITHUB_OWNER}/${GITHUB_REPO}/commits?per_page=1`),
      fetchWithTimeout(`${GITHUB_API}/search/issues?q=repo:${GITHUB_OWNER}/${GITHUB_REPO}+is:issue+is:open&per_page=1`),
      fetchWithTimeout(`${GITHUB_API}/search/issues?q=repo:${GITHUB_OWNER}/${GITHUB_REPO}+is:pr+is:open&per_page=1`),
    ]);

    let commits = 0;
    let issues = 0;
    let pullRequests = 0;

    if (commitsRes.ok) {
      const link = commitsRes.headers.get('link');
      commits = link ? parseLastPage(link) : 0;
    }

    if (issuesRes.ok) {
      const data = await issuesRes.json();
      issues = Number(data.total_count ?? 0);
    }

    if (prsRes.ok) {
      const data = await prsRes.json();
      pullRequests = Number(data.total_count ?? 0);
    }

    return { commits, issues, pullRequests };
  } catch {
    return { commits: 0, issues: 0, pullRequests: 0 };
  }
}

function parseLastPage(linkHeader: string): number {
  const match = linkHeader.match(/[?&]page=(\d+)>; rel="last"/);
  return match ? parseInt(match[1], 10) : 0;
}

export const GITHUB_REPO_URL = `https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}`;
export const GITHUB_RELEASES_URL = `https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}/releases`;
export const GITHUB_ISSUES_URL = `https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}/issues`;
