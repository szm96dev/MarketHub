import React from 'react';
import Button from '../common/Button';

const shippingFields = [
  ['fullName', 'Full name'],
  ['email', 'Email'],
  ['phone', 'Phone'],
  ['street', 'Street address'],
  ['apartment', 'Apartment / Suite'],
  ['city', 'City'],
  ['state', 'State / Region'],
  ['postalCode', 'Postal code'],
  ['country', 'Country'],
];

const ShippingStep = ({
  savedAddresses,
  shippingForm,
  shippingTouched,
  shippingErrors,
  onApplySavedAddress,
  onShippingChange,
  onShippingBlur,
  onContinue,
}) => (
  <>
    <div>
      <h2 className="mb-4 text-2xl font-semibold text-text-primary dark:text-dark-text-primary">
        Shipping Details
      </h2>
      {savedAddresses.length > 0 && (
        <div className="mb-6 space-y-3">
          <p className="text-sm font-medium text-text-secondary dark:text-dark-text-secondary">
            Use a saved address
          </p>
          <div className="grid gap-3">
            {savedAddresses.map((address) => (
              <button
                key={address.id}
                onClick={() => onApplySavedAddress(address)}
                className="rounded-2xl border border-border-primary p-4 text-left transition hover:border-brand-primary dark:border-dark-border-primary dark:hover:border-dark-interactive-primary"
              >
                <p className="font-semibold text-text-primary dark:text-dark-text-primary">{address.fullName}</p>
                <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
                  {address.street}{address.apartment ? `, ${address.apartment}` : ''}, {address.city}, {address.state}, {address.postalCode}, {address.country}
                </p>
              </button>
            ))}
          </div>
        </div>
      )}
      <div className="grid gap-4 md:grid-cols-2">
        {shippingFields.map(([field, label]) => (
          <div key={field} className={field === 'street' ? 'md:col-span-2' : ''}>
            <label className="mb-2 block text-sm font-medium text-text-secondary dark:text-dark-text-secondary">
              {label}
            </label>
            {field === 'country' ? (
              <select
                value={shippingForm[field]}
                onChange={(event) => onShippingChange(field, event.target.value)}
                onBlur={() => onShippingBlur(field)}
                className={`w-full rounded-2xl border bg-bg-secondary px-4 py-3 text-text-primary outline-none transition focus:border-brand-primary dark:bg-dark-bg-secondary dark:text-dark-text-primary dark:focus:border-dark-interactive-primary ${
                  shippingTouched[field] && shippingErrors[field]
                    ? 'border-red-500'
                    : 'border-border-primary dark:border-dark-border-primary'
                }`}
              >
                <option value="United States">United States</option>
                <option value="Canada">Canada</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Australia">Australia</option>
              </select>
            ) : (
              <input
                type={field === 'email' ? 'email' : 'text'}
                value={shippingForm[field]}
                onChange={(event) => onShippingChange(field, event.target.value)}
                onBlur={() => onShippingBlur(field)}
                placeholder={
                  field === 'street' ? '123 Main Street' :
                  field === 'apartment' ? 'Apartment 4B (optional)' :
                  field === 'postalCode' ? '10001' :
                  ''
                }
                className={`w-full rounded-2xl border bg-bg-secondary px-4 py-3 text-text-primary outline-none transition focus:border-brand-primary dark:bg-dark-bg-secondary dark:text-dark-text-primary dark:focus:border-dark-interactive-primary ${
                  shippingTouched[field] && shippingErrors[field]
                    ? 'border-red-500'
                    : 'border-border-primary dark:border-dark-border-primary'
                }`}
              />
            )}
            {shippingTouched[field] && shippingErrors[field] && (
              <p className="mt-2 text-sm text-red-500">{shippingErrors[field]}</p>
            )}
          </div>
        ))}
      </div>
    </div>
    <Button onClick={onContinue} variant="gradient" fullWidth>
      Continue to payment
    </Button>
  </>
);

export default ShippingStep;
