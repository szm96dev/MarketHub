import React from 'react';

const GlassCard = ({
  children,
  variant = 'default',
  size = 'md',
  padding = 'md',
  rounded = 'lg',
  hover = true,
  className = ''
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-brand-primary/10 border-brand-primary/20';
      case 'secondary':
        return 'bg-brand-secondary/10 border-brand-secondary/20';
      case 'accent':
        return 'bg-accent-primary/10 border-accent-primary/20';
      case 'success':
        return 'bg-green-500/10 border-green-500/20';
      case 'warning':
        return 'bg-yellow-500/10 border-yellow-500/20';
      case 'error':
        return 'bg-red-500/10 border-red-500/20';
      default:
        return 'bg-white/10 border-white/20 dark:bg-gray-800/10 dark:border-gray-700/20';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'w-48 h-32';
      case 'md':
        return 'w-64 h-40';
      case 'lg':
        return 'w-80 h-48';
      case 'xl':
        return 'w-96 h-56';
      default:
        return 'w-full h-auto';
    }
  };

  const getPaddingClasses = () => {
    switch (padding) {
      case 'sm':
        return 'p-3';
      case 'md':
        return 'p-4';
      case 'lg':
        return 'p-6';
      case 'xl':
        return 'p-8';
      default:
        return 'p-4';
    }
  };

  const getRoundedClasses = () => {
    switch (rounded) {
      case 'sm':
        return 'rounded-sm';
      case 'md':
        return 'rounded-md';
      case 'lg':
        return 'rounded-lg';
      case 'xl':
        return 'rounded-xl';
      case '2xl':
        return 'rounded-2xl';
      case 'full':
        return 'rounded-full';
      default:
        return 'rounded-lg';
    }
  };

  return (
    <div
      className={`
        ${getSizeClasses()}
        ${getVariantClasses()}
        ${getPaddingClasses()}
        ${getRoundedClasses()}
        shadow-xl
        glass-effect
        ${hover ? 'hover:shadow-2xl transition-all duration-300 hover:-translate-y-1' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default GlassCard;