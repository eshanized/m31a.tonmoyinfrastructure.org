import type { Metadata } from 'next';
import { PRODUCT } from '@/lib/m31a/product';

const SITE_NAME = 'M31A';
export const SOCIAL_IMAGE_URL = new URL('/opengraph-image.png', PRODUCT.canonicalUrl).toString();

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
}

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadataOptions): Metadata {
  const canonicalUrl = new URL(path, PRODUCT.canonicalUrl).toString();
  const socialTitle = `${title} | ${SITE_NAME}`;
  const imageAlt = 'M31A, an open-source autonomous coding agent for Linux';

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: canonicalUrl,
      siteName: SITE_NAME,
      title: socialTitle,
      description,
      images: [
        {
          url: SOCIAL_IMAGE_URL,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: socialTitle,
      description,
      images: [SOCIAL_IMAGE_URL],
    },
  };
}
