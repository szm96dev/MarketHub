import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../store/actions/authActions';
import RegisterBackground from '../components/Register/RegisterBackground';
import RegisterHeader from '../components/Register/RegisterHeader';
import RegisterForm from '../components/Register/RegisterForm';
import RegisterFooter from '../components/Register/RegisterFooter';

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);
  const [error, setError] = useState('');

  const handleSubmit = async (values) => {
    try {
      setError('');
      await dispatch(register(values));
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-primary/10 via-brand-secondary/5 to-accent-primary/10 dark:from-dark-bg-primary dark:via-dark-bg-secondary dark:to-dark-bg-tertiary flex items-center justify-center relative overflow-hidden pt-32 pb-8">
      <RegisterBackground />

      <div className="relative z-10 w-full max-w-2xl mx-auto px-4">
        {/* Header */}
        <RegisterHeader />

        {/* Main Card */}
        <div className="bg-bg-card dark:bg-dark-bg-card backdrop-blur-sm rounded-3xl shadow-2xl p-10 border border-border-primary dark:border-dark-border-primary">
          <RegisterForm
            onSubmit={handleSubmit}
            loading={loading}
            error={error}
          />
        </div>

        <RegisterFooter />
      </div>
    </div>
  );
};

export default Register;