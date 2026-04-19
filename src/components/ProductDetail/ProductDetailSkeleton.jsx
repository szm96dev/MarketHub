import React from 'react';

const ProductDetailSkeleton = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8 h-4 w-64 animate-pulse rounded-full bg-bg-secondary dark:bg-dark-bg-secondary" />
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="h-[28rem] animate-pulse rounded-2xl bg-bg-secondary dark:bg-dark-bg-secondary" />
          <div className="grid grid-cols-4 gap-3">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="h-20 animate-pulse rounded-xl bg-bg-secondary dark:bg-dark-bg-secondary"
              />
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <div className="h-10 w-3/4 animate-pulse rounded-xl bg-bg-secondary dark:bg-dark-bg-secondary" />
          <div className="h-8 w-40 animate-pulse rounded-xl bg-bg-secondary dark:bg-dark-bg-secondary" />
          <div className="space-y-3">
            <div className="h-4 w-full animate-pulse rounded-lg bg-bg-secondary dark:bg-dark-bg-secondary" />
            <div className="h-4 w-full animate-pulse rounded-lg bg-bg-secondary dark:bg-dark-bg-secondary" />
            <div className="h-4 w-5/6 animate-pulse rounded-lg bg-bg-secondary dark:bg-dark-bg-secondary" />
          </div>
          <div className="h-28 animate-pulse rounded-2xl bg-bg-secondary dark:bg-dark-bg-secondary" />
          <div className="h-32 animate-pulse rounded-2xl bg-bg-secondary dark:bg-dark-bg-secondary" />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailSkeleton;
