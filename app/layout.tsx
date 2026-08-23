import './globals.css';
import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import localFont from 'next/font/local';

const supercellMagic = localFont({
  src: '../public/fonts/Supercell-Magic.ttf',
  variable: '--font-supercell',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://m31a.dev'),
  title: {
    default: 'M31A — Autonomous Software Engineering in Your Terminal',
    template: '%s · M31A',
  },
  description:
    'M31A is a terminal-native software engineering agent that understands your codebase, plans and executes work, verifies changes, and preserves engineering state across sessions.',
  keywords: [
    'autonomous coding agent',
    'terminal coding agent',
    'AI coding CLI',
    'agentic software engineering',
    'autonomous software engineering',
    'codebase intelligence',
    'AI coding terminal',
    'developer agent',
    'engineering agent',
    'Git AI agent',
    'terminal AI coding tool',
  ],
  authors: [{ name: 'M31A Contributors' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://m31a.dev',
    siteName: 'M31A',
    title: 'M31A — Autonomous Software Engineering in Your Terminal',
    description:
      'A terminal-native software engineering agent that understands your codebase, plans and executes work, verifies changes, and preserves engineering state across sessions.',
    images: [
      {
        url: '/og/m31a-og.svg',
        width: 1200,
        height: 630,
        alt: 'M31A — Autonomous Software Engineering',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'M31A — Autonomous Software Engineering in Your Terminal',
    description:
      'A terminal-native software engineering agent that understands your codebase, plans and executes work, verifies changes, and preserves engineering state across sessions.',
    images: ['/og/m31a-og.svg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://m31a.dev',
  },
};

export const viewport = {
  themeColor: '#0a0e0c',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${supercellMagic.variable} ${jetbrains.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
