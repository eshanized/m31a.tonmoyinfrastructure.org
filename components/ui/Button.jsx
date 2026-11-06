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
    'inline-flex items-center justify-center font-semibold btn-magnetic select-none rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden';

  const sizeClasses = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5 min-h-[34px]',
    md: 'text-sm px-5 py-2.5 gap-2 min-h-[44px]',
    lg: 'text-base px-7 py-3.5 gap-2.5 min-h-[52px]',
  };

  const variantClasses = {
    primary:
      'bg-foreground text-surface hover:bg-black shadow-md hover:shadow-lg',
    accent:
      'bg-accent text-white hover:bg-accent-hover shadow-md hover:shadow-accent/30',
    crimson:
      'bg-accent-crimson text-white hover:opacity-90 shadow-md hover:shadow-accent-crimson/30',
    secondary:
      'bg-surface-muted text-foreground hover:bg-border border border-border hover:border-border-strong',
    outline:
      'border border-border-strong text-foreground hover:border-foreground hover:bg-surface-muted/50',
    ghost:
      'text-foreground-muted hover:text-foreground hover:bg-surface-muted/80',
    dark:
      'bg-surface-card text-foreground-inverse border border-border-dark hover:bg-surface-dark shadow-md',
  };

  const combinedClasses = `${baseClasses} ${sizeClasses[size] || sizeClasses.md} ${variantClasses[variant] || variantClasses.primary} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && (
        <Icon className={size === 'sm' ? 'w-3.5 h-3.5' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} aria-hidden="true" />
      )}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && (
        <Icon className={size === 'sm' ? 'w-3.5 h-3.5' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} aria-hidden="true" />
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
