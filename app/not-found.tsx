import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';
import { Container } from '@/components/site/section';

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
          The requested route does not exist in the M31A runtime namespace.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
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
            <span>Open Documentation</span>
          </Link>
        </div>
      </Container>
    </div>
  );
}
