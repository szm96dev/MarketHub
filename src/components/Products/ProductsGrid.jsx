import React from 'react';
import ProductCard from '../common/ProductCard';
import ProductCardSkeleton from '../common/ProductCardSkeleton';
import { Inventory2Outlined } from '../../icons';

const ProductsGrid = ({ products = [], loading = false, onClearFilters }) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-8">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
            <ProductCardSkeleton />
          </div>
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700 rounded-full flex items-center justify-center animate-pulse">
          <Inventory2Outlined sx={{ fontSize: 64 }} className="text-neutral-400" />
        </div>
        <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
          No products found
        </h3>
        <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-md mx-auto">
          Try adjusting your search or filter criteria to find what you're looking for.
        </p>
        <button
          onClick={onClearFilters}
          className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          Clear Filters
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
      {products.map((product, index) => (
        <div 
          key={product.id} 
          className="animate-fade-in"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductsGrid;
