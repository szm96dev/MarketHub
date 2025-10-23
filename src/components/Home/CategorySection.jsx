import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../common/LoadingSpinner';

const CategorySection = ({ 
  categories = [], 
  loading = false,
  title = "Shop by Category",
  subtitle = "Discover products across all categories"
}) => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/products?category=${encodeURIComponent(category)}`);
  };

  if (loading) {
    return (
      <section className="py-16 bg-bg-primary dark:bg-dark-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LoadingSpinner size={60} message="Loading categories..." />
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-bg-primary dark:bg-dark-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-text-primary dark:text-dark-text-primary mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl text-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {categories.slice(0, 8).map((category, index) => (
            <div
              key={category}
              onClick={() => handleCategoryClick(category)}
              className="group cursor-pointer"
            >
              <div className="bg-bg-card dark:bg-dark-bg-card rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-border-primary dark:border-dark-border-primary hover:border-brand-primary dark:hover:border-dark-interactive-primary">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-text-primary dark:text-dark-text-primary group-hover:text-brand-primary dark:group-hover:text-dark-interactive-primary transition-colors capitalize">
                  {category.replace(/'/g, '')}
                </h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button
            onClick={() => navigate('/products')}
            className="bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-interactive-primary-hover hover:to-brand-secondary text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            View All Categories
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;