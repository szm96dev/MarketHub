import React from 'react';

const RegisterHeader = () => {
  return (
    <div className="text-center mb-8">
      <div className="w-16 h-16 mx-auto mb-6 bg-brand-primary/20 dark:bg-dark-bg-secondary rounded-full flex items-center justify-center border border-brand-primary/30 dark:border-dark-border-primary">
        <svg className="w-8 h-8 text-brand-primary dark:text-dark-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
      </div>
      <h1 className="text-3xl font-bold text-text-primary dark:text-dark-text-primary mb-2">
        Join Us Today
      </h1>
      <p className="text-text-secondary dark:text-dark-text-secondary">
        Create your account and start shopping
      </p>
    </div>
  );
};

export default RegisterHeader;