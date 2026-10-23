import type { Metadata } from 'next';
import { PRODUCT } from '@/lib/m31a/product';

type OpenGraphPageType = 'website' | 'article';

interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  type?: OpenGraphPageType;
  absoluteTitle?: boolean;
}

const socialImagePng = `${PRODUCT.canonicalUrl}og-image.png`;
const socialImageSvg = `${PRODUCT.canonicalUrl}og-image.svg`;
const socialImageAlt =
  'M31A lightning logo and brand — an open-source autonomous coding agent with a Rust-native runtime';

function getCanonicalUrl(path: string): string {
  if (path === '/') return PRODUCT.canonicalUrl;

  const relativePath = path.startsWith('/') ? path.slice(1) : path;
  return new URL(relativePath, PRODUCT.canonicalUrl).toString();
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords,
  type = 'website',
  absoluteTitle = false,
}: PageMetadataInput): Metadata {
  const canonical = getCanonicalUrl(path);
  const socialTitle = absoluteTitle ? title : `${title} | M31A`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      type,
      title: socialTitle,
      description,
      url: canonical,
      siteName: PRODUCT.name,
      locale: 'en_US',
      images: [
        {
          url: socialImagePng,
          width: 1200,
          height: 630,
          type: 'image/png',
          alt: socialImageAlt,
        },
        {
          url: socialImageSvg,
          width: 1200,
          height: 630,
          type: 'image/svg+xml',
          alt: socialImageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: socialTitle,
      description,
      images: [socialImagePng],
    },
  };
}
