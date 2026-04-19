import React, { useEffect, useState } from 'react';

const SmartImage = ({
  src,
  alt,
  className = '',
  imgClassName = '',
  fallbackLabel = 'Image unavailable',
}) => {
  const [isLoading, setIsLoading] = useState(Boolean(src));
  const [hasError, setHasError] = useState(!src);

  useEffect(() => {
    setIsLoading(Boolean(src));
    setHasError(!src);
  }, [src]);

  const showPlaceholder = hasError || !src;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {showPlaceholder ? (
        <div className="flex h-full w-full flex-col items-center justify-center bg-bg-secondary text-text-tertiary dark:bg-dark-bg-secondary dark:text-dark-text-tertiary">
          <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-bg-primary shadow-sm dark:bg-dark-bg-primary">
            <svg
              className="h-8 w-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.75}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <span className="px-4 text-center text-sm font-medium">{fallbackLabel}</span>
        </div>
      ) : (
        <>
          <img
            src={src}
            alt={alt}
            className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'} ${imgClassName}`}
            onLoad={() => setIsLoading(false)}
            onError={() => {
              setHasError(true);
              setIsLoading(false);
            }}
            loading="lazy"
          />
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-bg-secondary/80 dark:bg-dark-bg-secondary/80">
              <div className="h-10 w-10 animate-spin rounded-full border-4 border-border-primary border-t-brand-primary dark:border-dark-border-primary dark:border-t-dark-interactive-primary" />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default SmartImage;
