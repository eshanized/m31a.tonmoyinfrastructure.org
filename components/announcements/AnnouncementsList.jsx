'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Tag, ArrowRight, ExternalLink, Shield, Cpu, Code2 } from 'lucide-react';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

const CATEGORY_ICONS = {
  Release: Tag,
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
    <div className="space-y-10">
      {/* Featured Announcement Card */}
      {featured && selectedCategory === 'All' && (
        <Card
          variant="default"
          className="p-6 sm:p-8 bg-surface border border-border relative overflow-hidden"
        >
          <div className="space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Badge variant="default">
                  Featured
                </Badge>
                <Badge variant="accent">
                  {featured.badge || featured.category}
                </Badge>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-foreground-subtle font-mono tabular-nums">
                <Calendar className="w-3.5 h-3.5" />
                <span>{new Date(featured.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
            </div>

            <div className="max-w-3xl space-y-2">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-foreground text-balance">
                {featured.title}
              </h2>
              <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed">
                {featured.summary}
              </p>
            </div>

            {featured.content && featured.content.length > 0 && (
              <ul className="space-y-1.5 pt-2 border-t border-border">
                {featured.content.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-foreground-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-1.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="pt-3 flex flex-wrap items-center justify-between gap-4">
              {featured.author && (
                <div className="flex items-center gap-2.5">
                  <div className="relative w-7 h-7 rounded-full overflow-hidden border border-border bg-surface-muted">
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
                    <div className="font-medium text-foreground">{featured.author.name}</div>
                    <div className="text-foreground-subtle text-[11px]">{featured.author.role}</div>
                  </div>
                </div>
              )}

              {featured.action && (
                <Button
                  href={featured.action.href}
                  variant="primary"
                  size="sm"
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

      {/* Category Filter */}
      <div className="flex flex-wrap items-center gap-1.5 border-b border-border pb-3">
        <span className="text-xs font-mono font-medium text-foreground-subtle mr-2">Filter:</span>
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          const Icon = CATEGORY_ICONS[cat];
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                isActive
                  ? 'bg-foreground text-background font-semibold'
                  : 'bg-surface border border-border text-foreground-muted hover:text-foreground hover:border-border-strong'
              }`}
            >
              {Icon && <Icon className="w-3.5 h-3.5" />}
              <span>{cat}</span>
              <span className="ml-0.5 opacity-60 text-[10px] font-mono tabular-nums">
                {cat === 'All' ? announcements.length : announcements.filter((a) => a.category === cat).length}
              </span>
            </button>
          );
        })}
      </div>

      {/* Announcements List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
        {filtered.map((item) => {
          const Icon = CATEGORY_ICONS[item.category] || Tag;
          return (
            <Card
              key={item.id}
              variant="default"
              className="p-5 sm:p-6 bg-surface border border-border flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-accent-subtle text-accent text-xs font-medium border border-accent/20">
                    <Icon className="w-3 h-3" />
                    <span>{item.category}</span>
                  </span>

                  <span className="text-xs text-foreground-subtle font-mono flex items-center gap-1 tabular-nums">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-foreground leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-foreground-muted leading-relaxed">
                    {item.summary}
                  </p>
                </div>

                {item.content && item.content.length > 0 && (
                  <div className="pt-2 border-t border-border space-y-1">
                    {item.content.map((c, i) => (
                      <div key={i} className="text-xs text-foreground-muted flex items-start gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-accent mt-1.5 shrink-0" />
                        <span className="line-clamp-2">{c}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-4 pt-3 border-t border-border flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {(item.tags || []).slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-surface-muted text-foreground-subtle border border-border"
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
                      className="text-xs font-medium text-accent hover:underline inline-flex items-center gap-1"
                    >
                      <span>{item.action.label}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <Link
                      href={item.action.href}
                      className="text-xs font-medium text-accent hover:underline inline-flex items-center gap-1"
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
