import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, fetchCategories } from '../store/actions/productsActions';
import ProductsSearch from '../components/Products/ProductsSearch';
import ProductsFilters from '../components/Products/ProductsFilters';
import ProductsGrid from '../components/Products/ProductsGrid';
import ProductsHero from '../components/Products/ProductsHero';
import ProductsResultsBar from '../components/Products/ProductsResultsBar';
import ProductsPagination from '../components/Products/ProductsPagination';
import LoadingSpinner from '../components/common/LoadingSpinner';
import useDebouncedValue from '../hooks/useDebouncedValue';

const DEFAULT_LIMIT = 12;
const MAX_PRICE = 1000;

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { products, categories, loading, pagination } = useSelector((state) => state.products);

  const initialSearch = searchParams.get('search') || '';
  const initialCategory = searchParams.get('category') || '';
  const initialSort = searchParams.get('sort') || 'name';
  const initialPage = Math.max(1, Number(searchParams.get('page')) || 1);
  const initialMinPrice = Math.max(0, Number(searchParams.get('minPrice')) || 0);
  const initialMaxPrice = Math.min(MAX_PRICE, Number(searchParams.get('maxPrice')) || MAX_PRICE);
  
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState(initialSort);
  const [priceRange, setPriceRange] = useState([initialMinPrice, Math.max(initialMinPrice, initialMaxPrice)]);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const skipFirstDebouncedFetch = useRef(true);
  const initialFilters = useRef({
    search: initialSearch,
    category: initialCategory,
    sortBy: initialSort,
    minPrice: initialMinPrice,
    maxPrice: Math.max(initialMinPrice, initialMaxPrice),
    page: initialPage,
    limit: DEFAULT_LIMIT,
  });

  const filters = useMemo(() => ({
    search: searchTerm,
    category: selectedCategory,
    sortBy,
    minPrice: priceRange[0],
    maxPrice: priceRange[1],
    page: currentPage,
    limit: DEFAULT_LIMIT,
  }), [currentPage, priceRange, searchTerm, selectedCategory, sortBy]);

  const debouncedFilters = useDebouncedValue(filters, 400);
  const activeFiltersCount = useMemo(() => {
    let count = 0;

    if (searchTerm.trim()) count += 1;
    if (selectedCategory) count += 1;
    if (sortBy !== 'name') count += 1;
    if (priceRange[0] !== 0 || priceRange[1] !== MAX_PRICE) count += 1;

    return count;
  }, [priceRange, searchTerm, selectedCategory, sortBy]);
  const resultRangeLabel = useMemo(() => {
    if (pagination.total === 0) {
      return 'No products found';
    }

    const start = (pagination.page - 1) * pagination.limit + 1;
    const end = Math.min(pagination.page * pagination.limit, pagination.total);

    return `Showing ${start}-${end} of ${pagination.total} products`;
  }, [pagination]);
  const paginationWindow = useMemo(() => {
    if (!pagination.totalPages) {
      return [];
    }

    const start = Math.max(1, pagination.page - 2);
    const end = Math.min(pagination.totalPages, start + 4);
    const adjustedStart = Math.max(1, end - 4);

    return Array.from({ length: end - adjustedStart + 1 }, (_, index) => adjustedStart + index);
  }, [pagination.page, pagination.totalPages]);

  useEffect(() => {
    dispatch(fetchProducts(initialFilters.current));
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    if (skipFirstDebouncedFetch.current) {
      skipFirstDebouncedFetch.current = false;
      return;
    }

    dispatch(fetchProducts(debouncedFilters));
  }, [debouncedFilters, dispatch]);

  useEffect(() => {
    const nextParams = new URLSearchParams();

    if (searchTerm.trim()) nextParams.set('search', searchTerm.trim());
    if (selectedCategory) nextParams.set('category', selectedCategory);
    if (sortBy !== 'name') nextParams.set('sort', sortBy);
    if (priceRange[0] !== 0) nextParams.set('minPrice', String(priceRange[0]));
    if (priceRange[1] !== MAX_PRICE) nextParams.set('maxPrice', String(priceRange[1]));
    if (currentPage > 1) nextParams.set('page', String(currentPage));

    setSearchParams(nextParams, { replace: true });
  }, [currentPage, priceRange, searchTerm, selectedCategory, setSearchParams, sortBy]);

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSortChange = (sort) => {
    setSortBy(sort);
    setCurrentPage(1);
  };

  const handlePriceRangeChange = (range) => {
    setPriceRange(range);
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSortBy('name');
    setPriceRange([0, MAX_PRICE]);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    if (page < 1 || page > pagination.totalPages || page === currentPage) {
      return;
    }

    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-primary-50 dark:from-neutral-900 dark:to-neutral-800">
      <ProductsHero totalProducts={pagination.total} />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filters */}
        <div className="mb-12">
          <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-xl border border-neutral-200 dark:border-neutral-700 p-6">
            <ProductsSearch
              searchTerm={searchTerm}
              onSearchTermChange={setSearchTerm}
              onSearch={handleSearch}
            />

            <div className="mt-6">
              <ProductsFilters
                categories={categories}
                selectedCategory={selectedCategory}
                sortBy={sortBy}
                priceRange={priceRange}
                onCategoryChange={handleCategoryChange}
                onSortChange={handleSortChange}
                onPriceRangeChange={handlePriceRangeChange}
                onClearFilters={clearFilters}
              />
            </div>
          </div>
        </div>

        <ProductsResultsBar
          resultRangeLabel={resultRangeLabel}
          activeFiltersCount={activeFiltersCount}
          searchTerm={searchTerm}
          selectedCategory={selectedCategory}
          priceRange={priceRange}
          sortBy={sortBy}
          maxPrice={MAX_PRICE}
        />

        {/* Products Grid */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <LoadingSpinner size={60} message="Loading products..." />
          </div>
        ) : (
          <>
            <div className="animate-fade-in">
              <ProductsGrid products={products} onClearFilters={clearFilters} />
            </div>

            <ProductsPagination
              currentPage={currentPage}
              totalPages={pagination.totalPages}
              paginationWindow={paginationWindow}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Products;
