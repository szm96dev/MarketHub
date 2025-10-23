import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/actions/authActions';
import LoginBackground from '../components/Login/LoginBackground';
import LoginHeader from '../components/Login/LoginHeader';
import LoginForm from '../components/Login/LoginForm';
import LoginFooter from '../components/Login/LoginFooter';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);
  const [error, setError] = useState('');

  const handleSubmit = async (values) => {
    try {
      setError('');
      await dispatch(login(values));
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-primary/10 via-brand-secondary/5 to-accent-primary/10 dark:from-dark-bg-primary dark:via-dark-bg-secondary dark:to-dark-bg-tertiary flex items-center justify-center relative overflow-hidden pt-32 pb-8">
      <LoginBackground />
      
      <div className="relative z-10 w-full max-w-2xl mx-auto px-4">
        {/* Header */}
        <LoginHeader />

        {/* Main Card */}
        <div className="bg-bg-card dark:bg-dark-bg-card backdrop-blur-sm rounded-3xl shadow-2xl p-10 border border-border-primary dark:border-dark-border-primary">
          <LoginForm
            onSubmit={handleSubmit}
            loading={loading}
            error={error}
          />

        
        </div>

        <LoginFooter />
      </div>
    </div>
  );
};

export default Login;