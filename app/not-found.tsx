import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Home, Search, Compass, Terminal } from 'lucide-react';
import { Container } from '@/components/site/section';

export const metadata: Metadata = {
  title: '404: Page Not Found · M31A',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20">
      <Container className="text-center max-w-xl">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#E8523F] block mb-4">
          ERROR 404
        </span>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#F0EDE8] mb-4">
          Path Not Found.
        </h1>
        <p className="text-base text-[#A3A09B] leading-relaxed mb-8">
          The requested route does not exist in the M31A runtime namespace. Explore the resources below or jump directly to core engineering guides.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#E8523F] hover:bg-[#D4432F] text-white text-sm font-medium transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/docs"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[#2C2C31] bg-[#111113] hover:bg-[#18181B] text-[#F0EDE8] text-sm font-medium transition-colors"
          >
            <Compass className="w-4 h-4" />
            <span>Documentation Hub</span>
          </Link>
        </div>

        <div className="pt-6 border-t border-[#222226] flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-[#65656E]">
          <Link href="/terminal-coding-agent" className="hover:text-[#E8523F] transition-colors">Terminal Cockpit</Link>
          <span>·</span>
          <Link href="/ai-coding-agent-linux" className="hover:text-[#E8523F] transition-colors">Linux Confinement</Link>
          <span>·</span>
          <Link href="/alternatives" className="hover:text-[#E8523F] transition-colors">Alternatives</Link>
          <span>·</span>
          <Link href="/download" className="hover:text-[#E8523F] transition-colors">Download</Link>
        </div>
      </Container>
    </div>
  );
}
