export default function Badge({
  children,
  variant = 'default',
  size = 'md',
  icon: Icon,
  className = '',
}) {
  const baseClasses =
    'inline-flex items-center font-medium rounded-full tracking-wide transition-colors';

  const sizeClasses = {
    sm: 'text-[11px] px-2.5 py-0.5 gap-1',
    md: 'text-xs px-3 py-1 gap-1.5',
    lg: 'text-sm px-3.5 py-1.5 gap-2',
  };

  const variantClasses = {
    default: 'bg-surface-muted text-foreground-muted border border-border',
    accent: 'bg-accent-subtle text-accent border border-accent/20',
    crimson: 'bg-red-50 text-accent-crimson border border-red-200',
    success: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
    warning: 'bg-amber-50 text-amber-700 border border-amber-200',
    outline: 'border border-border-strong text-foreground bg-transparent',
    dark: 'bg-surface-card text-foreground-inverse border border-border-dark',
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
