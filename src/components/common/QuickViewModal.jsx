import React from 'react';
import {
  ShoppingCartOutlined,
  CloseOutlined,
  FavoriteBorderOutlined,
  FavoriteOutlined,
} from '../../icons';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/actions/cartActions';
import { toggleFavorite } from '../../store/actions/favoritesActions';
import { showToast } from '../../utils/toast';

const QuickViewModal = ({ product, isOpen, onClose }) => {
  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state.favorites);
  const isFavorite = favorites.some(fav => fav.id === product.id);

  const handleAddToCart = () => {
    dispatch(addToCart({
      productId: product.id.toString(),
      productName: product.title,
      price: product.price,
      image: product.image
    }));
    showToast.success('Product added to cart!');
    onClose();
  };

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(product));
    showToast.success(isFavorite ? 'Removed from favorites' : 'Added to favorites');
  };

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-bg-primary dark:bg-dark-bg-primary rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border-primary dark:border-dark-border-primary">
          <h2 className="text-2xl font-bold text-text-primary dark:text-dark-text-primary">
            Quick View
          </h2>
          <button
            onClick={onClose}
            className="text-text-secondary dark:text-dark-text-secondary hover:text-text-primary dark:hover:text-dark-text-primary transition-colors"
          >
            <CloseOutlined sx={{ fontSize: 24 }} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-96 w-auto mx-auto object-contain bg-white dark:bg-dark-bg-primary"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    In Stock
                  </span>
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              {/* Category */}
              <div className="text-sm font-medium text-brand-primary dark:text-dark-interactive-primary uppercase tracking-wide">
                {product.category}
              </div>

              {/* Title */}
              <h1 className="text-3xl font-bold text-text-primary dark:text-dark-text-primary">
                {product.title}
              </h1>

              {/* Rating */}
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating?.rate || 0)
                          ? 'text-yellow-400'
                          : 'text-neutral-300 dark:text-neutral-600'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-text-secondary dark:text-dark-text-secondary">
                  {product.rating?.rate || 0} ({product.rating?.count || 0} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-baseline space-x-4">
                <span className="text-4xl font-bold text-text-primary dark:text-dark-text-primary">
                  ${product.price}
                </span>
                {product.price > 50 && (
                  <span className="text-lg text-status-success dark:text-dark-status-success font-medium">
                    Free Shipping
                  </span>
                )}
              </div>

              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold text-text-primary dark:text-dark-text-primary mb-2">
                  Description
                </h3>
                <p className="text-text-secondary dark:text-dark-text-secondary leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Actions */}
              <div className="flex space-x-4">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-interactive-primary-hover hover:to-brand-secondary text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 hover:scale-105"
                >
                  <span className="flex items-center justify-center">
                    <ShoppingCartOutlined sx={{ fontSize: 20, mr: 1 }} />
                    Add to Cart
                  </span>
                </button>
                <button 
                  onClick={handleToggleFavorite}
                  className={`font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 hover:scale-105 ${
                    isFavorite
                      ? 'bg-red-500 hover:bg-red-600 text-white'
                      : 'bg-bg-secondary dark:bg-dark-bg-secondary hover:bg-bg-tertiary dark:hover:bg-dark-bg-tertiary text-text-primary dark:text-dark-text-primary'
                  }`}
                >
                  {isFavorite ? (
                    <FavoriteOutlined sx={{ fontSize: 20 }} />
                  ) : (
                    <FavoriteBorderOutlined sx={{ fontSize: 20 }} />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
