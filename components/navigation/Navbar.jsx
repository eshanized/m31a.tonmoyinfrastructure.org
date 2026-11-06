import Link from 'next/link';
import Image from 'next/image';
import { Sparkles } from 'lucide-react';
import GithubIcon from '@/components/ui/icons/GithubIcon';
import { siteConfig } from '@/lib/site-config';
import { getRepoMetrics, getLatestVersion } from '@/lib/github';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import ThemeToggle from '@/components/ui/ThemeToggle';
import NavigationDropdown from './NavigationDropdown';
import MobileNavigation from './MobileNavigation';

export default async function Navbar() {
  const [repoMetrics, version] = await Promise.all([
    getRepoMetrics(),
    getLatestVersion(),
  ]);

  return (
    <header className="sticky top-0 z-40 w-full bg-surface/85 backdrop-blur-md border-b border-border/80 transition-all">
      <Container size="default" className="flex items-center justify-between h-16">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group focus-visible:outline-none"
          aria-label="M31A Homepage"
        >
          <div className="relative w-8 h-8 flex items-center justify-center rounded-lg bg-surface-muted border border-border group-hover:border-accent-crimson/40 transition-colors overflow-hidden">
            <Image
              src="/brand/m31a-logo.svg"
              alt="M31A Logo"
              width={22}
              height={22}
              className="w-5 h-5 object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg tracking-tight text-foreground flex items-center gap-1.5 leading-none">
              M31A
              <span className="text-[10px] font-mono font-medium px-1.5 py-0.5 rounded bg-surface-muted text-foreground-subtle border border-border">
                v{version}
              </span>
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden lg:flex items-center gap-6"
          aria-label="Main Navigation"
        >
          {siteConfig.navigation.map((item) => {
            if (item.children) {
              return (
                <NavigationDropdown
                  key={item.name}
                  label={item.name}
                  items={item.children}
                  href={item.href}
                />
              );
            }
            if (item.isExternal) {
              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-foreground-muted hover:text-foreground transition-colors"
                >
                  {item.name}
                </a>
              );
            }
            return (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground-muted hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Dark Mode Theme Toggle */}
          <ThemeToggle />

          <Button
            href={siteConfig.links.github}
            variant="ghost"
            size="sm"
            icon={GithubIcon}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`GitHub Repository with ${repoMetrics.stargazers_count} stars`}
            className="border border-border hover:border-border-strong px-3 py-1.5"
          >
            <span className="font-semibold text-xs ml-1 font-mono">
              ★ {repoMetrics.stargazers_count}
            </span>
          </Button>

          <Button
            href="/features"
            variant="primary"
            size="sm"
            icon={Sparkles}
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Navigation */}
        <MobileNavigation
          navigation={siteConfig.navigation}
          siteConfig={siteConfig}
          repoMetrics={repoMetrics}
        />
      </Container>
    </header>
  );
}
