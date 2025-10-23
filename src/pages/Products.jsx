import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, fetchCategories } from '../store/actions/productsActions';
import ProductsSearch from '../components/Products/ProductsSearch';
import ProductsFilters from '../components/Products/ProductsFilters';
import ProductsGrid from '../components/Products/ProductsGrid';
import LoadingSpinner from '../components/common/LoadingSpinner';

const Products = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { products, categories, loading } = useSelector((state) => state.products);
  
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || '');
  const [sortBy, setSortBy] = useState('name');
  const [priceRange, setPriceRange] = useState([0, 1000]);

  useEffect(() => {
    dispatch(fetchProducts({ limit: 20 }));
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    const filters = {
      search: searchTerm,
      category: selectedCategory,
      sortBy,
      minPrice: priceRange[0],
      maxPrice: priceRange[1]
    };
    
    dispatch(fetchProducts(filters));
  }, [searchTerm, selectedCategory, sortBy, priceRange, dispatch]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSortChange = (sort) => {
    setSortBy(sort);
  };

  const handlePriceRangeChange = (range) => {
    setPriceRange(range);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSortBy('name');
    setPriceRange([0, 1000]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-primary-50 dark:from-neutral-900 dark:to-neutral-800">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-brand-primary to-brand-secondary dark:from-dark-interactive-primary dark:to-brand-secondary overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black/10 dark:bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/90 to-brand-secondary/90 dark:from-dark-interactive-primary/90 dark:to-brand-secondary/90"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              All Products
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Discover our complete collection of amazing products
            </p>
            <div className="flex items-center justify-center space-x-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                <svg className="w-5 h-5 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                <span className="text-white font-semibold">{products.length} products available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

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

        {/* Products Grid */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <LoadingSpinner size={60} message="Loading products..." />
          </div>
        ) : (
          <div className="animate-fade-in">
            <ProductsGrid products={products} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;