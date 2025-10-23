import React, { useCallback, useState, memo } from 'react';
import {
  ShoppingCartOutlined,
  VisibilityOutlined,
  FavoriteBorderOutlined,
  FavoriteOutlined,
} from '../../icons';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/actions/cartActions';
import { toggleFavorite } from '../../store/actions/favoritesActions';
import { showToast } from '../../utils/toast';
import QuickViewModal from './QuickViewModal';

const ProductCard = ({ product }) => {
  const [showQuickView, setShowQuickView] = useState(false);
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { favorites } = useSelector((state) => state.favorites);
  const isFavorite = favorites.some(fav => fav.id === product.id);

  const handleAddToCart = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addToCart({
      productId: product.id.toString(),
      productName: product.title,
      price: product.price,
      image: product.image
    }));
    showToast.success('Product added to cart!');
  }, [dispatch, product.id, product.title, product.price, product.image]);

  const handleQuickView = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowQuickView(true);
  }, []);

  const handleToggleFavorite = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isAuthenticated) {
      showToast.warning('Please sign in first to add items to your favorites.');
      return;
    }
    dispatch(toggleFavorite(product));
    showToast.success(isFavorite ? 'Removed from favorites' : 'Added to favorites');
  }, [isAuthenticated, dispatch, product, isFavorite]);

  return (
    <>
      <div 
        className="group relative bg-bg-card dark:bg-dark-bg-card rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-500 overflow-hidden border border-border-primary dark:border-dark-border-primary hover:border-brand-primary dark:hover:border-dark-interactive-primary flex flex-col h-full"
      >
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <Link to={`/products/${product.id}`}>
          <img
            src={product.image}
            alt={product.title}
            className="h-64 w-auto mx-auto object-contain bg-white dark:bg-dark-bg-primary"
          />
        </Link>
        
        {/* Overlay with actions */}
        <div className={`absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300`}>
          <div className="flex space-x-2">
            <button
              onClick={handleQuickView}
              className="bg-white/90 hover:bg-white text-neutral-900 p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
              aria-label="Quick view"
            >
              <VisibilityOutlined sx={{ fontSize: 20 }} />
            </button>
            <button
              onClick={handleAddToCart}
              className="bg-primary-500 hover:bg-primary-600 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
              aria-label="Add to cart"
            >
              <ShoppingCartOutlined sx={{ fontSize: 20 }} />
            </button>
          </div>
        </div>

        {/* Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            In Stock
          </span>
        </div>

        {/* Wishlist Button */}
        <button 
          onClick={handleToggleFavorite}
          className={`absolute top-4 right-4 bg-white/80 hover:bg-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 ${
            isFavorite 
              ? 'text-red-500 hover:text-red-600' 
              : 'text-neutral-600 hover:text-red-500'
          }`}
        >
          {isFavorite ? (
            <FavoriteOutlined sx={{ fontSize: 20 }} />
          ) : (
            <FavoriteBorderOutlined sx={{ fontSize: 20 }} />
          )}
        </button>
      </div>
      
      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Category */}
        <div className="text-xs font-medium text-brand-primary dark:text-dark-interactive-primary uppercase tracking-wide mb-2">
          {product.category}
        </div>
        
        {/* Title */}
        <Link to={`/products/${product.id}`}>
          <h3 className="text-lg font-bold text-text-primary dark:text-dark-text-primary mb-2 line-clamp-2 group-hover:text-brand-primary dark:group-hover:text-dark-interactive-primary transition-colors">
            {product.title}
          </h3>
        </Link>
        
        {/* Description */}
        <p className="text-text-secondary dark:text-dark-text-secondary text-sm mb-4 line-clamp-2 flex-grow">
          {product.description}
        </p>
        
        {/* Rating */}
        <div className="flex items-center mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${
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
            <span className="text-sm text-text-tertiary dark:text-dark-text-tertiary ml-2">
              ({product.rating?.count || 0})
            </span>
          </div>
        </div>
        
        {/* Price and Actions */}
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-baseline space-x-2">
            <span className="text-2xl font-bold text-text-primary dark:text-dark-text-primary">
              ${product.price}
            </span>
            {product.price > 50 && (
              <span className="text-sm text-status-success dark:text-dark-status-success font-medium">
                Free Shipping
              </span>
            )}
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="w-full mt-4 bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-interactive-primary-hover hover:to-brand-secondary text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 hover:scale-105"
        >
          <span className="flex items-center justify-center">
            <ShoppingCartOutlined sx={{ fontSize: 20, mr: 1 }} />
            Add to Cart
          </span>
        </button>
      </div>
      </div>

      {/* Quick View Modal */}
      <QuickViewModal
        product={product}
        isOpen={showQuickView}
        onClose={() => setShowQuickView(false)}
      />
    </>
  );
};

export default memo(ProductCard);