import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, Heart } from 'lucide-react';
import GithubIcon from '@/components/ui/icons/GithubIcon';
import { siteConfig } from '@/lib/site-config';
import Container from '@/components/ui/Container';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerGroups = [
    {
      title: 'Product',
      links: [
        { label: 'Overview', href: '/' },
        { label: 'Features', href: '/features' },
        { label: 'Architecture', href: '/architecture' },
        { label: 'Announcements', href: '/announcements' },
        { label: 'Changelog', href: '/changelog' },
      ],
    },
    {
      title: 'Documentation',
      links: [
        { label: 'Official Docs', href: siteConfig.links.docs, external: true },
        { label: 'Quickstart Guide', href: `${siteConfig.links.github}#quickstart`, external: true },
        { label: 'Architecture Deep Dive', href: '/architecture' },
        { label: 'CLI Reference', href: siteConfig.links.docs, external: true },
        { label: 'Security & Sandbox', href: `${siteConfig.links.github}/blob/main/SECURITY.md`, external: true },
        { label: 'Contributing Guide', href: `${siteConfig.links.github}/blob/master/CONTRIBUTING.md`, external: true },
      ],
    },
    {
      title: 'Community',
      links: [
        { label: 'GitHub Repository', href: siteConfig.links.github, external: true },
        { label: 'Releases & Assets', href: siteConfig.links.releases, external: true },
        { label: 'Issue Tracker', href: siteConfig.links.issues, external: true },
        { label: 'Discussions Hub', href: siteConfig.links.discussions, external: true },
        { label: 'Community Hub', href: '/community' },
      ],
    },
    {
      title: 'Ecosystem',
      links: [
        { label: 'NVIDIA NIM Catalog', href: siteConfig.links.nvidiaNim, external: true },
        { label: 'crates.io (m31a-cli)', href: siteConfig.links.cratesIo, external: true },
        { label: 'npm (@m31a/sdk)', href: siteConfig.links.npmTsSdk, external: true },
        { label: 'PyPI (m31a)', href: siteConfig.links.pypiPythonSdk, external: true },
        { label: 'Tonmoy Infrastructure', href: 'https://tonmoyinfrastructure.org', external: true },
      ],
    },
  ];

  return (
    <footer className="w-full bg-background-soft border-t border-border mt-auto">
      <Container size="default" className="py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1 flex flex-col space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-surface border border-border shadow-xs">
                <Image
                  src="/brand/m31a-logo.svg"
                  alt="M31A Logo"
                  width={22}
                  height={22}
                  className="w-5 h-5 object-contain"
                />
              </div>
              <span className="font-bold text-lg text-foreground tracking-tight">
                M31A
              </span>
            </Link>

            <p className="text-xs text-foreground-muted leading-relaxed">
              Open-source autonomous coding system built with Rust 2024 and powered by NVIDIA NIM frontier models.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Repository"
                className="p-2 rounded-full bg-surface border border-border text-foreground-muted hover:text-foreground hover:border-border-strong transition-all"
              >
                <GithubIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Links Columns */}
          {footerGroups.map((group) => (
            <div key={group.title} className="flex flex-col space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">
                {group.title}
              </h3>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-foreground-muted hover:text-foreground transition-colors group"
                      >
                        <span>{link.label}</span>
                        <ExternalLink className="w-3 h-3 text-foreground-subtle group-hover:text-foreground" />
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-xs text-foreground-muted hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-foreground-subtle">
          <div className="flex flex-wrap items-center gap-4">
            <span>© {currentYear} Tonmoy Infrastructure & Vision. MIT Licensed.</span>
            <span>•</span>
            <span>Designed for Developer Autonomy</span>
          </div>

          <div className="flex items-center gap-1">
            <span>Engineered by</span>
            <a
              href="https://github.com/eshanized"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-muted hover:text-foreground font-semibold inline-flex items-center gap-1 transition-colors"
            >
              <span>Eshan Roy</span>
              <Heart className="w-3 h-3 text-accent-crimson fill-accent-crimson inline" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
