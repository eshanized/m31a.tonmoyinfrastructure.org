'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
  showCopy?: boolean;
}

export function CodeBlock({ code, language, className, showCopy = true }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn('group relative overflow-hidden rounded-lg border border-border bg-[hsl(220_20%_3%)]', className)}>
      {language && (
        <div className="flex items-center justify-between border-b border-border/60 bg-[hsl(220_18%_5%)] px-4 py-2">
          <span className="font-mono text-xs text-muted-foreground">{language}</span>
          {showCopy && (
            <button
              onClick={copy}
              className="flex items-center gap-1 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Copy code"
            >
              {copied ? <Check className="h-3 w-3 text-success" /> : <Copy className="h-3 w-3" />}
              {copied ? 'Copied' : 'Copy'}
            </button>
          )}
        </div>
      )}
      <div className="relative">
        <pre className="overflow-x-auto p-4 font-mono text-xs leading-relaxed sm:text-sm">
          <code className="text-foreground/90">{code}</code>
        </pre>
        {showCopy && !language && (
          <button
            onClick={copy}
            className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-md border border-border bg-background/80 text-muted-foreground opacity-0 transition-opacity hover:text-foreground group-hover:opacity-100"
            aria-label="Copy code"
          >
            {copied ? <Check className="h-3.5 w-3.5 text-success" /> : <Copy className="h-3.5 w-3.5" />}
          </button>
        )}
      </div>
    </div>
  );
}
