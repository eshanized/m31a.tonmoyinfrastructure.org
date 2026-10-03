'use client';

import React, { useState } from 'react';
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
      /* clipboard unavailable */
    }
  };

  return (
    <div className={cn('rounded-lg border border-[#222226] bg-[#111113] overflow-hidden text-sm', className)}>
      <div className="flex items-center justify-between border-b border-[#222226] bg-[#18181B]/60 px-4 py-2.5">
        <span className="font-mono text-xs text-[#A3A09B]">
          {filename ?? language ?? 'bash'}
        </span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs text-[#A3A09B] hover:text-[#F0EDE8] transition-colors"
          aria-label="Copy code to clipboard"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-[#3ECF8E]" aria-hidden="true" />
              <span className="text-[#3ECF8E]">Copied</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-xs sm:text-sm leading-relaxed text-[#F0EDE8]" tabIndex={0}>
        <code>{code}</code>
      </pre>
    </div>
  );
}
