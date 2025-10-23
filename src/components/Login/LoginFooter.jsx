import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginFooter = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center mt-8">
      <p className="text-text-secondary dark:text-dark-text-secondary text-sm">
        Don't have an account?{' '}
        <button
          className="text-brand-primary dark:text-dark-interactive-primary font-semibold"
          onClick={() => navigate('/register')}
        >
          Sign up here
        </button>
      </p>
      
      <div className="mt-4">
        <button
          onClick={() => navigate('/')}
          className="text-text-tertiary dark:text-dark-text-tertiary text-sm"
        >
          ← Back to Home
        </button>
      </div>
    </div>
  );
};

export default LoginFooter;