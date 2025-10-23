import React from 'react';

const GradientButton = ({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  onClick,
  type = 'button',
  className = ''
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-interactive-primary-hover hover:to-brand-secondary';
      case 'secondary':
        return 'bg-gradient-to-r from-brand-secondary to-accent-primary hover:from-brand-secondary hover:to-accent-secondary';
      case 'accent':
        return 'bg-gradient-to-r from-accent-primary to-accent-secondary hover:from-accent-primary hover:to-accent-secondary';
      case 'success':
        return 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700';
      case 'warning':
        return 'bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600';
      case 'error':
        return 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700';
      default:
        return 'bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-interactive-primary-hover hover:to-brand-secondary';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-4 py-2 text-sm';
      case 'md':
        return 'px-6 py-3 text-base';
      case 'lg':
        return 'px-8 py-4 text-lg';
      case 'xl':
        return 'px-10 py-5 text-xl';
      default:
        return 'px-6 py-3 text-base';
    }
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        ${getVariantClasses()}
        text-white font-semibold rounded-lg
        shadow-lg hover:shadow-xl
        transform hover:-translate-y-0.5
        transition-all duration-300
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary
        disabled:opacity-50 disabled:cursor-not-allowed
        disabled:transform-none disabled:hover:translate-y-0
        ${getSizeClasses()}
        ${className}
      `}
    >
      {loading ? (
        <div className="flex items-center justify-center">
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Loading...
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default GradientButton;