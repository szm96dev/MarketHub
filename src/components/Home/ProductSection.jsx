import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../common/ProductCard';
import LoadingSpinner from '../common/LoadingSpinner';

const ProductSection = ({ 
  products = [], 
  loading = false,
  title = "Featured Products",
  subtitle = "Discover our handpicked selection",
  showViewAll = false,
  viewAllLink = "/products"
}) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center py-16">
        <LoadingSpinner size={60} message="Loading products..." />
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Section Header */}
      {title && (
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-text-primary dark:text-dark-text-primary mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      )}
      
      {/* Products Grid */}
      {products.length > 0 ? (
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
      ) : (
        <div className="text-center py-16">
          <div className="w-24 h-24 mx-auto mb-6 bg-bg-tertiary dark:bg-dark-bg-tertiary rounded-full flex items-center justify-center">
            <svg className="w-12 h-12 text-text-tertiary dark:text-dark-text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 009.586 13H7" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-text-primary dark:text-dark-text-primary mb-2">
            No products available
          </h3>
          <p className="text-text-secondary dark:text-dark-text-secondary">
            Check back later for new products.
          </p>
        </div>
      )}
      
      {/* View All Button */}
      {showViewAll && (
        <div className="text-center mt-12">
          <Link
            to={viewAllLink}
            className="inline-flex items-center justify-center bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-interactive-primary-hover hover:to-brand-secondary text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
          >
            <span>View All Products</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProductSection;