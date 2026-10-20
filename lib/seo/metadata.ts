import type { Metadata } from 'next';
import { PRODUCT } from '@/lib/m31a/product';

const BASE_URL = PRODUCT.canonicalUrl.replace(/\/$/, '');

/**
 * Normalizes a relative path into an authoritative, absolute canonical URL.
 * Root path returns the domain with a trailing slash; subpages return without trailing slash.
 */
export function getCanonicalUrl(path: string = ''): string {
  const cleanPath = path.trim().replace(/^\/+/, '').replace(/\/+$/, '');
  return cleanPath === '' ? BASE_URL : `${BASE_URL}/${cleanPath}`;
}

export interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogType?: 'website' | 'article';
}

/**
 * Generates route-specific metadata with self-referencing canonical URLs,
 * search-engine descriptions, and Open Graph / Twitter cards.
 */
export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
  ogType = 'website',
}: PageMetadataOptions): Metadata {
  const canonical = getCanonicalUrl(path);

  return {
    title: {
      absolute: title,
    },
    description,
    keywords: keywords.length > 0 ? keywords : undefined,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: PRODUCT.name,
      locale: 'en_US',
      type: ogType,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

/**
 * Schema.org BreadcrumbList generator
 */
export function generateBreadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: getCanonicalUrl(item.path),
    })),
  };
}

/**
 * Schema.org SoftwareApplication generator aligned strictly with platform reality
 */
export function generateSoftwareApplicationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: PRODUCT.name,
    alternateName: PRODUCT.fullName,
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Linux x86_64 (release-qualified), macOS Intel (conditionally supported)',
    description: PRODUCT.longDescription,
    softwareVersion: PRODUCT.version,
    url: PRODUCT.canonicalUrl,
    license: PRODUCT.licenseUrl,
    author: {
      '@type': 'Organization',
      name: PRODUCT.orgName,
      url: 'https://tonmoyinfrastructure.org/',
    },
    offers: {
      '@type': 'Offer',
      price: '0.00',
      priceCurrency: 'USD',
      description: 'Free, open-source software under dual MIT and Apache-2.0 licenses. Model inference requires provider API keys.',
    },
  };
}

/**
 * Schema.org TechArticle generator for technical landing and comparison pages
 */
export function generateTechArticleJsonLd({
  headline,
  description,
  path,
  datePublished = '2026-10-02',
  dateModified = '2026-10-20',
}: {
  headline: string;
  description: string;
  path: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline,
    description,
    url: getCanonicalUrl(path),
    datePublished,
    dateModified,
    author: {
      '@type': 'Organization',
      name: PRODUCT.orgName,
      url: 'https://tonmoyinfrastructure.org/',
    },
    publisher: {
      '@type': 'Organization',
      name: PRODUCT.orgName,
      url: 'https://tonmoyinfrastructure.org/',
    },
    inLanguage: 'en-US',
  };
}
