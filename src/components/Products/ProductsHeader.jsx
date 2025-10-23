import React from 'react';

const ProductsHeader = ({ 
  totalProducts = 0,
  searchTerm = '',
  selectedCategory = ''
}) => {
  const title = searchTerm 
    ? `Search results for "${searchTerm}"`
    : selectedCategory 
    ? `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Products`
    : 'All Products';

  const subtitle = searchTerm
    ? `${totalProducts} products found`
    : selectedCategory
    ? `${totalProducts} products in this category`
    : `${totalProducts} products available`;

  return (
    <div className="text-center mb-8">
      <h1 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4 animate-fade-in">
        {title}
      </h1>
      <p className="text-xl text-neutral-600 dark:text-neutral-400 animate-fade-in" style={{ animationDelay: '0.2s' }}>
        {subtitle}
      </p>
    </div>
  );
};

export default ProductsHeader;