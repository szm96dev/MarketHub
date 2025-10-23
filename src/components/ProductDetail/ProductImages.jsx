import React, { useState } from 'react';

const ProductImages = ({ 
  images = [], 
  productName = 'Product',
  stock = true 
}) => {
  const [selectedImage, setSelectedImage] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="w-full h-96 bg-gray-200 dark:bg-gray-700 rounded-2xl flex items-center justify-center">
        <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative group overflow-hidden rounded-2xl bg-white dark:bg-dark-bg-primary flex items-center justify-center">
        <img
          src={images[selectedImage] || '/placeholder.jpg'}
          alt={productName}
          className="max-h-96 lg:max-h-[500px] w-auto object-contain"
          loading="lazy"
        />
        
        <div className="absolute top-4 right-4">
          {/* Stock Badge */}
          {stock ? (
            <span className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
              In Stock
            </span>
          ) : (
            <span className="bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Out of Stock
            </span>
          )}
        </div>
      </div>

      {/* Thumbnail Images */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`relative overflow-hidden rounded-lg transition-all duration-200 ${
                selectedImage === index
                  ? 'ring-2 ring-brand-primary dark:ring-dark-interactive-primary'
                  : 'hover:ring-2 hover:ring-gray-300 dark:hover:ring-gray-600'
              }`}
            >
              <img
                src={image}
                alt={`${productName} ${index + 1}`}
                className="max-h-20 w-auto mx-auto object-contain bg-white dark:bg-dark-bg-primary"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductImages;