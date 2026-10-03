'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  className?: string;
}

export function CodeBlock({ code, language, filename, className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — no-op */
    }
  };

  return (
    <div className={cn('tick-panel overflow-hidden', className)}>
      <div className="flex items-center justify-between border-b border-[#2A2721] bg-[#1B1A17] px-3 py-1.5">
        <span className="mono-val text-[11px] text-[#6E6860]">
          {filename ?? language ?? 'code'}
        </span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-[#6E6860] transition-colors hover:text-[#ECE7DC]"
          aria-label="Copy code to clipboard"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-[#4CC38A]" aria-hidden="true" />
              <span className="text-[#4CC38A]">Copied</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-[13px] leading-relaxed text-[#ECE7DC]" tabIndex={0}>
        <code>{code}</code>
      </pre>
    </div>
  );
}
