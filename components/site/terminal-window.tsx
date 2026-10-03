'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface TerminalLine {
  type: 'prompt' | 'output' | 'status' | 'success' | 'error' | 'info' | 'divider';
  text: string;
  indent?: boolean;
}

interface TerminalSession {
  lines: TerminalLine[];
  typingSpeed?: number;
}

interface TerminalWindowProps {
  title?: string;
  sessions?: TerminalSession[];
  autoPlay?: boolean;
  loop?: boolean;
  className?: string;
}

const DEFAULT_SESSION: TerminalSession = {
  typingSpeed: 25,
  lines: [
    { type: 'prompt', text: 'm31a' },
    { type: 'output', text: '' },
    { type: 'info', text: 'M31A — M31 Autonomous' },
    { type: 'info', text: 'v0.1.1 PRODUCTION' },
    { type: 'output', text: '' },
    { type: 'status', text: '● EXECUTING' },
    { type: 'output', text: 'model: reasoning' },
    { type: 'output', text: 'task: inspect repository structure' },
    { type: 'output', text: '' },
    { type: 'status', text: '◐ planning' },
    { type: 'status', text: '◐ reading workspace' },
    { type: 'status', text: '◐ running tools' },
    { type: 'success', text: '✓ verification passed' },
    { type: 'output', text: '' },
    { type: 'success', text: '✓ task complete — 4 files modified' },
  ],
};

const lineStyles: Record<TerminalLine['type'], string> = {
  prompt: 'text-foreground font-medium',
  output: 'text-muted-foreground',
  status: 'text-primary',
  success: 'text-emerald-400',
  error: 'text-red-400',
  info: 'text-foreground',
  divider: 'text-border',
};

const linePrefix: Record<TerminalLine['type'], string> = {
  prompt: '$ ',
  output: '',
  status: '  ',
  success: '  ',
  error: '  ',
  info: '  ',
  divider: '',
};

export function TerminalWindow({
  title = 'm31a — cockpit',
  sessions = [DEFAULT_SESSION],
  autoPlay = true,
  loop = false,
  className,
}: TerminalWindowProps) {
  const [visibleLines, setVisibleLines] = useState<TerminalLine[]>([]);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const sessionIdx = useRef(0);
  const lineIdx = useRef(0);
  const charIdx = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!autoPlay) return;

    const session = sessions[sessionIdx.current % sessions.length];
    const speed = session.typingSpeed ?? 25;

    if (lineIdx.current >= session.lines.length) {
      if (loop) {
        const timer = setTimeout(() => {
          setVisibleLines([]);
          setCurrentText('');
          lineIdx.current = 0;
          charIdx.current = 0;
          sessionIdx.current++;
        }, 3000);
        return () => clearTimeout(timer);
      }
      setIsTyping(false);
      return;
    }

    const line = session.lines[lineIdx.current];
    const fullText = linePrefix[line.type] + line.text;

    if (charIdx.current < fullText.length) {
      setIsTyping(true);
      const timer = setTimeout(() => {
        setCurrentText(fullText.slice(0, charIdx.current + 1));
        charIdx.current++;
      }, speed);
      return () => clearTimeout(timer);
    } else {
      setVisibleLines((prev) => [...prev, line]);
      setCurrentText('');
      lineIdx.current++;
      charIdx.current = 0;

      const timer = setTimeout(() => {}, line.type === 'prompt' ? 300 : 100);
      return () => clearTimeout(timer);
    }
  }, [visibleLines, currentText, autoPlay, loop, sessions]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [visibleLines, currentText]);

  const currentLine =
    visibleLines.length < (sessions[sessionIdx.current % sessions.length]?.lines.length ?? 0)
      ? sessions[sessionIdx.current % sessions.length]?.lines[lineIdx.current]
      : null;

  return (
    <div
      className={cn(
        'overflow-hidden rounded-xl border border-border bg-card/80 backdrop-blur-sm',
        'shadow-2xl shadow-black/40',
        className
      )}
    >
      <div className="flex items-center gap-2 border-b border-border/60 bg-secondary/50 px-4 py-2.5">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-500/70" />
          <div className="h-3 w-3 rounded-full bg-amber-500/70" />
          <div className="h-3 w-3 rounded-full bg-emerald-500/70" />
        </div>
        <span className="ml-2 font-mono text-xs text-muted-foreground">{title}</span>
      </div>

      <div
        ref={containerRef}
        className="h-[340px] overflow-y-auto p-4 font-mono text-sm leading-relaxed"
      >
        {visibleLines.map((line, i) => (
          <div
            key={i}
            className={cn(
              'whitespace-pre-wrap',
              lineStyles[line.type],
              line.indent && 'pl-4'
            )}
          >
            {linePrefix[line.type] + line.text}
          </div>
        ))}
        {currentLine && isTyping && (
          <div className={cn('whitespace-pre-wrap', lineStyles[currentLine.type])}>
            {currentText}
            <span className="animate-blink text-primary">▎</span>
          </div>
        )}
        {!currentLine && !isTyping && autoPlay && (
          <div className="text-primary">
            <span className="animate-blink">▎</span>
          </div>
        )}
      </div>
    </div>
  );
}
