import React from 'react';
import Link from 'next/link';
import { LogoMark } from './logo';
import { FOOTER_LINKS } from '@/lib/m31a/nav';

export function SiteFooter() {
  return (
    <footer className="border-t border-[#222226] bg-[#0A0A0B] pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1 flex flex-col gap-6">
            <Link href="/" className="inline-block">
              <LogoMark className="w-10 h-10" />
            </Link>
            <p className="font-serif text-[#A3A09B] text-lg italic">
              "The model proposes.<br />The runtime decides."
            </p>
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
                          className="text-[#9E9EA8] hover:text-[#E8523F] text-xs sm:text-sm transition-colors"
                        >
                          {link.label} ↗
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
                          className="text-[#9E9EA8] hover:text-[#E8523F] text-xs sm:text-sm transition-colors"
                        >
                          {link.label} ↗
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
          <div className="flex items-center gap-4">
            <span>Dual License: MIT / Apache-2.0</span>
            <span>·</span>
            <span className="text-[#E8523F]">v0.1.1</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
