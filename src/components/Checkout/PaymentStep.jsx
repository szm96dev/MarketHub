import React from 'react';
import Button from '../common/Button';

const paymentOptions = ['Card', 'PayPal', 'Cash on Delivery'];

const PaymentStep = ({ paymentMethod, onPaymentMethodChange, onBack, onContinue }) => (
  <>
    <div>
      <h2 className="mb-4 text-2xl font-semibold text-text-primary dark:text-dark-text-primary">
        Payment Method
      </h2>
      <div className="grid gap-4">
        {paymentOptions.map((method) => (
          <button
            key={method}
            onClick={() => onPaymentMethodChange(method)}
            className={`rounded-2xl border px-5 py-4 text-left transition ${
              paymentMethod === method
                ? 'border-brand-primary bg-brand-primary/10 dark:border-dark-interactive-primary dark:bg-dark-interactive-primary/10'
                : 'border-border-primary dark:border-dark-border-primary'
            }`}
          >
            <p className="font-semibold text-text-primary dark:text-dark-text-primary">{method}</p>
            <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
              {method === 'Card' && 'Fastest checkout with secure mock payment form.'}
              {method === 'PayPal' && 'Simulated wallet checkout for frontend-only demos.'}
              {method === 'Cash on Delivery' && 'Great for testing the order flow without payment.'}
            </p>
          </button>
        ))}
      </div>
    </div>
    <div className="grid gap-3 sm:grid-cols-2">
      <Button onClick={onBack} variant="secondary" fullWidth>
        Back to shipping
      </Button>
      <Button onClick={onContinue} variant="gradient" fullWidth>
        Review order
      </Button>
    </div>
  </>
);

export default PaymentStep;
