import React, { useState } from 'react';
import { ShoppingCartOutlined } from '../../icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/actions/cartActions';
import { showToast } from '../../utils/toast';

const ProductActions = ({ onAddToCart, onBuyNow }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart();
    } else {
      // Default behavior if no onAddToCart prop
      dispatch(addToCart({
        productId: 'default',
        productName: 'Product',
        price: 0,
        image: ''
      }));
    }
    showToast.success('Product added to cart!');
  };

  const handleBuyNow = () => {
    if (onBuyNow) {
      onBuyNow();
    } else {
      // Default behavior
      navigate('/cart');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <span className="text-lg font-semibold text-text-primary dark:text-dark-text-primary">
          Quantity:
        </span>
        <div className="flex items-center border border-border-primary dark:border-dark-border-primary rounded-lg">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-4 py-2 text-text-primary dark:text-dark-text-primary hover:bg-brand-primary/10 dark:hover:bg-dark-interactive-primary/10 transition-colors duration-200"
            disabled={quantity <= 1}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
            </svg>
          </button>
          <span className="px-4 py-2 text-text-primary dark:text-dark-text-primary font-medium">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="px-4 py-2 text-text-primary dark:text-dark-text-primary hover:bg-brand-primary/10 dark:hover:bg-dark-interactive-primary/10 transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={handleAddToCart}
          className="flex-1 bg-bg-secondary dark:bg-dark-bg-secondary text-text-primary dark:text-dark-text-primary font-bold py-4 px-6 rounded-xl hover:bg-bg-tertiary dark:hover:bg-dark-bg-tertiary transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          <ShoppingCartOutlined sx={{ fontSize: 20, mr: 1 }} />
          Add to Cart
        </button>
        
        <button
          onClick={handleBuyNow}
          className="flex-1 bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-interactive-primary-hover hover:to-brand-secondary text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Buy Now
        </button>
      </div>

      <div className="flex items-center space-x-4 text-sm text-text-secondary dark:text-dark-text-secondary">
        <div className="flex items-center">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Free Shipping
        </div>
        <div className="flex items-center">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          30-Day Returns
        </div>
      </div>
    </div>
  );
};

export default ProductActions;