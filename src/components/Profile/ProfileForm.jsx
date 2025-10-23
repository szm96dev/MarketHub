import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { profileUpdateSchema, buildProfileInitialValues } from '../../schemas';

const ProfileForm = ({ 
  user, 
  isEditing, 
  loading, 
  onEditToggle, 
  onSubmit 
}) => {
  const validationSchema = profileUpdateSchema;
  const initialValues = buildProfileInitialValues(user);

  return (
    <div className="bg-bg-card dark:bg-dark-bg-card rounded-2xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-text-primary dark:text-dark-text-primary">
          Personal Information
        </h2>
        <button
          onClick={onEditToggle}
          className="px-4 py-2 bg-gradient-to-r from-brand-primary to-brand-secondary text-white rounded-xl hover:shadow-lg transition-all duration-300"
        >
          {isEditing ? 'Cancel' : 'Edit Profile'}
        </button>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ values, errors, touched }) => (
          <Form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstname" className="block text-sm font-medium text-text-primary dark:text-dark-text-primary mb-2">
                  First Name
                </label>
                <Field
                  name="firstname"
                  type="text"
                  disabled={!isEditing}
                  className="w-full px-4 py-3 border border-border-primary dark:border-dark-border-primary rounded-lg bg-bg-primary dark:bg-dark-bg-primary text-text-primary dark:text-dark-text-primary focus:outline-none focus:ring-2 focus:ring-brand-primary dark:focus:ring-dark-interactive-primary focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <ErrorMessage name="firstname" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div>
                <label htmlFor="lastname" className="block text-sm font-medium text-text-primary dark:text-dark-text-primary mb-2">
                  Last Name
                </label>
                <Field
                  name="lastname"
                  type="text"
                  disabled={!isEditing}
                  className="w-full px-4 py-3 border border-border-primary dark:border-dark-border-primary rounded-lg bg-bg-primary dark:bg-dark-bg-primary text-text-primary dark:text-dark-text-primary focus:outline-none focus:ring-2 focus:ring-brand-primary dark:focus:ring-dark-interactive-primary focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <ErrorMessage name="lastname" component="div" className="text-red-500 text-sm mt-1" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-primary dark:text-dark-text-primary mb-2">
                  Email
                </label>
                <Field
                  name="email"
                  type="email"
                  disabled={!isEditing}
                  className="w-full px-4 py-3 border border-border-primary dark:border-dark-border-primary rounded-lg bg-bg-primary dark:bg-dark-bg-primary text-text-primary dark:text-dark-text-primary focus:outline-none focus:ring-2 focus:ring-brand-primary dark:focus:ring-dark-interactive-primary focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-text-primary dark:text-dark-text-primary mb-2">
                  Phone
                </label>
                <Field
                  name="phone"
                  type="tel"
                  disabled={!isEditing}
                  className="w-full px-4 py-3 border border-border-primary dark:border-dark-border-primary rounded-lg bg-bg-primary dark:bg-dark-bg-primary text-text-primary dark:text-dark-text-primary focus:outline-none focus:ring-2 focus:ring-brand-primary dark:focus:ring-dark-interactive-primary focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-1" />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-text-primary dark:text-dark-text-primary mb-4">
                Address
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="address.street" className="block text-sm font-medium text-text-primary dark:text-dark-text-primary mb-2">
                    Street
                  </label>
                  <Field
                    name="address.street"
                    type="text"
                    disabled={!isEditing}
                    className="w-full px-4 py-3 border border-border-primary dark:border-dark-border-primary rounded-lg bg-bg-primary dark:bg-dark-bg-primary text-text-primary dark:text-dark-text-primary focus:outline-none focus:ring-2 focus:ring-brand-primary dark:focus:ring-dark-interactive-primary focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                  <ErrorMessage name="address.street" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div>
                  <label htmlFor="address.number" className="block text-sm font-medium text-text-primary dark:text-dark-text-primary mb-2">
                    Number
                  </label>
                  <Field
                    name="address.number"
                    type="text"
                    disabled={!isEditing}
                    className="w-full px-4 py-3 border border-border-primary dark:border-dark-border-primary rounded-lg bg-bg-primary dark:bg-dark-bg-primary text-text-primary dark:text-dark-text-primary focus:outline-none focus:ring-2 focus:ring-brand-primary dark:focus:ring-dark-interactive-primary focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                  <ErrorMessage name="address.number" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div>
                  <label htmlFor="address.city" className="block text-sm font-medium text-text-primary dark:text-dark-text-primary mb-2">
                    City
                  </label>
                  <Field
                    name="address.city"
                    type="text"
                    disabled={!isEditing}
                    className="w-full px-4 py-3 border border-border-primary dark:border-dark-border-primary rounded-lg bg-bg-primary dark:bg-dark-bg-primary text-text-primary dark:text-dark-text-primary focus:outline-none focus:ring-2 focus:ring-brand-primary dark:focus:ring-dark-interactive-primary focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                  <ErrorMessage name="address.city" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div>
                  <label htmlFor="address.zipcode" className="block text-sm font-medium text-text-primary dark:text-dark-text-primary mb-2">
                    Zipcode
                  </label>
                  <Field
                    name="address.zipcode"
                    type="text"
                    disabled={!isEditing}
                    className="w-full px-4 py-3 border border-border-primary dark:border-dark-border-primary rounded-lg bg-bg-primary dark:bg-dark-bg-primary text-text-primary dark:text-dark-text-primary focus:outline-none focus:ring-2 focus:ring-brand-primary dark:focus:ring-dark-interactive-primary focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                  <ErrorMessage name="address.zipcode" component="div" className="text-red-500 text-sm mt-1" />
                </div>
              </div>
            </div>

            {isEditing && (
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={onEditToggle}
                  className="px-6 py-3 border border-border-primary dark:border-dark-border-primary text-text-primary dark:text-dark-text-primary rounded-lg hover:bg-bg-secondary dark:hover:bg-dark-bg-secondary transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-3 bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-interactive-primary-hover hover:to-brand-secondary text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {loading ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ProfileForm;