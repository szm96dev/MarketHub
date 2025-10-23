import React, { memo, useMemo } from 'react';
import Button from '../common/Button';
import { useNavigate } from 'react-router-dom';

const OrderSummary = ({
  total,
  itemCount,
  onCheckout,
  onClearCart
}) => {
  const navigate = useNavigate();
  const tax = useMemo(() => total * 0.08, [total]);
  const finalTotal = useMemo(() => total + tax, [total, tax]);

  return (
    <div className="bg-bg-card dark:bg-dark-bg-card rounded-2xl shadow-lg p-6 sticky top-8">
      <h3 className="text-xl font-bold text-text-primary dark:text-dark-text-primary mb-6">
        Order Summary
      </h3>
      
      <div className="space-y-4 mb-6">
        <div className="flex justify-between text-text-secondary dark:text-dark-text-secondary">
          <span>Subtotal ({itemCount} items)</span>
          <span>${total.toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between text-text-secondary dark:text-dark-text-secondary">
          <span>Tax (8%)</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        
        <div className="border-t border-border-primary dark:border-dark-border-primary pt-4">
          <div className="flex justify-between text-lg font-bold text-text-primary dark:text-dark-text-primary">
            <span>Total</span>
            <span>${finalTotal.toFixed(2)}</span>
          </div>
        </div>
      </div>
      
      <div className="space-y-3">
        <Button onClick={onCheckout} fullWidth variant="gradient">
          Proceed to Checkout
        </Button>
        
        <Button onClick={onClearCart} fullWidth variant="danger">
          Clear Cart
        </Button>
        
        <Button onClick={() => navigate('/products')} fullWidth variant="outline">
          Continue Shopping
        </Button>
      </div>
    </div>
  );
};

export default memo(OrderSummary);