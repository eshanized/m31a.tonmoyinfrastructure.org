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
      className="mt-6 group flex items-center justify-center gap-2.5 text-xs text-foreground-muted font-mono bg-surface-muted/90 hover:bg-surface px-4 py-2 rounded-full border border-border hover:border-accent/40 shadow-xs transition-all duration-200 btn-magnetic"
      title="Click to copy install command"
      aria-label="Click to copy install command"
    >
      <Terminal className="w-3.5 h-3.5 text-accent-crimson shrink-0 group-hover:rotate-6 transition-transform" />
      <span>{command}</span>
      <span className="ml-1 p-0.5 text-foreground-subtle group-hover:text-accent transition-colors">
        {copied ? (
          <Check className="w-3.5 h-3.5 text-emerald-600 animate-fade-in" />
        ) : (
          <Copy className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
        )}
      </span>
      {copied && (
        <span className="text-[11px] font-sans font-semibold text-emerald-600 animate-fade-in">
          Copied!
        </span>
      )}
    </button>
  );
}
