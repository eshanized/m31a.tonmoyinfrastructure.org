'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { LogoMark, GithubMark } from './logo';
import { NAV_ITEMS } from '@/lib/m31a/nav';
import { ArrowRight, Menu, X } from 'lucide-react';

type LatestRelease = {
  tag_name: string;
  html_url: string;
};

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [latestRelease, setLatestRelease] = useState<LatestRelease | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let active = true;

    fetch('https://api.github.com/repos/eshanized/M31A/releases/latest', {
      headers: { Accept: 'application/vnd.github+json' },
    })
      .then((response) => {
        if (!response.ok) throw new Error('Unable to load the latest release');
        return response.json() as Promise<Partial<LatestRelease>>;
      })
      .then((release) => {
        if (
          active &&
          typeof release.tag_name === 'string' &&
          typeof release.html_url === 'string' &&
          release.html_url.startsWith('https://github.com/eshanized/M31A/releases/')
        ) {
          setLatestRelease({ tag_name: release.tag_name, html_url: release.html_url });
        }
      })
      .catch(() => {
        if (active) setLatestRelease(null);
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0A0A0B]/80 backdrop-blur-md border-b border-[#222226] py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      {latestRelease && (
        <div className="border-b border-[#222226] bg-[#111113] px-4 py-2 text-center">
          <a
            href={latestRelease.html_url}
            target="_blank"
            rel="noreferrer"
            aria-label={`M31A ${latestRelease.tag_name} release notes on GitHub`}
            className="inline-flex max-w-full items-center justify-center gap-2 text-xs font-medium text-[#D6D2CC] transition-colors hover:text-white sm:text-sm"
          >
            <span className="shrink-0 rounded-sm bg-[#E8523F]/15 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-[#E8523F]">
              Latest release
            </span>
            <span className="truncate">M31A {latestRelease.tag_name} is out</span>
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
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#A3A09B] hover:text-[#E8523F] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="https://github.com/eshanized/M31A"
            target="_blank"
            rel="noreferrer"
            className="text-[#A3A09B] hover:text-[#F0EDE8] transition-colors"
          >
            <GithubMark className="w-5 h-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="/download"
            className="px-4 py-2 bg-[#E8523F] hover:bg-[#D4432F] text-white text-sm font-medium rounded-md transition-colors"
          >
            Download
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-[#F0EDE8] p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0A0A0B] border-b border-[#222226] shadow-xl p-6 flex flex-col gap-6 slide-up">
          <nav className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-lg font-medium text-[#F0EDE8] hover:text-[#E8523F]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-4 pt-4 border-t border-[#222226]">
            <Link
              href="https://github.com/eshanized/M31A"
              className="flex items-center gap-3 text-lg font-medium text-[#F0EDE8]"
            >
              <GithubMark className="w-6 h-6" />
              GitHub
            </Link>
            <Link
              href="/download"
              className="px-6 py-3 bg-[#E8523F] text-white text-center text-lg font-medium rounded-md"
            >
              Download
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
