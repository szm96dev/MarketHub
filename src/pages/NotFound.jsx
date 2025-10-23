import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen pt-32 pb-12 px-4 bg-bg-primary dark:bg-dark-bg-primary flex items-start md:items-center justify-center">
      <div className="w-full max-w-2xl">
        <div className="bg-bg-card dark:bg-dark-bg-card border border-border-primary dark:border-dark-border-primary rounded-3xl shadow-2xl p-8 md:p-10 text-center">
          <div className="mx-auto mb-6 w-28 h-28 rounded-2xl bg-gradient-to-r from-brand-primary to-brand-secondary flex items-center justify-center text-white font-extrabold text-3xl">
            404
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-text-primary dark:text-dark-text-primary mb-3">
            Oops! Page not found
          </h1>
          <p className="text-text-secondary dark:text-dark-text-secondary mb-8 leading-relaxed">
            The page you're looking for doesn't exist, was moved, or is temporarily unavailable.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/"
              className="w-full sm:w-auto bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-interactive-primary-hover hover:to-brand-secondary text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Go to Home
            </Link>
            <Link
              to="/products"
              className="w-full sm:w-auto border border-border-primary dark:border-dark-border-primary text-text-primary dark:text-dark-text-primary hover:bg-bg-secondary dark:hover:bg-dark-bg-secondary font-bold px-6 py-3 rounded-xl transition-all duration-300"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;


