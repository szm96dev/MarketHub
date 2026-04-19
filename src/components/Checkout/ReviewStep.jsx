import React from 'react';
import Button from '../common/Button';
import SmartImage from '../common/SmartImage';

const ReviewStep = ({
  shippingForm,
  paymentMethod,
  items,
  itemCount,
  total,
  tax,
  shippingFee,
  discount,
  grandTotal,
  isSubmitting,
  onBack,
  onPlaceOrder,
}) => (
  <>
    <div>
      <h2 className="mb-6 text-2xl font-semibold text-text-primary dark:text-dark-text-primary">
        Review Your Order
      </h2>
      <div className="mb-6 rounded-2xl border border-border-primary p-5 dark:border-dark-border-primary">
        <p className="text-sm uppercase tracking-wide text-text-tertiary dark:text-dark-text-tertiary">
          Shipping to
        </p>
        <p className="mt-2 font-semibold text-text-primary dark:text-dark-text-primary">{shippingForm.fullName}</p>
        <p className="text-text-secondary dark:text-dark-text-secondary">
          {shippingForm.street}{shippingForm.apartment ? `, ${shippingForm.apartment}` : ''}, {shippingForm.city}, {shippingForm.state}, {shippingForm.postalCode}, {shippingForm.country}
        </p>
        <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
          {shippingForm.email} · {shippingForm.phone}
        </p>
        <p className="mt-3 text-sm font-medium text-brand-primary dark:text-dark-interactive-primary">
          Payment: {paymentMethod}
        </p>
      </div>

      <div className="space-y-4">
        {items.length === 0 ? (
          <p className="text-text-secondary dark:text-dark-text-secondary">Your cart is empty.</p>
        ) : (
          items.map((item) => (
            <div key={item.productId} className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <SmartImage
                  src={item.image}
                  alt={item.productName}
                  className="h-12 w-12 rounded bg-white dark:bg-dark-bg-primary"
                  imgClassName="h-full w-full object-contain"
                  fallbackLabel="No image"
                />
                <div>
                  <p className="font-medium text-text-primary dark:text-dark-text-primary">{item.productName}</p>
                  <p className="text-sm text-text-tertiary dark:text-dark-text-tertiary">Qty: {item.quantity}</p>
                </div>
              </div>
              <p className="font-semibold text-text-primary dark:text-dark-text-primary">${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))
        )}
      </div>
    </div>

    <div className="border-t border-border-primary pt-4 dark:border-dark-border-primary">
      <div className="mb-2 flex items-center justify-between text-text-secondary dark:text-dark-text-secondary">
        <span>Subtotal ({itemCount} items)</span>
        <span>${total.toFixed(2)}</span>
      </div>
      <div className="mb-2 flex items-center justify-between text-text-secondary dark:text-dark-text-secondary">
        <span>Tax (8%)</span>
        <span>${tax.toFixed(2)}</span>
      </div>
      <div className="mb-2 flex items-center justify-between text-text-secondary dark:text-dark-text-secondary">
        <span>Shipping</span>
        <span>{shippingFee === 0 ? 'Free' : `$${shippingFee.toFixed(2)}`}</span>
      </div>
      {discount > 0 && (
        <div className="mb-2 flex items-center justify-between text-status-success dark:text-dark-status-success">
          <span>Wallet discount</span>
          <span>-${discount.toFixed(2)}</span>
        </div>
      )}
      <div className="flex items-center justify-between text-lg font-bold text-text-primary dark:text-dark-text-primary">
        <span>Total</span>
        <span>${grandTotal.toFixed(2)}</span>
      </div>
    </div>

    <div className="grid gap-3 sm:grid-cols-2">
      <Button onClick={onBack} variant="secondary" fullWidth>
        Back to payment
      </Button>
      <Button onClick={onPlaceOrder} variant="gradient" fullWidth disabled={isSubmitting}>
        {isSubmitting ? 'Processing order...' : 'Place order'}
      </Button>
    </div>
  </>
);

export default ReviewStep;
