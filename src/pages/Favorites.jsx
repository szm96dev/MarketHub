import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearFavorites } from '../store/actions/favoritesActions';
import PageContainer from '../components/common/PageContainer';
import ProductCard from '../components/common/ProductCard';
import { DeleteOutlineOutlined, FavoriteBorderOutlined, SearchOutlined } from '../icons';

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
                <FavoriteBorderOutlined sx={{ fontSize: 64 }} className="text-brand-primary dark:text-dark-interactive-primary" />
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
                <SearchOutlined sx={{ fontSize: 20, mr: 1 }} />
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
                <DeleteOutlineOutlined sx={{ fontSize: 16, mr: 1 }} />
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
                <SearchOutlined sx={{ fontSize: 20, mr: 1 }} />
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
