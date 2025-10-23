import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Button from '../common/Button';
import { registerSchema, initialValues } from '../../schemas';
import { PersonOutlined, EmailOutlined, PhoneOutlined, VisibilityOutlined, VisibilityOffOutlined } from '../../icons';

const RegisterForm = ({ onSubmit, loading, error }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onFormSubmit = (values) => {
    onSubmit(values)

    console.log("values")
  };

  return (
    <Formik initialValues={initialValues.register} validationSchema={registerSchema} onSubmit={onFormSubmit}>
      {({ errors }) => {

        console.log(errors)
        return (
          <Form className="space-y-8">
            {error && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-xl text-sm flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {error}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstname" className="block text-sm font-semibold text-text-primary dark:text-dark-text-primary mb-3">
                  First Name
                </label>
                <div className="relative">
                  <Field
                    id="firstname"
                    name="firstname"
                    type="text"
                    className="w-full px-4 py-4 bg-bg-secondary dark:bg-dark-bg-secondary border-2 border-border-primary dark:border-dark-border-primary rounded-xl text-text-primary dark:text-dark-text-primary placeholder-text-tertiary dark:placeholder-dark-text-tertiary focus:outline-none focus:ring-2 focus:ring-brand-primary dark:focus:ring-dark-interactive-primary focus:border-brand-primary dark:focus:border-dark-interactive-primary"
                    placeholder="Enter your first name"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4 text-text-tertiary dark:text-dark-text-tertiary">
                    <PersonOutlined sx={{ fontSize: 20 }} />
                  </div>
                </div>
                <ErrorMessage name="firstname" component="p" className="mt-1 text-sm text-red-400" />
              </div>

              <div>
                <label htmlFor="lastname" className="block text-sm font-semibold text-text-primary dark:text-dark-text-primary mb-3">
                  Last Name
                </label>
                <div className="relative">
                  <Field
                    id="lastname"
                    name="lastname"
                    type="text"
                    className="w-full px-4 py-4 bg-bg-secondary dark:bg-dark-bg-secondary border-2 border-border-primary dark:border-dark-border-primary rounded-xl text-text-primary dark:text-dark-text-primary placeholder-text-tertiary dark:placeholder-dark-text-tertiary focus:outline-none focus:ring-2 focus:ring-brand-primary dark:focus:ring-dark-interactive-primary focus:border-brand-primary dark:focus:border-dark-interactive-primary"
                    placeholder="Enter your last name"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4 text-text-tertiary dark:text-dark-text-tertiary">
                    <PersonOutlined sx={{ fontSize: 20 }} />
                  </div>
                </div>
                <ErrorMessage name="lastname" component="p" className="mt-1 text-sm text-red-400" />
              </div>
            </div>

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
              <label htmlFor="username" className="block text-sm font-semibold text-text-primary dark:text-dark-text-primary mb-3">
                Username
              </label>
              <div className="relative">
                <Field
                  id="username"
                  name="username"
                  type="text"
                  className="w-full px-4 py-4 bg-bg-secondary dark:bg-dark-bg-secondary border-2 border-border-primary dark:border-dark-border-primary rounded-xl text-text-primary dark:text-dark-text-primary placeholder-text-tertiary dark:placeholder-dark-text-tertiary focus:outline-none focus:ring-2 focus:ring-brand-primary dark:focus:ring-dark-interactive-primary focus:border-brand-primary dark:focus:border-dark-interactive-primary"
                  placeholder="Choose a username"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-4 text-text-tertiary dark:text-dark-text-tertiary">
                  <PersonOutlined sx={{ fontSize: 20 }} />
                </div>
              </div>
              <ErrorMessage name="username" component="p" className="mt-1 text-sm text-red-400" />
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
                  placeholder="Create a password"
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

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-semibold text-text-primary dark:text-dark-text-primary mb-3">
                Confirm Password
              </label>
              <div className="relative">
                <Field
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  className="w-full px-4 py-4 bg-bg-secondary dark:bg-dark-bg-secondary border-2 border-border-primary dark:border-dark-border-primary rounded-xl text-text-primary dark:text-dark-text-primary placeholder-text-tertiary dark:placeholder-dark-text-tertiary focus:outline-none focus:ring-2 focus:ring-brand-primary dark:focus:ring-dark-interactive-primary focus:border-brand-primary dark:focus:border-dark-interactive-primary pr-12"
                  placeholder="Confirm your password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/4 text-text-tertiary dark:text-dark-text-tertiary p-1 rounded-lg"
                >
                  {showConfirmPassword ? (
                    <VisibilityOffOutlined sx={{ fontSize: 20 }} />
                  ) : (
                    <VisibilityOutlined sx={{ fontSize: 20 }} />
                  )}
                </button>
              </div>
              <ErrorMessage name="confirmPassword" component="p" className="mt-1 text-sm text-red-400" />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-text-primary dark:text-dark-text-primary mb-3">
                Phone Number
              </label>
              <div className="relative">
                <Field
                  id="phone"
                  name="phone"
                  type="tel"
                  className="w-full px-4 py-4 bg-bg-secondary dark:bg-dark-bg-secondary border-2 border-border-primary dark:border-dark-border-primary rounded-xl text-text-primary dark:text-dark-text-primary placeholder-text-tertiary dark:placeholder-dark-text-tertiary focus:outline-none focus:ring-2 focus:ring-brand-primary dark:focus:ring-dark-interactive-primary focus:border-brand-primary dark:focus:border-dark-interactive-primary"
                  placeholder="Enter your phone number"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-4 text-text-tertiary dark:text-dark-text-tertiary">
                  <PhoneOutlined sx={{ fontSize: 20 }} />
                </div>
              </div>
              <ErrorMessage name="phone" component="p" className="mt-1 text-sm text-red-400" />
            </div>

            <div className="flex items-start space-x-3 p-4 bg-bg-tertiary dark:bg-dark-bg-tertiary rounded-xl border border-border-primary dark:border-dark-border-primary">
              <input
                type="checkbox"
                id="terms"
                className="w-5 h-5 text-brand-primary bg-bg-secondary dark:bg-dark-bg-secondary border-2 border-border-primary dark:border-dark-border-primary rounded focus:ring-brand-primary dark:focus:ring-dark-interactive-primary focus:ring-2 mt-0.5"
              />
              <label htmlFor="terms" className="text-sm text-text-secondary dark:text-dark-text-secondary leading-relaxed">
                I agree to the{' '}
                <button type="button" className="text-brand-primary dark:text-dark-interactive-primary hover:text-interactive-primary-hover dark:hover:text-dark-interactive-primary-hover transition-colors underline font-semibold">
                  Terms of Service
                </button>{' '}
                and{' '}
                <button type="button" className="text-brand-primary dark:text-dark-interactive-primary hover:text-interactive-primary-hover dark:hover:text-dark-interactive-primary-hover transition-colors underline font-semibold">
                  Privacy Policy
                </button>
              </label>
            </div>

            <Button type="submit" fullWidth variant="gradient" loading={loading}>
              Create Account
            </Button>
          </Form>
        )
      }}
    </Formik>
  );
};

export default RegisterForm;