import { siteConfig } from '@/lib/site-config';

export default function sitemap() {
  const baseUrl = siteConfig.url;

  const coreRoutes = [
    '',
    '/features',
    '/architecture',
    '/announcements',
    '/changelog',
    '/community',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  return coreRoutes;
}
