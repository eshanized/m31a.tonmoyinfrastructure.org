import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { SiteHeader } from '@/components/site/site-header';
import { SiteFooter } from '@/components/site/site-footer';
import { PRODUCT } from '@/lib/m31a/product';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(PRODUCT.canonicalUrl),
  title: {
    default: 'M31A — Autonomous Coding Agent for Serious Engineering',
    template: '%s · M31A',
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
  openGraph: {
    title: 'M31A — Autonomous Coding Agent for Serious Engineering',
    description:
      'M31A takes engineering goals, turns them into executable plans, works through the repository, verifies its changes, and recovers from failure — directly from the terminal.',
    url: PRODUCT.canonicalUrl,
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
  '@type': 'SoftwareApplication',
  name: 'M31A',
  alternateName: 'M31 Autonomous',
  operatingSystem: 'Linux, macOS, Windows',
  applicationCategory: 'DeveloperApplication',
  description:
    'An autonomous software-engineering runtime that plans, executes, verifies, and recovers directly from the developer terminal.',
  softwareVersion: PRODUCT.version,
  url: PRODUCT.canonicalUrl,
  license: PRODUCT.licenseUrl,
  author: {
    '@type': 'Organization',
    name: PRODUCT.orgName,
    url: 'https://tonmoyinfrastructure.org/',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark`} suppressHydrationWarning>
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
