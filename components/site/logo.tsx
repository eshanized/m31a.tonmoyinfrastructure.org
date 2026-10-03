import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn('font-display font-bold tracking-tight', className)}>
      <span className="text-[#FF4B2C]">M31</span>
      <span className="text-[#ECE7DC]">A</span>
    </span>
  );
}

/**
 * M31A mark — decision gate: two converging rails into a single
 * authorized path. Works as favicon / nav / status / footer mark.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn('h-8 w-8', className)}
      fill="none"
      aria-hidden="true"
      role="presentation"
    >
      <rect x="1.5" y="1.5" width="29" height="29" rx="2" fill="#141311" stroke="#3B362C" strokeWidth="1" />
      {/* converging rails: model proposals → gate */}
      <path d="M7 8 L13 16 L7 24" stroke="#6E6860" strokeWidth="1.6" strokeLinecap="square" strokeLinejoin="miter" />
      <path d="M12 8 L18 16 L12 24" stroke="#6E6860" strokeWidth="1.6" strokeLinecap="square" strokeLinejoin="miter" />
      {/* authorized path */}
      <path d="M20 16 H26" stroke="#FF4B2C" strokeWidth="2" strokeLinecap="square" />
      <rect x="18.2" y="14.2" width="3.6" height="3.6" fill="#FF4B2C" />
    </svg>
  );
}

/**
 * GitHub mark — lucide-react removed brand icons, so the mark is inline.
 * Keeps the technical nav free of heavy icon dependencies.
 */
export function GithubMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={cn('h-4 w-4', className)}
      fill="currentColor"
      aria-hidden="true"
      role="presentation"
    >
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  );
}
