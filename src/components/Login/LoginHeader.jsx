import React from 'react';

const LoginHeader = () => {
  return (
    <div className="text-center mb-8">
      <div className="w-16 h-16 mx-auto mb-6 bg-brand-primary/20 dark:bg-dark-bg-secondary rounded-full flex items-center justify-center border border-brand-primary/30 dark:border-dark-border-primary">
        <svg className="w-8 h-8 text-brand-primary dark:text-dark-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
        </svg>
      </div>
      <h1 className="text-3xl font-bold text-text-primary dark:text-dark-text-primary mb-2">
        Welcome Back
      </h1>
      <p className="text-text-secondary dark:text-dark-text-secondary">
        Sign in to your account
      </p>
    </div>
  );
};

export default LoginHeader;