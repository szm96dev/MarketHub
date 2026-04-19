import React from 'react';

const ProductCardSkeleton = () => {
  return (
    <div className="overflow-hidden rounded-2xl border border-border-primary bg-bg-card shadow-card dark:border-dark-border-primary dark:bg-dark-bg-card">
      <div className="h-64 animate-pulse bg-bg-secondary dark:bg-dark-bg-secondary" />
      <div className="space-y-4 p-6">
        <div className="h-4 w-24 animate-pulse rounded-full bg-bg-secondary dark:bg-dark-bg-secondary" />
        <div className="space-y-2">
          <div className="h-6 w-full animate-pulse rounded-lg bg-bg-secondary dark:bg-dark-bg-secondary" />
          <div className="h-6 w-2/3 animate-pulse rounded-lg bg-bg-secondary dark:bg-dark-bg-secondary" />
        </div>
        <div className="space-y-2">
          <div className="h-4 w-full animate-pulse rounded-lg bg-bg-secondary dark:bg-dark-bg-secondary" />
          <div className="h-4 w-5/6 animate-pulse rounded-lg bg-bg-secondary dark:bg-dark-bg-secondary" />
        </div>
        <div className="h-5 w-28 animate-pulse rounded-lg bg-bg-secondary dark:bg-dark-bg-secondary" />
        <div className="flex items-center justify-between">
          <div className="h-8 w-24 animate-pulse rounded-lg bg-bg-secondary dark:bg-dark-bg-secondary" />
          <div className="h-5 w-20 animate-pulse rounded-lg bg-bg-secondary dark:bg-dark-bg-secondary" />
        </div>
        <div className="h-12 w-full animate-pulse rounded-xl bg-bg-secondary dark:bg-dark-bg-secondary" />
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
