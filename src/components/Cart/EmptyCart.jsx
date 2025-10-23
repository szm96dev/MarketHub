import React from 'react';
import { ShoppingCartOutlined } from '../../icons';
import { useNavigate } from 'react-router-dom';

const EmptyCart = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center">
          <ShoppingCartOutlined className="text-white" sx={{ fontSize: 64 }} />
        </div>
        
        <h2 className="text-3xl font-bold text-text-primary dark:text-dark-text-primary mb-4">
          Your cart is empty
        </h2>
        <p className="text-text-secondary dark:text-dark-text-secondary mb-8 text-lg">
          Add some amazing products to get started!
        </p>
        
        <button
          className="bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-interactive-primary-hover hover:to-brand-secondary text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          onClick={() => navigate('/products')}
        >
          <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default EmptyCart;