'use client';

import React from 'react';
import Link from 'next/link';
import { Download, ExternalLink } from 'lucide-react';
import { PRODUCT } from '@/lib/m31a/product';
import { useLatestVersion } from '@/hooks/use-latest-version';

export function ReleaseCard() {
  const { displayVersion, releaseDate, releaseUrl } = useLatestVersion();

  return (
    <div className="rounded-2xl border border-[#222226] bg-[#111113] p-8">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#E8523F] block">
          CURRENT RELEASE
        </span>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#3ECF8E]/10 text-[#3ECF8E] border border-[#3ECF8E]/25 font-bold">
          LATEST
        </span>
      </div>

      <h3 className="text-3xl font-bold text-[#F0EDE8]">
        {displayVersion}
      </h3>
      <p className="text-xs text-[#6B6965] font-mono mt-1 mb-6">
        Released {releaseDate} · Channel: Production
      </p>

      <div className="space-y-3 border-t border-[#222226] pt-4 text-xs font-mono">
        <div className="flex justify-between py-1 border-b border-[#222226]/50">
          <span className="text-[#6B6965]">Canonical Model:</span>
          <span className="text-[#F0EDE8] truncate max-w-[180px]">{PRODUCT.canonicalModelId}</span>
        </div>
        <div className="flex justify-between py-1 border-b border-[#222226]/50">
          <span className="text-[#6B6965]">Provider:</span>
          <span className="text-[#F0EDE8]">{PRODUCT.canonicalProvider}</span>
        </div>
        <div className="flex justify-between py-1 border-b border-[#222226]/50">
          <span className="text-[#6B6965]">Rust Edition:</span>
          <span className="text-[#F0EDE8]">{PRODUCT.edition} ({PRODUCT.rustVersion})</span>
        </div>
        <div className="flex justify-between py-1">
          <span className="text-[#6B6965]">License:</span>
          <span className="text-[#F0EDE8]">{PRODUCT.licenses.join(' / ')}</span>
        </div>
      </div>

      <div className="mt-8 space-y-2.5">
        <a
          href={releaseUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg bg-[#E8523F] hover:bg-[#D4432F] text-white text-xs font-medium transition-colors shadow-sm"
        >
          <Download className="w-4 h-4" />
          <span>Download Assets on GitHub</span>
        </a>

        <Link
          href="/docs/installation"
          className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg border border-[#2C2C31] text-xs font-medium text-[#F0EDE8] hover:border-[#E8523F] hover:text-[#E8523F] transition-colors"
        >
          <span>Read Detailed Installation Manual</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
