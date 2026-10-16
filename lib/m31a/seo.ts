import type { Metadata } from 'next';
import { PRODUCT } from '@/lib/m31a/product';

type OpenGraphPageType = 'website' | 'article';

interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
  type?: OpenGraphPageType;
  absoluteTitle?: boolean;
}

const socialImage = '/og-image.svg';
const socialImageAlt =
  'M31A, an open-source autonomous coding agent with a Rust-native runtime for controlled execution and verification';

function getCanonicalUrl(path: string): string {
  if (path === '/') return PRODUCT.canonicalUrl;

  const relativePath = path.startsWith('/') ? path.slice(1) : path;
  return new URL(relativePath, PRODUCT.canonicalUrl).toString();
}

export function createPageMetadata({
  title,
  description,
  path,
  type = 'website',
  absoluteTitle = false,
}: PageMetadataInput): Metadata {
  const canonical = getCanonicalUrl(path);
  const socialTitle = absoluteTitle ? title : `${title} | M31A`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
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
          url: socialImage,
          width: 1200,
          height: 630,
          alt: socialImageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: socialTitle,
      description,
      images: [socialImage],
    },
  };
}
