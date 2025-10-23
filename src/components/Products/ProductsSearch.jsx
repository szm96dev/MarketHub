import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { SearchOutlined, ClearOutlined } from '../../icons';

const ProductsSearch = ({ 
  searchTerm, 
  onSearchTermChange, 
  onSearch 
}) => {
  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    onSearchTermChange(localSearchTerm);
    if (onSearch) {
      onSearch(localSearchTerm);
    }
  }, [localSearchTerm, onSearch, onSearchTermChange]);

  const handleClear = useCallback(() => {
    setLocalSearchTerm('');
    onSearchTermChange('');
    if (onSearch) {
      onSearch('');
    }
  }, [onSearch, onSearchTermChange]);

  useEffect(() => {
    setLocalSearchTerm(searchTerm);
  }, [searchTerm]);

  const isClearVisible = useMemo(() => localSearchTerm.length > 0, [localSearchTerm]);

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="relative">
        <div className="flex items-center space-x-4">
          <div className="flex-1 relative">
            <input
              type="text"
              value={localSearchTerm}
              onChange={(e) => setLocalSearchTerm(e.target.value)}
              placeholder="Search for products, brands, and more..."
              className="w-full px-6 py-4 pl-14 pr-4 border border-border-primary dark:border-dark-border-primary rounded-2xl bg-bg-secondary dark:bg-dark-bg-secondary text-text-primary dark:text-dark-text-primary placeholder-text-tertiary dark:placeholder-dark-text-tertiary focus:outline-none focus:ring-2 focus:ring-brand-primary dark:focus:ring-dark-interactive-primary focus:border-transparent transition-all duration-300 shadow-sm hover:shadow-md"
            />
        <button
          type="submit"
          className="absolute left-4 top-1/4 p-2 text-text-tertiary dark:text-dark-text-tertiary hover:text-brand-primary dark:hover:text-dark-interactive-primary transition-colors"
        >
          <SearchOutlined sx={{ fontSize: 20 }} />
        </button>
            {isClearVisible && (
              <button
                type="button"
                onClick={handleClear}
                className="absolute right-4 top-1/4 p-2 text-text-tertiary dark:text-dark-text-tertiary hover:text-status-error dark:hover:text-dark-status-error transition-colors"
              >
                <ClearOutlined sx={{ fontSize: 20 }} />
              </button>
            )}
          </div>
          <button
            type="submit"
            className="px-8 py-4 bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-interactive-primary-hover hover:to-brand-secondary text-white font-bold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span className="flex items-center">
              <SearchOutlined sx={{ fontSize: 20, mr: 1 }} />
              Search
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default memo(ProductsSearch);