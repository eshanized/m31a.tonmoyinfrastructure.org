'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Tag, ArrowRight, ExternalLink, Sparkles, Shield, Cpu, Code2 } from 'lucide-react';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

const CATEGORY_ICONS = {
  Release: Sparkles,
  Ecosystem: Cpu,
  Security: Shield,
  'Developer Tools': Code2,
};

export default function AnnouncementsList({ announcements = [] }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [avatarError, setAvatarError] = useState(false);

  const categories = ['All', ...new Set(announcements.map((a) => a.category).filter(Boolean))];

  const filtered =
    selectedCategory === 'All'
      ? announcements
      : announcements.filter((a) => a.category === selectedCategory);

  const featured = announcements.find((a) => a.featured) || announcements[0];

  return (
    <div className="space-y-12">
      {/* Featured Announcement Card */}
      {featured && selectedCategory === 'All' && (
        <Card
          variant="default"
          className="p-8 sm:p-12 bg-gradient-to-br from-surface to-surface-muted border border-border shadow-md relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-radial-glow pointer-events-none opacity-60" />

          <div className="relative z-10 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Badge variant="crimson" className="animate-shimmer">
                  Featured Announcement
                </Badge>
                <Badge variant="accent">
                  {featured.badge || featured.category}
                </Badge>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-foreground-subtle font-mono">
                <Calendar className="w-3.5 h-3.5" />
                <span>{new Date(featured.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
            </div>

            <div className="max-w-3xl space-y-3">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground text-balance">
                {featured.title}
              </h2>
              <p className="text-sm sm:text-base text-foreground-muted leading-relaxed">
                {featured.summary}
              </p>
            </div>

            {featured.content && featured.content.length > 0 && (
              <ul className="space-y-2 pt-2 border-t border-border">
                {featured.content.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-crimson shrink-0 mt-2" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="pt-4 flex flex-wrap items-center justify-between gap-4">
              {featured.author && (
                <div className="flex items-center gap-2.5">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden border border-border bg-surface-muted">
                    <Image
                      src={avatarError ? '/brand/m31a-logo.svg' : (featured.author.avatar || '/brand/m31a-logo.svg')}
                      alt={featured.author.name}
                      fill
                      unoptimized
                      className="object-cover"
                      onError={() => setAvatarError(true)}
                    />
                  </div>
                  <div className="text-xs">
                    <div className="font-semibold text-foreground">{featured.author.name}</div>
                    <div className="text-foreground-subtle">{featured.author.role}</div>
                  </div>
                </div>
              )}

              {featured.action && (
                <Button
                  href={featured.action.href}
                  variant="primary"
                  size="md"
                  icon={ArrowRight}
                  iconPosition="right"
                >
                  {featured.action.label}
                </Button>
              )}
            </div>
          </div>
        </Card>
      )}

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 border-b border-border pb-4">
        <span className="text-xs font-mono font-medium text-foreground-subtle mr-2">Filter by:</span>
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          const Icon = CATEGORY_ICONS[cat];
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 btn-magnetic ${
                isActive
                  ? 'bg-foreground text-background shadow-xs'
                  : 'bg-surface border border-border text-foreground-muted hover:text-foreground hover:border-border-strong'
              }`}
            >
              {Icon && <Icon className="w-3.5 h-3.5" />}
              <span>{cat}</span>
              <span className="ml-1 opacity-60 text-[10px] font-mono">
                {cat === 'All' ? announcements.length : announcements.filter((a) => a.category === cat).length}
              </span>
            </button>
          );
        })}
      </div>

      {/* Announcements List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {filtered.map((item) => {
          const Icon = CATEGORY_ICONS[item.category] || Sparkles;
          return (
            <Card
              key={item.id}
              variant="default"
              className="p-6 sm:p-8 bg-surface border border-border hover:border-accent/40 shadow-xs flex flex-col justify-between transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent-subtle text-accent text-xs font-semibold border border-accent/20">
                    <Icon className="w-3 h-3" />
                    <span>{item.category}</span>
                  </span>

                  <span className="text-xs text-foreground-subtle font-mono flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-foreground-muted leading-relaxed">
                    {item.summary}
                  </p>
                </div>

                {item.content && item.content.length > 0 && (
                  <div className="pt-3 border-t border-border space-y-1.5">
                    {item.content.map((c, i) => (
                      <div key={i} className="text-xs text-foreground-muted flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                        <span className="line-clamp-2">{c}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {(item.tags || []).slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-muted text-foreground-subtle border border-border"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {item.action && (
                  item.action.href.startsWith('http') ? (
                    <a
                      href={item.action.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-accent hover:underline inline-flex items-center gap-1"
                    >
                      <span>{item.action.label}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <Link
                      href={item.action.href}
                      className="text-xs font-semibold text-accent hover:underline inline-flex items-center gap-1"
                    >
                      <span>{item.action.label}</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  )
                )}
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
