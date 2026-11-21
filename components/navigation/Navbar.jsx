import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
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
    <header className="sticky top-0 z-40 w-full glass-nav border-b border-border transition-colors">
      <Container size="default" className="flex items-center justify-between h-14">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group focus-visible:outline-none"
          aria-label="M31A Homepage"
        >
          <div className="relative w-7 h-7 flex items-center justify-center rounded-md bg-surface-muted border border-border group-hover:border-border-strong transition-colors overflow-hidden">
            <Image
              src="/brand/m31a-logo.svg"
              alt="M31A Logo"
              width={18}
              height={18}
              className="w-4 h-4 object-contain"
              priority
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-sm tracking-tight text-foreground leading-none">
              M31A
            </span>
            <span className="text-[10px] font-mono font-medium px-1.5 py-0.5 rounded bg-surface-muted text-foreground-subtle border border-border tabular-nums">
              v{version}
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
                  className="text-xs sm:text-sm font-normal text-foreground-muted hover:text-foreground transition-colors"
                >
                  {item.name}
                </a>
              );
            }
            return (
              <Link
                key={item.name}
                href={item.href}
                className="text-xs sm:text-sm font-normal text-foreground-muted hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-2.5">
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
            className="border border-border hover:border-border-strong px-2.5"
          >
            <span className="font-medium text-xs font-mono tabular-nums">
              ★ {repoMetrics.stargazers_count}
            </span>
          </Button>

          <Button
            href="/features"
            variant="primary"
            size="sm"
            icon={ArrowRight}
            iconPosition="right"
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
