import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Button from '../common/Button';
import { loginSchema, initialValues } from '../../schemas';
import { EmailOutlined, VisibilityOutlined, VisibilityOffOutlined } from '../../icons';

const LoginForm = ({ onSubmit, loading, error }) => {
  const [showPassword, setShowPassword] = useState(false);

  const onFormSubmit = (values) => onSubmit(values);

  return (
    <Formik initialValues={initialValues.login} validationSchema={loginSchema} onSubmit={onFormSubmit}>
      {({ values }) => (
        <Form className="space-y-8">
      {error && (
        <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-lg text-sm">
          {error}
        </div>
      )}

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-text-primary dark:text-dark-text-primary mb-3">
          Email Address
        </label>
        <div className="relative">
          <Field
            id="email"
            name="email"
            type="email"
            className="w-full px-4 py-4 bg-bg-secondary dark:bg-dark-bg-secondary border-2 border-border-primary dark:border-dark-border-primary rounded-xl text-text-primary dark:text-dark-text-primary placeholder-text-tertiary dark:placeholder-dark-text-tertiary focus:outline-none focus:ring-2 focus:ring-brand-primary dark:focus:ring-dark-interactive-primary focus:border-brand-primary dark:focus:border-dark-interactive-primary"
            placeholder="Enter your email"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-4 text-text-tertiary dark:text-dark-text-tertiary">
            <EmailOutlined sx={{ fontSize: 20 }} />
          </div>
        </div>
        <ErrorMessage name="email" component="p" className="mt-1 text-sm text-red-400" />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-semibold text-text-primary dark:text-dark-text-primary mb-3">
          Password
        </label>
        <div className="relative">
          <Field
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            className="w-full px-4 py-4 bg-bg-secondary dark:bg-dark-bg-secondary border-2 border-border-primary dark:border-dark-border-primary rounded-xl text-text-primary dark:text-dark-text-primary placeholder-text-tertiary dark:placeholder-dark-text-tertiary focus:outline-none focus:ring-2 focus:ring-brand-primary dark:focus:ring-dark-interactive-primary focus:border-brand-primary dark:focus:border-dark-interactive-primary pr-12"
            placeholder="Enter your password"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/4 text-text-tertiary dark:text-dark-text-tertiary p-1 rounded-lg"
          >
            {showPassword ? (
              <VisibilityOffOutlined sx={{ fontSize: 20 }} />
            ) : (
              <VisibilityOutlined sx={{ fontSize: 20 }} />
            )}
          </button>
        </div>
        <ErrorMessage name="password" component="p" className="mt-1 text-sm text-red-400" />
      </div>

      <div className="flex items-center justify-between">
        <label className="flex items-center">
        <input
          type="checkbox"
          className="w-5 h-5 text-brand-primary bg-bg-secondary dark:bg-dark-bg-secondary border-2 border-border-primary dark:border-dark-border-primary rounded focus:ring-brand-primary dark:focus:ring-dark-interactive-primary focus:ring-2"
        />
        <span className="ml-2 text-sm text-text-secondary dark:text-dark-text-secondary">Remember me</span>
        </label>
        <button
          type="button"
          className="text-sm text-brand-primary dark:text-dark-interactive-primary"
        >
          Forgot password?
        </button>
      </div>

      <Button type="submit" fullWidth variant="gradient" loading={loading}>
        Sign In
      </Button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;