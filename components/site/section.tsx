import React, { type ReactNode } from 'react';
import { cn } from '@/lib/utils';

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('mx-auto max-w-6xl px-6 sm:px-8', className)}>
      {children}
    </div>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: {
  eyebrow?: string;
  title: string | ReactNode;
  description?: string | ReactNode;
  align?: 'left' | 'center';
  className?: string;
}) {
  return (
    <div className={cn('flex flex-col gap-3', align === 'center' ? 'items-center text-center' : 'items-start text-left', className)}>
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-wider text-[#E8523F]">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-[#F0EDE8] sm:text-4xl">
        {title}
      </h2>
      {description && (
        <div className="max-w-2xl text-base leading-relaxed text-[#A3A09B]">
          {description}
        </div>
      )}
    </div>
  );
}

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn('py-20 sm:py-28 border-t border-[#222226]', className)}>
      <Container>{children}</Container>
    </section>
  );
}

export function SysSection({
  index,
  id,
  eyebrow,
  title,
  lede,
  children,
  className,
  aside,
}: {
  index?: string;
  id?: string;
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  children: ReactNode;
  className?: string;
  aside?: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={id ? `${id}-title` : undefined}
      className={cn('py-20 sm:py-28 border-t border-[#222226]', className)}
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              {index && (
                <span className="text-xs font-mono text-[#E8523F] font-semibold">{index}</span>
              )}
              <span className="text-xs font-semibold uppercase tracking-wider text-[#E8523F]">
                {eyebrow}
              </span>
            </div>
            <h2
              id={id ? `${id}-title` : undefined}
              className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F0EDE8] leading-tight"
            >
              {title}
            </h2>
            {lede && (
              <div className="text-base leading-relaxed text-[#A3A09B]">
                {lede}
              </div>
            )}
            {aside && <div className="mt-4">{aside}</div>}
          </div>
          <div className="lg:col-span-8">{children}</div>
        </div>
      </Container>
    </section>
  );
}

export function StatusBadge({ status, className }: { status: string; className?: string }) {
  const isAvailable = status === 'Available' || status === 'Completed' || status === 'SUPPORTED' || status === 'Stable';
  const isPending = status === 'In Progress' || status === 'Experimental' || status === 'CONDITIONALLY SUPPORTED' || status === 'Development';
  
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border',
        isAvailable
          ? 'bg-[#3ECF8E]/10 border-[#3ECF8E]/30 text-[#3ECF8E]'
          : isPending
          ? 'bg-[#EAB308]/10 border-[#EAB308]/30 text-[#EAB308]'
          : 'bg-[#1E1E22] border-[#2C2C31] text-[#A3A09B]',
        className
      )}
    >
      <span
        className={cn(
          'w-1.5 h-1.5 rounded-full',
          isAvailable ? 'bg-[#3ECF8E]' : isPending ? 'bg-[#EAB308]' : 'bg-[#6B6965]'
        )}
      />
      {status}
    </span>
  );
}
