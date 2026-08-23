import type { MetadataRoute } from 'next';
import { docsNav } from '@/content/architecture';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://m31a.dev';

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/docs`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/roadmap`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/changelog`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/contributing`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
  ];

  const docRoutes: MetadataRoute.Sitemap = docsNav.flatMap((section) =>
    section.items.map((item) => ({
      url: `${baseUrl}/docs/${item.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }))
  );

  return [...staticRoutes, ...docRoutes];
}
