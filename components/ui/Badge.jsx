export default function Badge({
  children,
  variant = 'default',
  size = 'md',
  icon: Icon,
  className = '',
}) {
  const baseClasses =
    'inline-flex items-center font-medium rounded-md tracking-tight transition-colors select-none';

  const sizeClasses = {
    sm: 'text-[11px] px-2 py-0.5 gap-1',
    md: 'text-xs px-2.5 py-1 gap-1.5',
    lg: 'text-xs px-3 py-1.5 gap-2 font-medium',
  };

  const variantClasses = {
    default: 'bg-surface-muted text-foreground-muted border border-border',
    accent: 'bg-accent-subtle text-accent border border-accent/20',
    crimson: 'bg-red-500/10 text-accent-crimson border border-red-500/20',
    success: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20',
    warning: 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20',
    outline: 'border border-border text-foreground bg-transparent',
    dark: 'bg-surface-card text-foreground-muted border border-border',
  };

  return (
    <span
      className={`${baseClasses} ${sizeClasses[size] || sizeClasses.md} ${variantClasses[variant] || variantClasses.default} ${className}`}
    >
      {Icon ? <Icon className="w-3.5 h-3.5 shrink-0" aria-hidden="true" /> : null}
      <span>{children}</span>
    </span>
  );
}
