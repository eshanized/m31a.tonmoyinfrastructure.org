import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

/**
 * Numbered editorial section shell.
 * Left-anchored index rail + title block; right side is free composition.
 */
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
  index: string;
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
      className={cn('border-t border-[#2A2721]', className)}
    >
      <div className="mx-auto max-w-[1280px] px-4 py-14 sm:px-6 sm:py-20">
        <div className="sys-grid">
          {/* index rail */}
          <div className="col-span-12 md:col-span-2">
            <div className="flex items-baseline gap-3 md:sticky md:top-20 md:flex-col md:gap-1">
              <span className="tech-num text-base">[{index}]</span>
              <span className="meta">{eyebrow}</span>
            </div>
          </div>
          {/* title + body */}
          <div className="col-span-12 md:col-span-10">
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <h2
                  id={id ? `${id}-title` : undefined}
                  className="display-lg text-3xl text-[#ECE7DC] sm:text-4xl"
                >
                  {title}
                </h2>
                {lede && (
                  <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-[#A8A198]">
                    {lede}
                  </p>
                )}
                {aside && <div className="mt-6">{aside}</div>}
              </div>
              <div className="lg:col-span-7">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('mx-auto max-w-[1280px] px-4 sm:px-6', className)}>
      {children}
    </div>
  );
}

/** Legacy compat shims — route files may still import these names. */
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
    <section id={id} className={cn('border-t border-[#2A2721] py-14 sm:py-20', className)}>
      {children}
    </section>
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
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}) {
  return (
    <div className={cn('flex flex-col gap-3', className)}>
      {eyebrow && <span className="meta text-[#FF6B4A]">{eyebrow}</span>}
      <h2
        className={cn(
          'display-lg max-w-2xl text-3xl text-[#ECE7DC] sm:text-4xl',
          align === 'center' && 'mx-auto text-center'
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'max-w-2xl text-[0.95rem] leading-relaxed text-[#A8A198]',
            align === 'center' && 'mx-auto text-center'
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export function StatusBadge({ status, className }: { status: string; className?: string }) {
  const kind =
    status === 'Available' || status === 'Completed' || status === 'SUPPORTED' || status === 'Stable'
      ? 'st-ok'
      : status === 'In Progress' || status === 'Experimental' || status === 'CONDITIONALLY SUPPORTED' || status === 'Development'
        ? 'st-pend'
        : status === 'Planned' || status === 'Future' || status === 'COMPILE-ONLY'
          ? 'st-info'
          : 'st-idle';
  return <span className={cn('st', kind, className)}>{status}</span>;
}
