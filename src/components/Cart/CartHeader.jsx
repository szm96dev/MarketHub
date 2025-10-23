import React from 'react';

const CartHeader = ({ itemCount }) => {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-text-primary dark:text-dark-text-primary mb-2">
        Shopping Cart
      </h1>
      <p className="text-text-secondary dark:text-dark-text-secondary">
        {itemCount} {itemCount === 1 ? 'item' : 'items'} in your cart
      </p>
    </div>
  );
};

export default CartHeader;