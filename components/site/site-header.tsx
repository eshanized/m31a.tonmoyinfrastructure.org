'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Menu, X, Download, ExternalLink } from 'lucide-react';
import { LogoMark } from './logo';
import { NAV_ITEMS } from '@/lib/m31a/nav';
import { useLatestVersion } from '@/hooks/use-latest-version';

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { displayVersion, releaseUrl } = useLatestVersion();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#27272D]/90 bg-[#09090B]/90 backdrop-blur-2xl">
      <div className="mx-auto flex min-h-[72px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group inline-flex shrink-0 items-center gap-3" aria-label="M31A homepage">
          <LogoMark className="h-9 w-9 transition-transform duration-200 group-hover:scale-[1.04]" />
          <span className="text-lg font-semibold tracking-[-0.04em] text-[#F5F0EB]">M31A</span>
          <span className="hidden rounded-md border border-[#34343A] bg-[#111114] px-2 py-1 font-mono text-[10px] text-[#B8B5B4] sm:inline">
            {displayVersion}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary navigation">
          {NAV_ITEMS.map((item) => {
            const external = item.href.startsWith('http');
            const className = "rounded-lg px-3 py-2 text-[13px] font-medium text-[#A9A6A5] transition-colors hover:bg-white/[0.045] hover:text-[#F5F0EB]";
            return external ? (
              <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer" className={className}>
                <span className="inline-flex items-center gap-1.5">{item.label}<ExternalLink className="h-3 w-3 opacity-45" /></span>
              </a>
            ) : (
              <Link key={item.href} href={item.href} className={className}>
                {item.label === 'Product' ? 'Overview' : item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 lg:flex">
          <a
            href={releaseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium text-[#A9A6A5] transition-colors hover:text-[#F5F0EB] 2xl:inline-flex"
          >
            Current release <span className="font-mono text-[#F07865]">{displayVersion}</span>
          </a>
          <Link
            href="/download"
            className="inline-flex min-h-10 items-center gap-2 rounded-lg bg-[#E8523F] px-4 py-2 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#F06450]"
          >
            <Download className="h-4 w-4" />
            Get M31A
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#34343A] bg-[#111114] text-[#F5F0EB] transition-colors hover:border-[#E8523F]/60 xl:hidden"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div id="mobile-navigation" className="border-t border-[#27272D] bg-[#0B0B0E] px-4 py-5 shadow-2xl sm:px-6 xl:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            <div className="mb-3 flex items-center justify-between border-b border-[#27272D] pb-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#777982]">Navigation</span>
              <span className="font-mono text-xs text-[#F07865]">{displayVersion}</span>
            </div>
            <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
              {NAV_ITEMS.map((item) => {
                const external = item.href.startsWith('http');
                const className = "flex min-h-11 items-center justify-between rounded-lg px-3 text-sm font-medium text-[#D7D2CD] transition-colors hover:bg-white/[0.045] hover:text-white";
                return external ? (
                  <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer" className={className} onClick={() => setMobileMenuOpen(false)}>
                    {item.label}<ExternalLink className="h-3.5 w-3.5 text-[#777982]" />
                  </a>
                ) : (
                  <Link key={item.href} href={item.href} className={className} onClick={() => setMobileMenuOpen(false)}>
                    {item.label === 'Product' ? 'Overview' : item.label}
                  </Link>
                );
              })}
            </nav>
            <Link
              href="/download"
              className="mt-4 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#E8523F] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#F06450]"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Download className="h-4 w-4" />
              Get M31A
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={releaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex min-h-10 items-center justify-center gap-2 text-xs text-[#8E8E96] hover:text-[#F5F0EB]"
            >
              Read current release notes <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
