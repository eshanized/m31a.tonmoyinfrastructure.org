'use client';

import React from 'react';
import Link from 'next/link';
import { LogoMark } from './logo';
import { FOOTER_LINKS } from '@/lib/m31a/nav';
import { useLatestVersion } from '@/hooks/use-latest-version';

export function SiteFooter() {
  const { displayVersion } = useLatestVersion();
  return (
    <footer className="border-t border-[#222226] bg-[#070709] pt-16 pb-12 relative overflow-hidden">
      {/* Top Precision Laser Edge Accent */}
      <div 
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-[#E8523F]/40 to-transparent"
        aria-hidden="true"
      />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1 flex flex-col gap-5">
            <Link href="/" className="inline-flex items-center gap-2 group">
              <LogoMark className="w-9 h-9 transition-transform group-hover:scale-105" />
              <span className="font-mono text-sm font-bold text-[#F4F4F6] tracking-tight">M31A</span>
            </Link>
            <p className="font-mono text-xs text-[#9E9EA8] leading-relaxed">
              &quot;The model proposes.
              <br />
              <span className="text-[#E8523F] font-semibold">The runtime decides.&quot;</span>
            </p>
            <div className="flex items-center gap-2 text-[11px] font-mono text-[#3ECF8E] bg-[#3ECF8E]/5 border border-[#3ECF8E]/20 px-2.5 py-1 rounded-md w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3ECF8E] animate-pulse" />
              <span>SYSTEM OPERATIONAL</span>
            </div>
          </div>

          {/* Links Columns */}
          <div className="col-span-1 md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-[#F4F4F6] text-xs font-mono tracking-wider uppercase">Product</h3>
              <ul className="flex flex-col gap-2.5">
                {FOOTER_LINKS.product.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-[#9E9EA8] hover:text-[#E8523F] text-xs sm:text-sm transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-[#F4F4F6] text-xs font-mono tracking-wider uppercase">Resources</h3>
              <ul className="flex flex-col gap-2.5">
                {FOOTER_LINKS.resources.map((link) => {
                  const isExt = link.href.startsWith('http');
                  return (
                    <li key={link.href}>
                      {isExt ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="text-[#9E9EA8] hover:text-[#E8523F] text-xs sm:text-sm transition-colors flex items-center gap-1"
                        >
                          <span>{link.label}</span>
                          <span className="text-[10px]">↗</span>
                        </a>
                      ) : (
                        <Link href={link.href} className="text-[#9E9EA8] hover:text-[#E8523F] text-xs sm:text-sm transition-colors">
                          {link.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-[#F4F4F6] text-xs font-mono tracking-wider uppercase">Connect</h3>
              <ul className="flex flex-col gap-2.5">
                {FOOTER_LINKS.connect.map((link) => {
                  const isExt = link.href.startsWith('http');
                  return (
                    <li key={link.href}>
                      {isExt ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="text-[#9E9EA8] hover:text-[#E8523F] text-xs sm:text-sm transition-colors flex items-center gap-1"
                        >
                          <span>{link.label}</span>
                          <span className="text-[10px]">↗</span>
                        </a>
                      ) : (
                        <Link href={link.href} className="text-[#9E9EA8] hover:text-[#E8523F] text-xs sm:text-sm transition-colors">
                          {link.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#1E1E22] flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-[#65656E]">
          <div>
            &copy; {new Date().getFullYear()} M31A Contributors. Maintained by Tonmoy Infrastructure &amp; Vision.
          </div>
          <div className="flex items-center gap-3">
            <span>Dual License: MIT / Apache-2.0</span>
            <span>·</span>
            <span className="text-[#E8523F] font-semibold bg-[#E8523F]/10 border border-[#E8523F]/25 px-2 py-0.5 rounded">
              {displayVersion}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
