import type { MetadataRoute } from 'next';
import { PRODUCT, DOCS } from '@/lib/m31a/product';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '/', '/features', '/architecture', '/security', '/docs',
    '/cli', '/download', '/changelog', '/roadmap', '/community', '/about',
  ];

  const toCanonicalUrl = (path: string) =>
    new URL(path.replace(/^\\/+/, ''), PRODUCT.canonicalUrl).toString();

  return [
    ...staticRoutes.map((path) => ({
      url: toCanonicalUrl(path),
    })),
    ...DOCS.map((doc) => ({
      url: toCanonicalUrl(`/docs/${doc.slug}`),
    })),
  ];
}
