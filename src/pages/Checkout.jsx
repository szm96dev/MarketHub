import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import PageContainer from '../components/common/PageContainer';
import { showToast } from '../utils/toast';
import Button from '../components/common/Button';
import { clearCart } from '../store/actions/cartActions';

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [checkoutComplete, setCheckoutComplete] = useState(false);
  const { items, total, itemCount } = useSelector((state) => state.cart);
  const tax = useMemo(() => total * 0.08, [total]);
  const grandTotal = useMemo(() => total + tax, [total, tax]);

  const handleProcessCheckout = () => {
    // Simulate a successful checkout
    setTimeout(() => {
      setCheckoutComplete(true);
      showToast.success('Purchase successful! Thank you for your order.');
      dispatch(clearCart());
    }, 2000);
  };

    return (
    <PageContainer>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-text-primary dark:text-dark-text-primary mb-8 text-center">
          {checkoutComplete ? 'Order Confirmed!' : 'Proceed to Checkout'}
        </h1>

        {checkoutComplete ? (
          <div className="bg-bg-card dark:bg-dark-bg-card rounded-3xl shadow-2xl p-8 text-center">
            <svg className="w-24 h-24 text-brand-primary mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-xl text-text-secondary dark:text-dark-text-secondary mb-4">
              Your order has been placed successfully.
            </p>
            <p className="text-text-tertiary dark:text-dark-text-tertiary mb-8">
              You will receive an email confirmation shortly.
            </p>
              <Button onClick={() => navigate('/products')} variant="gradient">
                Continue Shopping
              </Button>
          </div>
        ) : (
          <div className="bg-bg-card dark:bg-dark-bg-card rounded-3xl shadow-2xl p-8">
            <h2 className="text-2xl font-semibold text-text-primary dark:text-dark-text-primary mb-6">
              Review Your Order
            </h2>
            <div className="space-y-6">
              {/* Items */}
              <div className="space-y-4">
                {items.length === 0 ? (
                  <p className="text-text-secondary dark:text-dark-text-secondary">Your cart is empty.</p>) : (
                  items.map((item) => (
                    <div key={item.productId} className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <img src={item.image} alt={item.productName} className="h-12 w-auto object-contain bg-white dark:bg-dark-bg-primary rounded" />
                        <div>
                          <p className="text-text-primary dark:text-dark-text-primary font-medium">{item.productName}</p>
                          <p className="text-text-tertiary dark:text-dark-text-tertiary text-sm">Qty: {item.quantity}</p>
                        </div>
                      </div>
                      <p className="text-text-primary dark:text-dark-text-primary font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  ))
                )}
              </div>

              {/* Summary */}
              <div className="border-t border-border-primary dark:border-dark-border-primary pt-4">
                <div className="flex items-center justify-between mb-2 text-text-secondary dark:text-dark-text-secondary">
                  <span>Subtotal ({itemCount} items)</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between mb-2 text-text-secondary dark:text-dark-text-secondary">
                  <span>Tax (8%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between text-lg font-bold text-text-primary dark:text-dark-text-primary">
                  <span>Total</span>
                  <span>${grandTotal.toFixed(2)}</span>
                </div>
              </div>

              <Button onClick={handleProcessCheckout} variant="gradient" fullWidth>
                Place Order
              </Button>
            </div>
          </div>
        )}
      </div>
    </PageContainer>
  );
};

export default Checkout;