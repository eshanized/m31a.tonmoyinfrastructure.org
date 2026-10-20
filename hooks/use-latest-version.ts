'use client';

import { useEffect, useState } from 'react';
import { PRODUCT } from '@/lib/m31a/product';

export interface VersionInfo {
  version: string;
  displayVersion: string;
  releaseTag: string;
  releaseUrl: string;
  releaseDate: string;
  isDynamic: boolean;
  isLoading: boolean;
}

const FALLBACK_VERSION: VersionInfo = {
  version: PRODUCT.version,
  displayVersion: `v${PRODUCT.version}`,
  releaseTag: `v${PRODUCT.version}`,
  releaseUrl: PRODUCT.releaseTagUrl,
  releaseDate: PRODUCT.releaseDate,
  isDynamic: false,
  isLoading: true,
};

let globalCache: VersionInfo | null = null;
let pendingFetch: Promise<VersionInfo> | null = null;

async function fetchLatestGitHubRelease(): Promise<VersionInfo> {
  if (globalCache) return globalCache;

  if (typeof window !== 'undefined') {
    try {
      const stored = sessionStorage.getItem('m31a_latest_release');
      if (stored) {
        const parsed: unknown = JSON.parse(stored);
        if (
          typeof parsed === 'object' &&
          parsed !== null &&
          'version' in parsed &&
          'displayVersion' in parsed &&
          'releaseTag' in parsed &&
          'releaseUrl' in parsed &&
          'releaseDate' in parsed &&
          typeof parsed.version === 'string' &&
          typeof parsed.displayVersion === 'string' &&
          typeof parsed.releaseTag === 'string' &&
          typeof parsed.releaseUrl === 'string' &&
          typeof parsed.releaseDate === 'string'
        ) {
          const cached = parsed as VersionInfo;
          if (/^\d+\.\d+\.\d+$/.test(cached.version) && /^v?\d+\.\d+\.\d+$/.test(cached.releaseTag)) {
            globalCache = { ...cached, isDynamic: true, isLoading: false };
            return globalCache;
          }
        }
      }
    } catch {
      // ignore invalid browser cache
    }
  }

  try {
    const response = await fetch('https://api.github.com/repos/eshanized/M31A/releases/latest', {
      headers: { Accept: 'application/vnd.github+json' },
    });

    if (!response.ok) throw new Error(`GitHub API returned status ${response.status}`);

    const data: unknown = await response.json();
    if (
      typeof data === 'object' &&
      data !== null &&
      'tag_name' in data &&
      typeof data.tag_name === 'string'
    ) {
      const release = data as { tag_name: string; published_at?: string | null; html_url?: string };
      const rawTag = release.tag_name.trim();
      const cleanVersion = rawTag.startsWith('v') ? rawTag.slice(1) : rawTag;
      if (!/^\d+\.\d+\.\d+$/.test(cleanVersion)) throw new Error('Unexpected release tag format');

      const publishedAt = typeof release.published_at === 'string' ? release.published_at : PRODUCT.releaseDate;
      const formattedDate = /^\d{4}-\d{2}-\d{2}/.exec(publishedAt)?.[0] ?? PRODUCT.releaseDate;
      const fallbackUrl = `https://github.com/eshanized/M31A/releases/tag/${encodeURIComponent(rawTag)}`;
      const releaseInfo: VersionInfo = {
        version: cleanVersion,
        displayVersion: `v${cleanVersion}`,
        releaseTag: rawTag,
        releaseUrl: typeof release.html_url === 'string' ? release.html_url : fallbackUrl,
        releaseDate: formattedDate,
        isDynamic: true,
        isLoading: false,
      };

      globalCache = releaseInfo;
      try {
        sessionStorage.setItem('m31a_latest_release', JSON.stringify(releaseInfo));
      } catch {
        // ignore unavailable browser storage
      }
      return releaseInfo;
    }
  } catch {
    // fall back to the verified version bundled with the deployment
  }

  const fallback: VersionInfo = { ...FALLBACK_VERSION, isLoading: false };
  globalCache = fallback;
  return fallback;
}

export function useLatestVersion(): VersionInfo {
  const [versionInfo, setVersionInfo] = useState<VersionInfo>(() => globalCache ?? FALLBACK_VERSION);

  useEffect(() => {
    let active = true;
    if (!pendingFetch && !globalCache) {
      pendingFetch = fetchLatestGitHubRelease().finally(() => {
        pendingFetch = null;
      });
    }

    const request = globalCache ? Promise.resolve(globalCache) : pendingFetch;
    request?.then((info) => {
      if (active) setVersionInfo(info);
    });

    return () => {
      active = false;
    };
  }, []);

  return versionInfo;
}
