export default function Card({
  children,
  className = '',
  variant = 'default',
  hover = false,
  as: Component = 'div',
  ...props
}) {
  const baseClasses =
    'rounded-medium transition-all duration-300 relative overflow-hidden card-interactive';

  const variantClasses = {
    default: 'bg-surface border border-border shadow-sm',
    soft: 'bg-surface-muted/60 border border-border',
    flat: 'bg-surface-muted border border-border-subtle',
    dark: 'bg-surface-card border border-border-dark text-foreground-inverse shadow-md',
    terminal: 'bg-[#0d0f14] border border-[#232733] text-gray-200 shadow-xl',
  };

  const hoverClasses = hover
    ? 'hover:border-border-strong hover:shadow-md hover:-translate-y-0.5'
    : '';

  return (
    <Component
      className={`${baseClasses} ${variantClasses[variant] || variantClasses.default} ${hoverClasses} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
