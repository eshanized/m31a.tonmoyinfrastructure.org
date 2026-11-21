'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export default function CodeBlock({ code, language = 'bash', filename }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard?.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative my-4 rounded-lg bg-[#0b0d13] border border-[#222838] overflow-hidden text-gray-200">
      {(filename || language) && (
        <div className="flex items-center justify-between px-3.5 py-1.5 bg-[#121622] border-b border-[#222838] text-xs font-mono text-gray-400">
          <span>{filename || language}</span>
          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors p-0.5"
            title="Copy code"
            aria-label="Copy code"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-[11px] text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span className="text-[11px]">Copy</span>
              </>
            )}
          </button>
        </div>
      )}
      <pre className="p-3.5 text-xs font-mono leading-relaxed overflow-x-auto whitespace-pre text-gray-200">
        <code>{code}</code>
      </pre>
    </div>
  );
}
