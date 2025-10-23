import React from 'react';
import { Field } from 'formik';

const FormField = ({
  name,
  label,
  type = 'text',
  placeholder,
  required = false,
  disabled = false,
  rows = 3,
  className = ''
}) => {
  return (
    <Field name={name}>
      {({ field, meta }) => (
        <div className={`mb-6 ${className}`}>
          {label && (
            <label className="block text-sm font-medium text-text-primary dark:text-dark-text-primary mb-2">
              {label}
              {required && <span className="text-red-500 ml-1">*</span>}
            </label>
          )}
          
          {type === 'textarea' ? (
            <textarea
              {...field}
              placeholder={placeholder}
              disabled={disabled}
              rows={rows}
              className={`w-full px-4 py-3 border border-border-primary dark:border-dark-border-primary rounded-lg bg-bg-primary dark:bg-dark-bg-primary text-text-primary dark:text-dark-text-primary placeholder-text-tertiary dark:placeholder-dark-text-tertiary focus:outline-none focus:ring-2 focus:ring-brand-primary dark:focus:ring-dark-interactive-primary focus:border-transparent transition-all duration-200 ${
                meta.touched && meta.error ? 'border-red-500' : ''
              } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            />
          ) : (
            <input
              {...field}
              type={type}
              placeholder={placeholder}
              disabled={disabled}
              className={`w-full px-4 py-3 border border-border-primary dark:border-dark-border-primary rounded-lg bg-bg-primary dark:bg-dark-bg-primary text-text-primary dark:text-dark-text-primary placeholder-text-tertiary dark:placeholder-dark-text-tertiary focus:outline-none focus:ring-2 focus:ring-brand-primary dark:focus:ring-dark-interactive-primary focus:border-transparent transition-all duration-200 ${
                meta.touched && meta.error ? 'border-red-500' : ''
              } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            />
          )}
          
          {meta.touched && meta.error && (
            <p className="mt-2 text-sm text-red-500">{meta.error}</p>
          )}
        </div>
      )}
    </Field>
  );
};

export default FormField;