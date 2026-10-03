import type { MetadataRoute } from 'next';
import { PRODUCT } from '@/lib/m31a/product';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${PRODUCT.canonicalUrl}sitemap.xml`,
  };
}
