'use client';

import { useState, useEffect } from 'react';
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

// In-memory cache across component mounts in the same session
let globalCache: VersionInfo | null = null;
let pendingFetch: Promise<VersionInfo> | null = null;

async function fetchLatestGitHubRelease(): Promise<VersionInfo> {
  if (globalCache) return globalCache;

  // Check sessionStorage if in browser
  if (typeof window !== 'undefined') {
    try {
      const stored = sessionStorage.getItem('m31a_latest_release');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed && parsed.version) {
          globalCache = parsed;
          return parsed;
        }
      }
    } catch {
      /* ignore storage errors */
    }
  }

  try {
    const res = await fetch('https://api.github.com/repos/eshanized/M31A/releases/latest', {
      headers: { Accept: 'application/vnd.github+json' },
    });

    if (!res.ok) {
      throw new Error(`GitHub API returned status ${res.status}`);
    }

    const data = await res.json();
    if (typeof data.tag_name === 'string') {
      const rawTag = data.tag_name.trim();
      const cleanVer = rawTag.startsWith('v') ? rawTag.slice(1) : rawTag;
      const formattedDate = data.published_at 
        ? data.published_at.split('T')[0]
        : PRODUCT.releaseDate;

      const info: VersionInfo = {
        version: cleanVer,
        displayVersion: rawTag.startsWith('v') ? rawTag : `v${rawTag}`,
        releaseTag: rawTag,
        releaseUrl: typeof data.html_url === 'string' ? data.html_url : `https://github.com/eshanized/M31A/releases/tag/${rawTag}`,
        releaseDate: formattedDate,
        isDynamic: true,
        isLoading: false,
      };

      globalCache = info;
      if (typeof window !== 'undefined') {
        try {
          sessionStorage.setItem('m31a_latest_release', JSON.stringify(info));
        } catch {
          /* ignore */
        }
      }
      return info;
    }
  } catch {
    // Silently fall back to build-time product info
  }

  const fallback: VersionInfo = {
    ...FALLBACK_VERSION,
    isLoading: false,
  };
  globalCache = fallback;
  return fallback;
}

export function useLatestVersion(): VersionInfo {
  const [versionInfo, setVersionInfo] = useState<VersionInfo>(() => globalCache ?? FALLBACK_VERSION);

  useEffect(() => {
    let active = true;

    if (!globalCache) {
      if (!pendingFetch) {
        pendingFetch = fetchLatestGitHubRelease().finally(() => {
          pendingFetch = null;
        });
      }

      pendingFetch.then((info) => {
        if (active) {
          setVersionInfo(info);
        }
      });
    } else {
      setVersionInfo(globalCache);
    }

    return () => {
      active = false;
    };
  }, []);

  return versionInfo;
}
