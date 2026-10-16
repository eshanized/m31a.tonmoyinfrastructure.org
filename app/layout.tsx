import { SOCIAL_IMAGE_URL } from '@/lib/m31a/seo';
import type { Metadata } from 'next';
import { Fira_Code } from 'next/font/google';
import './globals.css';
import { SiteHeader } from '@/components/site/site-header';
import { SiteFooter } from '@/components/site/site-footer';
import { PRODUCT } from '@/lib/m31a/product';

const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-fira-code',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(PRODUCT.canonicalUrl),
  applicationName: 'M31A',
  category: 'technology',
  title: {
    default: 'M31A — Open-Source AI Coding Agent for Linux',
    template: '%s · M31A',
  },
  description:
    "M31A is an open-source, Rust-native AI coding agent for Linux terminals. It plans engineering work, governs tool execution through policy gates, verifies changes, and supports recovery after failure.",
  keywords: [
    'autonomous coding agent',
    'AI coding agent',
    'terminal coding agent',
    'agentic coding',
    'developer agent',
    'open source coding agent',
    'software engineering agent',
    'Rust runtime',
  ],
  authors: [{ name: 'Tonmoy Infrastructure & Vision', url: 'https://tonmoyinfrastructure.org/' }],
  creator: 'Tonmoy Infrastructure & Vision',
  publisher: 'Tonmoy Infrastructure & Vision',
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    shortcut: ['/favicon.svg'],
  },
  alternates: {
    canonical: PRODUCT.canonicalUrl,
  },
  openGraph: {
    title: 'M31A — Autonomous Coding Agent for Serious Engineering',
    description:
      'M31A takes engineering goals, turns them into executable plans, works through the repository, verifies its changes, and recovers from failure — directly from the terminal.',
    url: PRODUCT.canonicalUrl,
    siteName: 'M31A',
    locale: 'en_US',
    type: 'website',
    images: [{ url: SOCIAL_IMAGE_URL, width: 1200, height: 630, alt: 'M31A — open-source autonomous coding agent for Linux' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'M31A — Autonomous Coding Agent for Serious Engineering',
    description:
      'An open-source, Rust-native AI coding agent for Linux terminals. The model proposes. The runtime decides.',
    images: [SOCIAL_IMAGE_URL],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const organizationId = 'https://tonmoyinfrastructure.org/#organization';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': organizationId,
      name: PRODUCT.orgName,
      url: 'https://tonmoyinfrastructure.org/',
      logo: new URL('/m31a-logo.svg', PRODUCT.canonicalUrl).toString(),
    },
    {
      '@type': 'WebSite',
      '@id': `${PRODUCT.canonicalUrl}#website`,
      url: PRODUCT.canonicalUrl,
      name: 'M31A',
      alternateName: PRODUCT.fullName,
      inLanguage: 'en',
      publisher: { '@id': organizationId },
    },
    {
      '@type': 'SoftwareApplication',
      '@id': `${PRODUCT.canonicalUrl}#software`,
      name: PRODUCT.name,
      alternateName: PRODUCT.fullName,
      applicationCategory: 'DeveloperApplication',
      applicationSubCategory: 'Autonomous coding agent',
      operatingSystem: 'Linux',
      programmingLanguage: 'Rust',
      description: 'An open-source autonomous coding agent with a Rust-native runtime for policy-governed execution, verification, and recovery.',
      softwareVersion: PRODUCT.version,
      url: PRODUCT.canonicalUrl,
      image: SOCIAL_IMAGE_URL,
      downloadUrl: PRODUCT.releasesUrl,
      codeRepository: PRODUCT.repositoryUrl,
      license: PRODUCT.licenseUrl,
      author: { '@id': organizationId },
      publisher: { '@id': organizationId },
      mainEntityOfPage: { '@id': `${PRODUCT.canonicalUrl}#website` },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${firaCode.variable} dark`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
        />
      </head>
      <body className="font-sans antialiased bg-[#09090B] text-[#F4F4F6] min-h-screen flex flex-col selection:bg-[#E8523F] selection:text-white">
        <a 
          href="#main-content" 
          className="absolute left-[-9999px] top-[-9999px] focus:left-4 focus:top-4 z-[100] px-4 py-2 bg-[#E8523F] text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-white"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
