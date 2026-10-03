import './globals.css';
import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import { SiteHeader } from '@/components/site/site-header';
import { SiteFooter } from '@/components/site/site-footer';
import { PRODUCT } from '@/lib/m31a/product';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL(PRODUCT.canonicalUrl),
  title: {
    default: 'M31A — Autonomous Coding Agent for the Terminal',
    template: '%s — M31A',
  },
  description:
    'A Rust-native autonomous software-engineering runtime with non-bypassable policy gates and verifiable execution. The model proposes. The runtime decides.',
  keywords: [...PRODUCT.keywords, 'rust', 'terminal', 'autonomous agent', 'coding agent'],
  authors: [{ name: PRODUCT.orgName }],
  creator: PRODUCT.orgName,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: PRODUCT.canonicalUrl,
    siteName: 'M31A',
    title: 'M31A — Autonomous Coding Agent for the Terminal',
    description:
      'A Rust-native autonomous software-engineering runtime with non-bypassable policy gates and verifiable execution.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'M31A — Autonomous Coding Agent for the Terminal',
    description:
      'A Rust-native autonomous software-engineering runtime with non-bypassable policy gates and verifiable execution.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${jetbrainsMono.variable} font-mono antialiased`}
      >
        <div className="relative min-h-screen flex flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'SoftwareApplication',
                name: 'M31A',
                applicationCategory: 'DeveloperApplication',
                operatingSystem: 'Linux, macOS, Windows',
                description: PRODUCT.description,
                url: PRODUCT.canonicalUrl,
                downloadUrl: `${PRODUCT.canonicalUrl}download`,
                author: { '@type': 'Organization', name: PRODUCT.orgName },
                license: `https://github.com/eshanized/M31A/blob/master/LICENSE`,
                offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
              }),
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                name: 'M31A',
                url: PRODUCT.canonicalUrl,
              }),
            }}
          />
        </div>
      </body>
    </html>
  );
}
