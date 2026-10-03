import './globals.css';
import type { Metadata } from 'next';
import { Archivo, JetBrains_Mono } from 'next/font/google';
import { SiteHeader } from '@/components/site/site-header';
import { SiteFooter } from '@/components/site/site-footer';
import { PRODUCT } from '@/lib/m31a/product';

const display = Archivo({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['500', '600', '700', '800'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL(PRODUCT.canonicalUrl),
  title: {
    default: 'M31A — Autonomous Software-Engineering Runtime',
    template: '%s — M31A',
  },
  description:
    'M31A is a Rust-native autonomous software-engineering runtime. The model proposes. The runtime decides.',
  keywords: [...PRODUCT.keywords, 'rust', 'terminal', 'autonomous agent', 'coding agent'],
  authors: [{ name: PRODUCT.orgName }],
  creator: PRODUCT.orgName,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: PRODUCT.canonicalUrl,
    siteName: 'M31A',
    title: 'M31A — Autonomous Software-Engineering Runtime',
    description:
      'A Rust-native governed runtime: model proposals pass policy, sandbox, execution, verification, checkpoint.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'M31A — The model proposes. The runtime decides.',
    description:
      'A Rust-native governed runtime with non-bypassable policy gates and verifiable execution.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${display.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-[#FF4B2C] focus:px-3 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        <div className="relative flex min-h-screen flex-col bg-[#0D0C0A]">
          <SiteHeader />
          <main id="main" className="flex-1">
            {children}
          </main>
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
        </div>
      </body>
    </html>
  );
}
