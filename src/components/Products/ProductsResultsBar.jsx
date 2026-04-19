import React from 'react';

const FilterChip = ({ children }) => (
  <span className="rounded-full bg-brand-primary/10 px-3 py-1 text-sm font-medium text-brand-primary dark:bg-dark-interactive-primary/15 dark:text-dark-interactive-primary">
    {children}
  </span>
);

const ProductsResultsBar = ({
  resultRangeLabel,
  activeFiltersCount,
  searchTerm,
  selectedCategory,
  priceRange,
  sortBy,
  maxPrice,
}) => (
  <div className="mb-8 flex flex-col gap-4 rounded-2xl border border-neutral-200 bg-white/80 p-5 shadow-sm backdrop-blur-sm dark:border-neutral-700 dark:bg-neutral-800/80 lg:flex-row lg:items-center lg:justify-between">
    <div>
      <p className="text-lg font-semibold text-neutral-900 dark:text-white">{resultRangeLabel}</p>
      <p className="text-sm text-neutral-600 dark:text-neutral-400">
        {activeFiltersCount > 0 ? `${activeFiltersCount} active filter${activeFiltersCount > 1 ? 's' : ''}` : 'Browse the full catalog'}
      </p>
    </div>
    {activeFiltersCount > 0 && (
      <div className="flex flex-wrap gap-2">
        {searchTerm.trim() && <FilterChip>Search: {searchTerm}</FilterChip>}
        {selectedCategory && <FilterChip>Category: {selectedCategory}</FilterChip>}
        {(priceRange[0] !== 0 || priceRange[1] !== maxPrice) && (
          <FilterChip>Price: ${priceRange[0]} - ${priceRange[1]}</FilterChip>
        )}
        {sortBy !== 'name' && <FilterChip>Sort: {sortBy}</FilterChip>}
      </div>
    )}
  </div>
);

export default ProductsResultsBar;
