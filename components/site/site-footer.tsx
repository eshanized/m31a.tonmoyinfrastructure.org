import Link from 'next/link';
import { LogoMark } from './logo';
import { FOOTER_LINKS } from '@/lib/m31a/nav';
import { PRODUCT } from '@/lib/m31a/product';

function LinkList({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="meta mb-3">{title}</h3>
      <ul className="space-y-1.5">
        {links.map((link) => {
          const external = link.href.startsWith('http');
          const cls =
            'font-mono text-xs tracking-wide text-[#A8A198] transition-colors hover:text-[#ECE7DC]';
          return (
            <li key={link.label + link.href}>
              {external ? (
                <a href={link.href} target="_blank" rel="noopener noreferrer" className={cls}>
                  {link.label}
                </a>
              ) : (
                <Link href={link.href} className={cls}>
                  {link.label}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-[#2A2721] bg-[#0D0C0A]">
      <div className="mx-auto max-w-[1280px] px-4 py-10 sm:px-6">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-2" aria-label="M31A home">
              <LogoMark className="h-6 w-6" />
              <span className="font-display text-base font-bold tracking-tight">
                <span className="text-[#FF4B2C]">M31</span>
                <span className="text-[#ECE7DC]">A</span>
              </span>
              <span className="meta ml-1">M31 AUTONOMOUS</span>
            </Link>
            <p className="display-lg mt-5 max-w-sm text-xl leading-snug text-[#ECE7DC]">
              THE MODEL PROPOSES.
              <br />
              <span className="text-[#FF4B2C]">THE RUNTIME DECIDES.</span>
            </p>
            <p className="mono-val mt-4 text-[11px] leading-relaxed text-[#6E6860]">
              v{PRODUCT.version} · PRODUCTION · {PRODUCT.canonicalProvider}
              <br />
              RUST {PRODUCT.rustVersion} · {PRODUCT.licenses.join(' / ')}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-7">
            <LinkList title="RUNTIME" links={FOOTER_LINKS.runtime} />
            <LinkList title="ASSURANCE" links={FOOTER_LINKS.assurance} />
            <LinkList title="SOURCE" links={FOOTER_LINKS.source} />
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-[#2A2721] pt-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="mono-val text-[11px] text-[#6E6860]">
            © {new Date().getFullYear()} {PRODUCT.orgName} · DUAL-LICENSED MIT / APACHE-2.0
          </p>
          <p className="mono-val text-[11px] text-[#6E6860]">
            BUILD M31A-{PRODUCT.version} · CHANNEL PRODUCTION · REPO eshanized/M31A
          </p>
        </div>
      </div>
    </footer>
  );
}
