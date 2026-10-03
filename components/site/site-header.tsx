'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { NAV_ITEMS } from '@/lib/m31a/nav';
import { PRODUCT } from '@/lib/m31a/product';
import { LogoMark, GithubMark } from './logo';
import { cn } from '@/lib/utils';

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [dense, setDense] = useState(false);

  useEffect(() => {
    const onScroll = () => setDense(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-[#2A2721] bg-[#0D0C0A]/95 backdrop-blur-sm">
      {/* system strip */}
      <div className="hidden border-b border-[#2A2721] md:block">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-1">
          <p className="meta">
            M31A / M31 AUTONOMOUS · RUST-NATIVE SOFTWARE-ENGINEERING RUNTIME
          </p>
          <p className="mono-val text-[11px] text-[#6E6860]">
            v{PRODUCT.version} · PRODUCTION · LINUX x86_64 QUALIFIED
          </p>
        </div>
      </div>
      {/* control bar */}
      <div
        className={cn(
          'mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-4 transition-all sm:px-6',
          dense ? 'h-11' : 'h-[52px]'
        )}
      >
        <div className="flex min-w-0 items-center gap-6">
          <Link href="/" className="flex shrink-0 items-center gap-2" aria-label="M31A home">
            <LogoMark className="h-6 w-6" />
            <span className="font-display text-[15px] font-bold tracking-tight">
              <span className="text-[#FF4B2C]">M31</span>
              <span className="text-[#ECE7DC]">A</span>
            </span>
            <span className="meta hidden lg:inline">M31 AUTONOMOUS</span>
          </Link>
          <nav className="hidden items-center gap-0.5 md:flex" aria-label="Primary">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href + item.label}
                href={item.href}
                className="group flex items-center gap-1.5 rounded-[2px] px-2.5 py-1.5 font-mono text-[11px] tracking-wider text-[#A8A198] transition-colors hover:bg-[#1B1A17] hover:text-[#ECE7DC]"
              >
                <span className="text-[#6E6860] group-hover:text-[#FF6B4A]">{item.index}</span>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden items-center gap-1 md:flex">
          <a
            href={PRODUCT.repositoryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-[2px] px-2.5 py-1.5 font-mono text-[11px] tracking-wider text-[#A8A198] transition-colors hover:text-[#ECE7DC]"
          >
            <GithubMark className="h-3.5 w-3.5" />
            GITHUB
          </a>
          <Link
            href="/download"
            className="flex items-center gap-1.5 rounded-[2px] border border-[#3B362C] bg-[#1B1A17] px-3 py-1.5 font-mono text-[11px] tracking-wider text-[#ECE7DC] transition-colors hover:border-[#FF4B2C] hover:text-white"
          >
            <Download className="h-3.5 w-3.5" aria-hidden="true" />
            DOWNLOAD
          </Link>
        </div>

        <button
          className="flex items-center rounded-[2px] border border-[#2A2721] p-1.5 text-[#A8A198] md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[#2A2721] bg-[#0D0C0A] md:hidden">
          <nav className="mx-auto grid max-w-[1280px] gap-1 px-4 py-3" aria-label="Mobile">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href + item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-3 rounded-[2px] px-3 py-2.5 font-mono text-xs tracking-wider text-[#A8A198] transition-colors hover:bg-[#1B1A17] hover:text-[#ECE7DC]"
              >
                <span className="text-[#FF6B4A]">[{item.index}]</span>
                {item.label}
              </Link>
            ))}
            <div className="mt-2 flex gap-2 border-t border-[#2A2721] pt-3">
              <a
                href={PRODUCT.repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-1.5 rounded-[2px] border border-[#2A2721] px-3 py-2.5 font-mono text-xs text-[#A8A198]"
              >
                <GithubMark className="h-4 w-4" />
                GITHUB
              </a>
              <Link
                href="/download"
                onClick={() => setOpen(false)}
                className="flex flex-1 items-center justify-center gap-1.5 rounded-[2px] bg-[#FF4B2C] px-3 py-2.5 text-sm font-semibold text-white"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
