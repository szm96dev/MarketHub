import React from 'react';

const CheckoutHeader = ({ checkoutComplete }) => (
  <h1 className="mb-8 text-center text-4xl font-bold text-text-primary dark:text-dark-text-primary">
    {checkoutComplete ? 'Order Confirmed!' : 'Proceed to Checkout'}
  </h1>
);

export default CheckoutHeader;
