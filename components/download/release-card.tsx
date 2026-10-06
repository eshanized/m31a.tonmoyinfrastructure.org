'use client';

import React from 'react';
import Link from 'next/link';
import { Download, ExternalLink, Sparkles } from 'lucide-react';
import { PRODUCT } from '@/lib/m31a/product';
import { useLatestVersion } from '@/hooks/use-latest-version';

export function ReleaseCard() {
  const { displayVersion, releaseDate, releaseUrl } = useLatestVersion();

  return (
    <div className="rounded-2xl border border-[#27272E] bg-[#111115] p-8 shadow-2xl transition-all hover:border-[#E8523F]/35">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#E8523F] block">
          CURRENT RELEASE
        </span>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#3ECF8E]/10 text-[#3ECF8E] border border-[#3ECF8E]/25 font-bold shadow-[0_0_10px_rgba(62,207,142,0.15)] flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#3ECF8E] animate-pulse" />
          <span>LATEST</span>
        </span>
      </div>

      <h3 className="text-3xl font-bold text-[#F4F4F6] tracking-tight">
        {displayVersion}
      </h3>
      <p className="text-xs text-[#65656E] font-mono mt-1 mb-6">
        Released {releaseDate} · Channel: Production
      </p>

      <div className="space-y-3 border-t border-[#222227] pt-4 text-xs font-mono">
        <div className="flex justify-between py-1 border-b border-[#222227]/60">
          <span className="text-[#65656E]">Canonical Model:</span>
          <span className="text-[#F4F4F6] truncate max-w-[200px]">{PRODUCT.canonicalModelId}</span>
        </div>
        <div className="flex justify-between py-1 border-b border-[#222227]/60">
          <span className="text-[#65656E]">Provider:</span>
          <span className="text-[#F4F4F6]">{PRODUCT.canonicalProvider}</span>
        </div>
        <div className="flex justify-between py-1 border-b border-[#222227]/60">
          <span className="text-[#65656E]">Rust Edition:</span>
          <span className="text-[#F4F4F6]">{PRODUCT.edition} ({PRODUCT.rustVersion})</span>
        </div>
        <div className="flex justify-between py-1">
          <span className="text-[#65656E]">License:</span>
          <span className="text-[#F4F4F6]">{PRODUCT.licenses.join(' / ')}</span>
        </div>
      </div>

      <div className="mt-8 space-y-2.5">
        <a
          href={releaseUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg bg-gradient-to-r from-[#E8523F] to-[#F04D3E] hover:from-[#F04D3E] hover:to-[#E8523F] text-white text-xs font-semibold transition-all shadow-[0_0_20px_rgba(232,82,63,0.3)] hover:shadow-[0_0_30px_rgba(232,82,63,0.5)]"
        >
          <Download className="w-4 h-4" />
          <span>Download Assets on GitHub</span>
        </a>

        <Link
          href="/docs/installation"
          className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg border border-[#27272E] bg-[#141418] hover:bg-[#1A1A20] text-xs font-mono text-[#F4F4F6] hover:border-[#E8523F]/50 transition-colors"
        >
          <span>Read Detailed Installation Manual</span>
          <ExternalLink className="w-3.5 h-3.5 text-[#E8523F]" />
        </Link>
      </div>
    </div>
  );
}
