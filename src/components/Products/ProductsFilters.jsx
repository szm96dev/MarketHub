import React, { memo, useCallback, useMemo } from 'react';
import { FilterListOutlined, ClearOutlined, ExpandMoreOutlined } from '../../icons';

const ProductsFilters = ({
  categories = [],
  selectedCategory,
  sortBy,
  priceRange,
  onCategoryChange,
  onSortChange,
  onPriceRangeChange,
  onClearFilters
}) => {
  const sortOptions = useMemo(() => ([
    { value: 'name', label: 'Name A-Z' },
    { value: 'name-desc', label: 'Name Z-A' },
    { value: 'price', label: 'Price Low to High' },
    { value: 'price-desc', label: 'Price High to Low' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'newest', label: 'Newest First' }
  ]), []);

  const handleMinPriceChange = useCallback((e) => {
    const newMin = parseInt(e.target.value);
    if (newMin <= priceRange[1]) {
      onPriceRangeChange([newMin, priceRange[1]]);
    }
  }, [onPriceRangeChange, priceRange]);

  const handleMaxPriceChange = useCallback((e) => {
    const newMax = parseInt(e.target.value);
    if (newMax >= priceRange[0]) {
      onPriceRangeChange([priceRange[0], newMax]);
    }
  }, [onPriceRangeChange, priceRange]);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-text-primary dark:text-dark-text-primary flex items-center">
          <FilterListOutlined sx={{ fontSize: 20, mr: 1, color: 'inherit' }} />
          Filters
        </h3>
        <button
          onClick={onClearFilters}
          className="px-4 py-2 border border-border-primary dark:border-dark-border-primary text-text-secondary dark:text-dark-text-secondary hover:bg-bg-secondary dark:hover:bg-dark-bg-secondary font-medium rounded-xl transition-all duration-300 hover:scale-105 flex items-center"
        >
          <ClearOutlined sx={{ fontSize: 16, mr: 1 }} />
          Clear Filters
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Category Filter */}
        <div>
          <label className="block text-sm font-semibold text-text-primary dark:text-dark-text-primary mb-3">
            Category
          </label>
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="w-full px-4 py-3 border border-border-primary dark:border-dark-border-primary rounded-xl bg-bg-primary dark:bg-dark-bg-primary text-text-primary dark:text-dark-text-primary focus:outline-none focus:ring-2 focus:ring-brand-primary dark:focus:ring-dark-interactive-primary focus:border-transparent transition-all duration-300 appearance-none cursor-pointer"
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <ExpandMoreOutlined sx={{ fontSize: 20, color: 'inherit' }} />
            </div>
          </div>
        </div>

        {/* Sort Filter */}
        <div>
          <label className="block text-sm font-semibold text-text-primary dark:text-dark-text-primary mb-3">
            Sort By
          </label>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              className="w-full px-4 py-3 border border-border-primary dark:border-dark-border-primary rounded-xl bg-bg-primary dark:bg-dark-bg-primary text-text-primary dark:text-dark-text-primary focus:outline-none focus:ring-2 focus:ring-brand-primary dark:focus:ring-dark-interactive-primary focus:border-transparent transition-all duration-300 appearance-none cursor-pointer"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <ExpandMoreOutlined sx={{ fontSize: 20, color: 'inherit' }} />
            </div>
          </div>
        </div>

        {/* Price Range Filter - Single Dual Range Slider */}
        <div>
          <label className="block text-sm font-semibold text-text-primary dark:text-dark-text-primary mb-3">
            Price Range: ${priceRange[0]} - ${priceRange[1]}
          </label>
          <div className="relative">
            {/* Background track */}
            <div className="w-full h-2 bg-border-primary dark:bg-dark-border-primary rounded-lg relative">
              {/* Active range track */}
              <div 
                className="absolute h-2 bg-gradient-to-r from-brand-primary to-brand-secondary dark:from-dark-interactive-primary dark:to-brand-secondary rounded-lg transition-all duration-300"
                style={{
                  left: `${(priceRange[0] / 1000) * 100}%`,
                  width: `${((priceRange[1] - priceRange[0]) / 1000) * 100}%`
                }}
              ></div>
            </div>
            
            {/* Min price slider */}
            <input
              type="range"
              min="0"
              max="1000"
              value={priceRange[0]}
              onChange={handleMinPriceChange}
              className={`absolute top-0 w-full h-2 bg-transparent appearance-none cursor-pointer slider-thumb transition-all duration-300 ${
                priceRange[0] > 1000 - priceRange[1] ? 'z-10' : 'z-30'
              }`}
            />
            
            {/* Max price slider */}
            <input
              type="range"
              min="0"
              max="1000"
              value={priceRange[1]}
              onChange={handleMaxPriceChange}
              className={`absolute top-0 w-full h-2 bg-transparent appearance-none cursor-pointer slider-thumb transition-all duration-300 ${
                priceRange[1] < priceRange[0] + 100 ? 'z-10' : 'z-40'
              }`}
            />
            
            {/* Price labels */}
            <div className="flex justify-between text-xs text-text-tertiary dark:text-dark-text-tertiary mt-2">
              <span className="font-medium">$0</span>
              <span className="font-medium">$1000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ProductsFilters);