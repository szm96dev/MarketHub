import React from 'react';

const LoadingSpinner = ({ size = 40, message = "Loading..." }) => {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div 
        className="animate-spin rounded-full border-4 border-border-primary dark:border-dark-border-primary border-t-brand-primary dark:border-t-dark-interactive-primary"
        style={{ width: size, height: size }}
      />
      {message && (
        <p className="mt-4 text-text-secondary dark:text-dark-text-secondary text-center">
          {message}
        </p>
      )}
    </div>
  );
};

export default LoadingSpinner;