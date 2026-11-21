import Link from 'next/link';

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconPosition = 'left',
  disabled = false,
  target,
  rel,
  type = 'button',
  ariaLabel,
  ...props
}) {
  const baseClasses =
    'inline-flex items-center justify-center font-medium select-none rounded-lg focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent focus-visible:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-150 active:scale-[0.98] shrink-0 text-balance';

  const sizeClasses = {
    sm: 'text-xs h-8 px-3 gap-1.5',
    md: 'text-xs sm:text-sm h-9 px-3.5 gap-2',
    lg: 'text-sm h-11 px-5 gap-2.5',
  };

  const variantClasses = {
    primary:
      'bg-foreground text-background hover:bg-foreground/90 shadow-xs btn-depth-dark',
    accent:
      'bg-accent text-white hover:bg-accent-hover shadow-xs',
    crimson:
      'bg-accent-crimson text-white hover:opacity-95 shadow-xs',
    secondary:
      'bg-surface-muted text-foreground hover:bg-border/60 border border-border',
    outline:
      'border border-border text-foreground hover:bg-surface-muted hover:border-border-strong',
    ghost:
      'text-foreground-muted hover:text-foreground hover:bg-surface-muted',
    dark:
      'bg-surface-card text-foreground border border-border hover:bg-surface-muted',
  };

  const combinedClasses = `${baseClasses} ${sizeClasses[size] || sizeClasses.md} ${variantClasses[variant] || variantClasses.primary} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && (
        <Icon className={size === 'sm' ? 'w-3.5 h-3.5' : size === 'lg' ? 'w-4 h-4' : 'w-4 h-4'} aria-hidden="true" />
      )}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && (
        <Icon className={size === 'sm' ? 'w-3.5 h-3.5' : size === 'lg' ? 'w-4 h-4' : 'w-4 h-4'} aria-hidden="true" />
      )}
    </>
  );

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('//');
    return (
      <Link
        href={href}
        className={combinedClasses}
        target={target || (isExternal ? '_blank' : undefined)}
        rel={rel || (isExternal ? 'noopener noreferrer' : undefined)}
        aria-label={ariaLabel}
        {...props}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      aria-label={ariaLabel}
      {...props}
    >
      {content}
    </button>
  );
}
