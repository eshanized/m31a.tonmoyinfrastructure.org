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
    <div className="relative my-5 rounded-medium bg-[#0d0f14] border border-[#232733] overflow-hidden text-gray-200 shadow-md">
      {(filename || language) && (
        <div className="flex items-center justify-between px-4 py-2 bg-[#13161f] border-b border-[#232733] text-xs font-mono text-gray-400">
          <span>{filename || language}</span>
          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors"
            title="Copy code"
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
      <pre className="p-4 text-xs font-mono leading-relaxed overflow-x-auto whitespace-pre text-gray-200">
        <code>{code}</code>
      </pre>
    </div>
  );
}
