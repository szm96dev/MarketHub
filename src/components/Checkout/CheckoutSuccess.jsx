import React from 'react';
import Button from '../common/Button';
import { CheckCircleOutlined } from '../../icons';

const CheckoutSuccess = ({ latestOrder, onContinueShopping }) => (
  <div className="rounded-3xl bg-bg-card p-8 text-center shadow-2xl dark:bg-dark-bg-card">
    <CheckCircleOutlined sx={{ fontSize: 96, color: 'currentColor' }} className="mx-auto mb-6 text-brand-primary" />
    <p className="mb-4 text-xl text-text-secondary dark:text-dark-text-secondary">
      Your order has been placed successfully.
    </p>
    <p className="mb-8 text-text-tertiary dark:text-dark-text-tertiary">
      You will receive an email confirmation shortly.
    </p>
    {latestOrder && (
      <div className="mb-8 rounded-2xl border border-border-primary p-5 text-left dark:border-dark-border-primary">
        <p className="text-sm text-text-secondary dark:text-dark-text-secondary">Order ID</p>
        <p className="text-lg font-bold text-text-primary dark:text-dark-text-primary">{latestOrder.id}</p>
        <p className="mt-3 text-sm text-text-secondary dark:text-dark-text-secondary">
          Saved to your local order history with {latestOrder.itemCount} item{latestOrder.itemCount === 1 ? '' : 's'}.
        </p>
      </div>
    )}
    <Button onClick={onContinueShopping} variant="gradient">
      Continue Shopping
    </Button>
  </div>
);

export default CheckoutSuccess;
