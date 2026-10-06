'use client';

import React from 'react';
import Link from 'next/link';
import { Download, ArrowRight } from 'lucide-react';
import { Container } from '@/components/site/section';
import { PRODUCT } from '@/lib/m31a/product';
import { GithubMark } from '@/components/site/logo';

export function FinalCta() {
  return (
    <section className="py-28 sm:py-36 bg-[#070709] border-b border-[#222227] text-center relative overflow-hidden">
      <Container>
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <span className="font-mono text-xs uppercase tracking-widest text-[#E8523F] font-semibold mb-6 block">
            READY FOR SERIOUS ENGINEERING
          </span>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F4F4F6] leading-tight mb-6">
            An autonomous runtime built for real repositories.
          </h2>

          <p className="text-base sm:text-lg text-[#9E9EA8] max-w-xl leading-relaxed mb-10">
            M31A is an autonomous engineering runtime with a coding agent on top — not a chatbot with shell access.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#install"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-lg bg-[#E8523F] hover:bg-[#D4432F] text-white font-semibold text-base transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <Download className="w-5 h-5" />
              <span>Install M31A</span>
            </Link>

            <a
              href={PRODUCT.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-lg border border-[#27272E] bg-[#141418] hover:bg-[#1A1A20] text-[#F4F4F6] font-semibold text-base transition-all shadow-sm"
            >
              <GithubMark className="w-5 h-5" />
              <span>View GitHub</span>
            </a>
          </div>

          <div className="mt-12 flex items-center gap-6 text-xs font-mono text-[#65656E]">
            <span>Dual Licensed MIT / Apache-2.0</span>
            <span>·</span>
            <span>Single Rust Crate</span>
            <span>·</span>
            <span>Linux x86_64 Qualified</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
