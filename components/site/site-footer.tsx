import Link from 'next/link';
import { Github } from 'lucide-react';
import { Logo, LogoMark } from './logo';
import { FOOTER_LINKS } from '@/lib/m31a/nav';
import { PRODUCT } from '@/lib/m31a/product';

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <LogoMark className="h-7 w-7" />
              <Logo className="text-lg" />
            </Link>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Autonomous software engineering, from the terminal.
            </p>
            <p className="mt-2 text-xs text-muted-foreground/70">
              v{PRODUCT.version} · {PRODUCT.orgName}
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Product
            </h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Community
            </h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.community.map((link) => {
                const isExternal = link.href.startsWith('http');
                return (
                  <li key={link.href}>
                    {isExternal ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Legal
            </h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {PRODUCT.orgName}. Dual-licensed under MIT OR Apache-2.0.
          </p>
          <a
            href={PRODUCT.repositoryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <Github className="h-3.5 w-3.5" />
            github.com/eshanized/M31A
          </a>
        </div>
      </div>
    </footer>
  );
}
