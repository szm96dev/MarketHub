import React from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterFooter = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center mt-10">
      <div className="bg-bg-secondary dark:bg-dark-bg-secondary rounded-2xl p-6 border border-border-primary dark:border-dark-border-primary">
        <p className="text-text-secondary dark:text-dark-text-secondary text-sm mb-4">
          Already have an account?
        </p>
        <button
          className="w-full bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-semibold py-3 px-6 rounded-xl shadow-lg"
          onClick={() => navigate('/login')}
        >
          Sign in here
        </button>
      </div>
      
      <div className="mt-6">
        <button
          onClick={() => navigate('/')}
          className="text-text-tertiary dark:text-dark-text-tertiary text-sm flex items-center justify-center mx-auto"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default RegisterFooter;