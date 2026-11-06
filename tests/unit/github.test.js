import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import {
  getLatestRelease,
  getLatestVersion,
  getChangelog,
  getRepoMetrics,
  getRecentReleases,
  FALLBACK_RELEASE,
  FALLBACK_REPO_DATA,
  FALLBACK_CHANGELOG,
} from '@/lib/github';

describe('GitHub Integration Module', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('provides reliable fallback data when fetch fails', async () => {
    globalThis.fetch = vi.fn().mockRejectedValue(new Error('Network error'));

    const release = await getLatestRelease();
    expect(release).toBeDefined();
    expect(release.tag_name).toBe(FALLBACK_RELEASE.tag_name);
    expect(release.assets.length).toBeGreaterThan(0);

    const version = await getLatestVersion();
    expect(version).toBe('0.1.13');

    const changelog = await getChangelog();
    expect(Array.isArray(changelog)).toBe(true);
    expect(changelog.length).toBe(FALLBACK_CHANGELOG.length);

    const metrics = await getRepoMetrics();
    expect(metrics).toBeDefined();
    expect(metrics.stargazers_count).toBe(FALLBACK_REPO_DATA.stargazers_count);
  });

  it('provides reliable fallback data when API returns 404 or 403 rate limit', async () => {
    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 403,
      json: async () => ({ message: 'API rate limit exceeded' }),
    });

    const release = await getLatestRelease();
    expect(release.tag_name).toBe(FALLBACK_RELEASE.tag_name);

    const metrics = await getRepoMetrics();
    expect(metrics.stargazers_count).toBe(FALLBACK_REPO_DATA.stargazers_count);
  });

  it('correctly maps successful GitHub API responses', async () => {
    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => ({
        tag_name: 'v0.1.14',
        name: 'v0.1.14 Test Release',
        published_at: '2026-11-06T00:00:00Z',
        html_url: 'https://github.com/eshanized/M31A/releases/tag/v0.1.14',
        body: '### Highlights\n- Feature A\n- Feature B',
        assets: [{ name: 'm31a-test.tar.gz', size: 1000, download_count: 50 }],
      }),
    });

    const release = await getLatestRelease();
    expect(release.tag_name).toBe('v0.1.14');
    expect(release.name).toBe('v0.1.14 Test Release');
    expect(release.assets).toHaveLength(1);

    const version = await getLatestVersion();
    expect(version).toBe('0.1.14');
  });

  it('handles getRecentReleases with graceful fallback list', async () => {
    globalThis.fetch = vi.fn().mockRejectedValue(new Error('Network offline'));

    const list = await getRecentReleases();
    expect(Array.isArray(list)).toBe(true);
    expect(list.length).toBeGreaterThan(0);
    expect(list[0].tag_name).toBe(FALLBACK_RELEASE.tag_name);
  });
});
