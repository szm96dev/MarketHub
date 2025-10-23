import React from 'react';

const PageContainer = ({ 
  children, 
  maxWidth = 'xl',
  className = ''
}) => {
  const maxWidthClasses = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    '2xl': 'max-w-8xl',
  };

  return (
    <div className={`min-h-screen bg-bg-primary dark:bg-dark-bg-primary py-8 ${className}`}>
      <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${maxWidthClasses[maxWidth]}`}>
        {children}
      </div>
    </div>
  );
};

export default PageContainer;