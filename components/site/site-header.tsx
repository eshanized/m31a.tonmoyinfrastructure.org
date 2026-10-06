'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { LogoMark, GithubMark } from './logo';
import { NAV_ITEMS } from '@/lib/m31a/nav';
import { ArrowRight, Menu, X } from 'lucide-react';
import { useLatestVersion } from '@/hooks/use-latest-version';

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { displayVersion, releaseUrl, isDynamic } = useLatestVersion();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0A0A0B]/80 backdrop-blur-md border-b border-[#222226] py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      {isDynamic && (
        <div className="border-b border-[#222227] bg-[#111114] px-4 py-2 text-center">
          <a
            href={releaseUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`M31A ${displayVersion} release notes on GitHub`}
            className="inline-flex max-w-full items-center justify-center gap-2 text-xs font-medium text-[#D6D2CC] transition-colors hover:text-white sm:text-sm"
          >
            <span className="shrink-0 rounded-sm bg-[#E8523F]/15 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-[#E8523F]">
              Latest release
            </span>
            <span className="truncate">M31A {displayVersion} is out</span>
            <ArrowRight aria-hidden="true" className="h-3.5 w-3.5 shrink-0 text-[#E8523F]" />
          </a>
        </div>
      )}

      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">
          <LogoMark className="w-8 h-8" />
          <span className="font-sans font-semibold text-xl tracking-wide text-[#F0EDE8]">M31A</span>
        </Link>

        {/* Center: Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => {
            const isExternal = item.href.startsWith('http');
            if (isExternal) {
              return (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-[#A3A09B] hover:text-[#E8523F] transition-colors"
                >
                  {item.label}
                </a>
              );
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[#A3A09B] hover:text-[#E8523F] transition-colors"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: Actions */}
        <div className="hidden md:flex items-center gap-5">
          <a
            href="https://github.com/eshanized/M31A"
            target="_blank"
            rel="noreferrer"
            className="text-[#A3A09B] hover:text-[#F0EDE8] transition-colors p-1.5"
            aria-label="GitHub Repository"
          >
            <GithubMark className="w-5 h-5" />
          </a>
          <Link
            href="/download"
            className="px-4 py-2 bg-[#E8523F] hover:bg-[#D4432F] text-white text-xs sm:text-sm font-semibold rounded-md transition-all shadow-sm"
          >
            Install M31A
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-[#F0EDE8] p-2 rounded-md hover:bg-[#18181D] transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0C0C0E] border-b border-[#222226] shadow-2xl p-6 flex flex-col gap-6 animate-slide-up">
          <nav className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => {
              const isExternal = item.href.startsWith('http');
              if (isExternal) {
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-base font-medium text-[#F0EDE8] hover:text-[#E8523F] transition-colors"
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
                  className="text-base font-medium text-[#F0EDE8] hover:text-[#E8523F] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex flex-col gap-3 pt-4 border-t border-[#222226]">
            <a
              href="https://github.com/eshanized/M31A"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-sm font-medium text-[#A3A09B] hover:text-[#F0EDE8] transition-colors"
            >
              <GithubMark className="w-5 h-5" />
              <span>View GitHub Repository</span>
            </a>
            <Link
              href="/download"
              className="px-5 py-3 bg-[#E8523F] text-white text-center text-sm font-semibold rounded-md transition-colors shadow-md mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Install M31A
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
