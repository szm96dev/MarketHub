import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductBreadcrumb = ({ category, title }) => {
  const navigate = useNavigate();

  return (
    <nav className="flex items-center space-x-2 text-sm text-text-secondary dark:text-dark-text-secondary mb-6">
      <button
        onClick={() => navigate('/')}
        className="hover:text-brand-primary dark:hover:text-dark-interactive-primary transition-colors duration-200"
      >
        Home
      </button>
      <span>/</span>
      <button
        onClick={() => navigate('/products')}
        className="text-text-secondary dark:text-dark-text-secondary hover:text-brand-primary dark:hover:text-dark-interactive-primary transition-colors duration-200"
      >
        Products
      </button>
      {category && (
        <>
          <span>/</span>
          <button
            onClick={() => navigate(`/products?category=${encodeURIComponent(category)}`)}
            className="text-text-secondary dark:text-dark-text-secondary hover:text-brand-primary dark:hover:text-dark-interactive-primary transition-colors duration-200 capitalize"
          >
            {category}
          </button>
        </>
      )}
      <span>/</span>
      <span className="text-text-primary dark:text-dark-text-primary font-medium truncate max-w-xs">
        {title}
      </span>
    </nav>
  );
};

export default ProductBreadcrumb;