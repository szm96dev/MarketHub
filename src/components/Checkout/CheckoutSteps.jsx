import React from 'react';

const CheckoutSteps = ({ steps, currentStep, isShippingComplete, onStepChange }) => (
  <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
    {steps.map((step) => (
      <button
        key={step.id}
        onClick={() => {
          if (step.id === 1 || (step.id === 2 && isShippingComplete) || (step.id === 3 && isShippingComplete)) {
            onStepChange(step.id);
          }
        }}
        className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
          currentStep === step.id
            ? 'bg-gradient-to-r from-brand-primary to-brand-secondary text-white shadow-lg'
            : 'bg-bg-secondary text-text-secondary dark:bg-dark-bg-secondary dark:text-dark-text-secondary'
        }`}
      >
        {step.id}. {step.label}
      </button>
    ))}
  </div>
);

export default CheckoutSteps;
