import React, { Suspense } from 'react';
import LoadingSpinner from './LoadingSpinner';

const LazyWrapper = ({ 
  children, 
  fallback,
  errorFallback 
}) => {
  return (
    <Suspense fallback={fallback || <LoadingSpinner />}>
      {children}
    </Suspense>
  );
};

export default LazyWrapper;