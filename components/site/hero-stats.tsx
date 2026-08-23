'use client';

import { useEffect, useRef, useState } from 'react';
import { GitCommit, CircleDot, GitPullRequest } from 'lucide-react';

interface HeroStatsProps {
  commits: number;
  issues: number;
  pullRequests: number;
}

interface AnimatedNumberProps {
  target: number;
  duration?: number;
}

function AnimatedNumber({ target, duration = 1500 }: AnimatedNumberProps) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (target === 0) return;
    const start = performance.now();
    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [target, duration]);

  return <>{value.toLocaleString()}</>;
}

export function HeroStats({ commits, issues, pullRequests }: HeroStatsProps) {
  const stats = [
    { icon: GitCommit, label: 'Commits', value: commits, color: 'text-primary' },
    { icon: CircleDot, label: 'Open Issues', value: issues, color: 'text-warning' },
    { icon: GitPullRequest, label: 'Open PRs', value: pullRequests, color: 'text-info' },
  ];

  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.label}
            className="flex items-center gap-2.5 rounded-lg border border-border bg-card/40 px-4 py-2.5 transition-colors hover:border-primary/30"
          >
            <Icon className={`h-4 w-4 ${stat.color}`} />
            <div className="flex flex-col">
              <span className="font-sans text-lg font-bold leading-none text-foreground">
                <AnimatedNumber target={stat.value} />
              </span>
              <span className="mt-0.5 font-sans text-[10px] uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
