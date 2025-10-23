import React from 'react';

const ProductInfo = ({ 
  title, 
  price, 
  description, 
  category, 
  ratings 
}) => {
  return (
    <div className="space-y-6">
      {/* Title and Price */}
      <div>
        <h1 className="text-3xl font-bold text-text-primary dark:text-dark-text-primary mb-4">
          {title}
        </h1>
        <div className="flex items-center space-x-4">
          <span className="text-4xl font-bold text-brand-primary dark:text-dark-interactive-primary">
            ${price}
          </span>
          {ratings && (
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(ratings.average)
                        ? 'text-yellow-400'
                        : 'text-gray-300 dark:text-gray-600'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-text-secondary dark:text-dark-text-secondary">
                ({ratings.count} reviews)
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Description */}
      <div>
        <h3 className="text-lg font-semibold text-text-primary dark:text-dark-text-primary mb-3">
          Description
        </h3>
        <p className="text-text-secondary dark:text-dark-text-secondary leading-relaxed">
          {description}
        </p>
      </div>

      {/* Category */}
      {category && (
        <div>
          <h3 className="text-lg font-semibold text-text-primary dark:text-dark-text-primary mb-3">
            Category
          </h3>
          <span className="inline-block bg-brand-primary/10 text-brand-primary dark:text-dark-interactive-primary px-3 py-1 rounded-full text-sm font-medium capitalize">
            {category}
          </span>
        </div>
      )}

      {/* Features */}
      <div>
        <h3 className="text-lg font-semibold text-text-primary dark:text-dark-text-primary mb-3">
          Key Features
        </h3>
        <ul className="space-y-2">
          <li className="flex items-center text-text-secondary dark:text-dark-text-secondary">
            <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            High quality materials
          </li>
          <li className="flex items-center text-text-secondary dark:text-dark-text-secondary">
            <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Free shipping worldwide
          </li>
          <li className="flex items-center text-text-secondary dark:text-dark-text-secondary">
            <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            30-day money back guarantee
          </li>
          <li className="flex items-center text-text-secondary dark:text-dark-text-secondary">
            <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Customer support 24/7
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductInfo;