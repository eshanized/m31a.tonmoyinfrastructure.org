export default function Container({ children, className = '', size = 'default' }) {
  const sizeClasses = {
    narrow: 'max-w-4xl',
    default: 'max-w-[1240px]',
    wide: 'max-w-7xl',
    full: 'max-w-full',
  };

  return (
    <div
      className={`mx-auto px-4 sm:px-6 lg:px-8 w-full ${sizeClasses[size] || sizeClasses.default} ${className}`}
    >
      {children}
    </div>
  );
}
