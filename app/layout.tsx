import type { Metadata } from 'next';
import { Fira_Code, Inter } from 'next/font/google';
import './globals.css';
import { SiteHeader } from '@/components/site/site-header';
import { SiteFooter } from '@/components/site/site-footer';
import { PRODUCT } from '@/lib/m31a/product';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-fira-code',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(PRODUCT.canonicalUrl),
  title: {
    default: 'M31A — Open-Source Autonomous Coding Agent',
    template: '%s | M31A',
  },
  description:
    "M31A is an autonomous coding agent that lives in the developer's terminal. It takes engineering goals, turns them into executable plans, works through the repository, verifies its changes, and recovers from failure — with deterministic runtime authority.",
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
  alternates: {
    canonical: PRODUCT.canonicalUrl,
  },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    shortcut: ['/favicon.svg'],
  },
  openGraph: {
    title: 'M31A — Autonomous Coding Agent for Serious Engineering',
    description:
      'M31A takes engineering goals, turns them into executable plans, works through the repository, verifies its changes, and recovers from failure — directly from the terminal.',
    siteName: 'M31A',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'M31A — Autonomous Coding Agent for Serious Engineering',
    description:
      'The autonomous coding agent for serious engineering. The model proposes. The runtime decides.',
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

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://tonmoyinfrastructure.org/#organization',
      name: PRODUCT.orgName,
      url: 'https://tonmoyinfrastructure.org/',
    },
    {
      '@type': 'WebSite',
      '@id': `${PRODUCT.canonicalUrl}#website`,
      url: PRODUCT.canonicalUrl,
      name: PRODUCT.name,
      description: PRODUCT.description,
      inLanguage: 'en',
      publisher: { '@id': 'https://tonmoyinfrastructure.org/#organization' },
    },
    {
      '@type': 'SoftwareApplication',
      '@id': `${PRODUCT.canonicalUrl}#software`,
      name: PRODUCT.name,
      alternateName: PRODUCT.fullName,
      operatingSystem: 'Linux x86_64 (release-qualified), macOS Intel (conditionally supported)',
      applicationCategory: 'DeveloperApplication',
      description: PRODUCT.longDescription,
      softwareVersion: PRODUCT.version,
      url: PRODUCT.canonicalUrl,
      license: PRODUCT.licenseUrl,
      sameAs: PRODUCT.repositoryUrl,
      downloadUrl: PRODUCT.releasesUrl,
      image: `${PRODUCT.canonicalUrl}og-image.svg`,
      author: { '@id': 'https://tonmoyinfrastructure.org/#organization' },
      publisher: { '@id': 'https://tonmoyinfrastructure.org/#organization' },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable} dark`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
