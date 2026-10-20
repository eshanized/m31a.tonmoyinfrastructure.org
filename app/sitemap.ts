import type { MetadataRoute } from 'next';
import { PRODUCT, DOCS } from '@/lib/m31a/product';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = PRODUCT.canonicalUrl.replace(/\/$/, '');
  const staticRoutes = [
    '', '/features', '/architecture', '/security', '/docs',
    '/cli', '/download', '/changelog', '/roadmap', '/community', '/about',
  ];

  const discoveryLandingRoutes = [
    { path: '/free-ai-coding-agent', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/alternatives', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/alternatives/cursor', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/alternatives/claude-code', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/alternatives/opencode', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/ai-coding-agent-linux', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/terminal-coding-agent', priority: 0.9, changeFrequency: 'weekly' as const },
  ];

  const routes = [
    ...staticRoutes.map((r) => ({
      url: `${base}${r}`,
      lastModified: new Date('2026-10-20'),
      changeFrequency: 'weekly' as const,
      priority: r === '' ? 1 : 0.8,
    })),
    ...discoveryLandingRoutes.map((lr) => ({
      url: `${base}${lr.path}`,
      lastModified: new Date('2026-10-20'),
      changeFrequency: lr.changeFrequency,
      priority: lr.priority,
    })),
    ...DOCS.map((d) => ({
      url: `${base}/docs/${d.slug}`,
      lastModified: new Date('2026-10-20'),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];

  return routes;
}
