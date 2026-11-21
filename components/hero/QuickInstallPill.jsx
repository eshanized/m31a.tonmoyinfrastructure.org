'use client';

import { useState } from 'react';
import { Terminal, Check, Copy } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

export default function QuickInstallPill({ command = siteConfig.installCommand }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard?.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="mt-5 group inline-flex max-w-full items-center justify-center gap-2 text-xs text-foreground-muted font-mono bg-surface-muted hover:bg-surface px-3 py-1.5 rounded-md border border-border hover:border-border-strong transition-colors cursor-pointer select-none"
      title="Click to copy install command"
      aria-label="Click to copy install command"
    >
      <Terminal className="w-3.5 h-3.5 text-foreground-subtle shrink-0" aria-hidden="true" />
      <span className="truncate max-w-[170px] sm:max-w-xs md:max-w-none">{command}</span>
      <span className="p-0.5 text-foreground-subtle group-hover:text-foreground transition-colors shrink-0">
        {copied ? (
          <Check className="w-3.5 h-3.5 text-emerald-500" />
        ) : (
          <Copy className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
        )}
      </span>
      {copied && (
        <span className="text-[11px] font-sans font-medium text-emerald-500 shrink-0">
          Copied
        </span>
      )}
    </button>
  );
}
