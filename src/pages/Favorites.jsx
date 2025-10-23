import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearFavorites } from '../store/actions/favoritesActions';
import PageContainer from '../components/common/PageContainer';
import ProductCard from '../components/common/ProductCard';

const Favorites = () => {
  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state.favorites);

  if (favorites.length === 0) {
    return (
      <PageContainer>
        <div className="min-h-screen bg-bg-primary dark:bg-dark-bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {/* Empty State */}
            <div className="text-center py-20">
              <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 dark:from-brand-primary/20 dark:to-brand-secondary/20 rounded-full flex items-center justify-center">
                <svg className="w-16 h-16 text-brand-primary dark:text-dark-interactive-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-text-primary dark:text-dark-text-primary mb-4">
                No Favorites Yet
              </h2>
              <p className="text-lg text-text-secondary dark:text-dark-text-secondary mb-8 max-w-md mx-auto">
                Start adding products to your favorites by clicking the heart icon on any product.
              </p>
              <Link
                to="/products"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-interactive-primary-hover hover:to-brand-secondary text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 hover:scale-105"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Browse Products
              </Link>
            </div>
          </div>
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <div className="min-h-screen bg-bg-primary dark:bg-dark-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-text-primary dark:text-dark-text-primary mb-2">
                  My Favorites
                </h1>
                <p className="text-text-secondary dark:text-dark-text-secondary">
                  {favorites.length} {favorites.length === 1 ? 'item' : 'items'} saved
                </p>
              </div>
              <button
                onClick={() => dispatch(clearFavorites())}
                className="px-6 py-3 border border-border-primary dark:border-dark-border-primary text-text-secondary dark:text-dark-text-secondary hover:bg-bg-secondary dark:hover:bg-dark-bg-secondary font-medium rounded-xl transition-all duration-300 hover:scale-105 flex items-center"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                Clear All
              </button>
            </div>
          </div>

          {/* Favorites Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {favorites.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-brand-primary/5 to-brand-secondary/5 dark:from-brand-primary/10 dark:to-brand-secondary/10 rounded-2xl p-8 border border-border-primary dark:border-dark-border-primary">
              <h3 className="text-xl font-bold text-text-primary dark:text-dark-text-primary mb-4">
                Discover More Products
              </h3>
              <p className="text-text-secondary dark:text-dark-text-secondary mb-6">
                Explore our full collection and find more items you'll love.
              </p>
              <Link
                to="/products"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-interactive-primary-hover hover:to-brand-secondary text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 hover:scale-105"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Browse All Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Favorites;
