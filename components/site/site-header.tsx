'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { LogoMark, GithubMark } from './logo';
import { NAV_ITEMS } from '@/lib/m31a/nav';
import { ArrowRight, Menu, X, Download, Star, Terminal } from 'lucide-react';
import { useLatestVersion } from '@/hooks/use-latest-version';

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const [stars, setStars] = useState<number | null>(null);
  const { displayVersion, releaseUrl, isDynamic } = useLatestVersion();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let active = true;
    fetch('https://api.github.com/repos/eshanized/M31A', {
      headers: { Accept: 'application/vnd.github+json' },
    })
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch repo stats');
        return res.json();
      })
      .then((data) => {
        if (active && typeof data.stargazers_count === 'number') {
          setStars(data.stargazers_count);
        }
      })
      .catch(() => {
        /* fallback */
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* ── Precision Neon Coral Laser Edge Line ── */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#E8523F] to-transparent opacity-90 shadow-[0_0_12px_rgba(232,82,63,0.8)]" />

      {/* ── Eye-Catching Topbar / Release Announcement Banner ── */}
      {showBanner && (
        <div className="border-b border-[#222227] bg-[#0E0E12]/95 backdrop-blur-md px-4 py-2 transition-all">
          <div className="container mx-auto flex items-center justify-center relative">
            <a
              href={releaseUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`M31A ${displayVersion} release notes on GitHub`}
              className="inline-flex max-w-full items-center justify-center gap-2.5 px-3.5 py-1 rounded-full border border-[#E8523F]/35 bg-[#171214] hover:bg-[#1E1618] hover:border-[#E8523F]/60 text-xs font-mono transition-all group shadow-[0_0_15px_rgba(232,82,63,0.12)] hover:shadow-[0_0_22px_rgba(232,82,63,0.3)]"
            >
              {/* Pulsing signal light */}
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E8523F] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E8523F]" />
              </span>

              <span className="shrink-0 font-bold uppercase tracking-wider text-[#E8523F] text-[10px] bg-[#E8523F]/10 px-1.5 py-0.5 rounded">
                NEW RELEASE
              </span>

              <span className="text-[#65656E] select-none hidden sm:inline">/</span>

              <span className="text-[#F4F4F6] font-semibold truncate">
                M31A {displayVersion}
              </span>

              <span className="text-[#9E9EA8] hidden md:inline truncate">
                — Conversation-first TUI &amp; non-bypassable runtime
              </span>

              <ArrowRight aria-hidden="true" className="h-3.5 w-3.5 shrink-0 text-[#E8523F] group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Dismiss banner button */}
            <button
              onClick={() => setShowBanner(false)}
              className="absolute right-0 p-1 text-[#65656E] hover:text-[#F4F4F6] transition-colors rounded hover:bg-[#18181D]"
              title="Dismiss announcement"
              aria-label="Dismiss announcement"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* ── Main Navbar ── */}
      <div
        className={`w-full transition-all duration-300 ${
          scrolled
            ? 'bg-[#09090C]/90 backdrop-blur-xl border-b border-[#222227] py-3 shadow-[0_8px_32px_rgba(0,0,0,0.6)]'
            : 'bg-[#09090C]/50 backdrop-blur-md border-b border-[#1E1E24]/60 py-4'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Left: Brand Identity */}
          <Link href="/" className="group flex items-center gap-3 transition-opacity hover:opacity-90">
            <div className="relative">
              <LogoMark className="w-8 h-8 transition-transform group-hover:scale-105 group-hover:drop-shadow-[0_0_10px_rgba(232,82,63,0.6)]" />
            </div>
            <span className="font-sans font-bold text-xl tracking-wider text-[#F4F4F6]">
              M31A
            </span>

            {/* Dynamic Micro-Badge */}
            <div className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-[#27272E] bg-[#121216] text-[10px] font-mono text-[#9E9EA8] shadow-inner ml-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3ECF8E] animate-pulse" />
              <span>{displayVersion}</span>
            </div>
          </Link>

          {/* Center: Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1.5 bg-[#111115]/60 border border-[#222227]/80 rounded-full px-4 py-1.5 backdrop-blur-md shadow-inner">
            {NAV_ITEMS.map((item) => {
              const isExternal = item.href.startsWith('http');
              if (isExternal) {
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs sm:text-sm font-medium text-[#9E9EA8] hover:text-[#F4F4F6] hover:bg-white/[0.05] px-3.5 py-1.5 rounded-full transition-all"
                  >
                    {item.label}
                  </a>
                );
              }
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-xs sm:text-sm font-medium text-[#9E9EA8] hover:text-[#F4F4F6] hover:bg-white/[0.05] px-3.5 py-1.5 rounded-full transition-all"
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right: Actions */}
          <div className="hidden md:flex items-center gap-3.5">
            {/* GitHub Stars Button */}
            <a
              href="https://github.com/eshanized/M31A"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#27272E] bg-[#121216] hover:bg-[#18181D] hover:border-[#383842] text-xs font-mono text-[#F4F4F6] transition-all shadow-sm group"
              aria-label="GitHub Repository"
            >
              <GithubMark className="w-4 h-4 text-[#9E9EA8] group-hover:text-white transition-colors" />
              <span>Star</span>
              <span className="inline-flex items-center gap-1 px-1.5 py-0.2 rounded bg-[#1C1C22] text-[10px] text-[#E8523F] font-bold border border-[#27272E]">
                <Star className="w-2.5 h-2.5 fill-[#E8523F]" />
                <span>{stars ?? 10}</span>
              </span>
            </a>

            {/* Eye-Catching Primary CTA Button */}
            <Link
              href="/download"
              className="relative inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#E8523F] to-[#F04D3E] hover:from-[#F04D3E] hover:to-[#E8523F] text-white text-xs sm:text-sm font-semibold transition-all shadow-[0_0_20px_rgba(232,82,63,0.35)] hover:shadow-[0_0_28px_rgba(232,82,63,0.6)] hover:-translate-y-0.5 active:translate-y-0"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Install M31A</span>
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-[#F4F4F6] p-2 rounded-lg border border-[#27272E] bg-[#121216] hover:bg-[#18181D] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#E8523F]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu Drawer ── */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#09090C]/95 backdrop-blur-2xl border-b border-[#222227] shadow-2xl p-6 flex flex-col gap-6 animate-slide-up">
          <div className="flex items-center justify-between pb-3 border-b border-[#222227]">
            <span className="font-mono text-xs uppercase tracking-wider text-[#65656E]">
              NAVIGATION MENU
            </span>
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-[#27272E] bg-[#141418] text-[10px] font-mono text-[#9E9EA8]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3ECF8E] animate-pulse" />
              <span>{displayVersion}</span>
            </div>
          </div>

          <nav className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => {
              const isExternal = item.href.startsWith('http');
              if (isExternal) {
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-base font-medium text-[#F4F4F6] hover:text-[#E8523F] px-3 py-2 rounded-lg hover:bg-white/[0.04] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                );
              }
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-base font-medium text-[#F4F4F6] hover:text-[#E8523F] px-3 py-2 rounded-lg hover:bg-white/[0.04] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex flex-col gap-3 pt-4 border-t border-[#222227]">
            <a
              href="https://github.com/eshanized/M31A"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between px-4 py-2.5 rounded-lg border border-[#27272E] bg-[#121216] text-sm font-medium text-[#F4F4F6] hover:border-[#383842] transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <GithubMark className="w-5 h-5 text-[#9E9EA8]" />
                <span>GitHub Repository</span>
              </div>
              <span className="inline-flex items-center gap-1 px-1.5 py-0.2 rounded bg-[#1C1C22] text-[10px] text-[#E8523F] font-bold border border-[#27272E]">
                <Star className="w-2.5 h-2.5 fill-[#E8523F]" />
                <span>{stars ?? 10}</span>
              </span>
            </a>

            <Link
              href="/download"
              className="flex items-center justify-center gap-2 px-5 py-3.5 bg-gradient-to-r from-[#E8523F] to-[#F04D3E] text-white text-center text-sm font-semibold rounded-lg transition-all shadow-[0_0_20px_rgba(232,82,63,0.35)]"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Terminal className="w-4 h-4" />
              <span>Install M31A</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
