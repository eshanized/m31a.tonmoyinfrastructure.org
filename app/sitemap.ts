import type { MetadataRoute } from 'next';
import { PRODUCT, DOCS } from '@/lib/m31a/product';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = PRODUCT.canonicalUrl.replace(/\/$/, '');
  const staticRoutes = [
    '', '/features', '/architecture', '/security', '/docs',
    '/cli', '/download', '/changelog', '/roadmap', '/community', '/about',
  ];

  const routes = [
    ...staticRoutes.map((r) => ({
      url: r === '' ? `${base}/` : `${base}${r}`,
      changeFrequency: 'weekly' as const,
      priority: r === '' ? 1 : 0.8,
    })),
    ...DOCS.map((d) => ({
      url: `${base}/docs/${d.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];

  return routes;
}
