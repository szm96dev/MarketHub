import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SmartImage from './SmartImage';

const CartDrawer = ({ isOpen, onClose }) => {
  const { items, total, itemCount } = useSelector((state) => state.cart);

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-border-primary bg-bg-card shadow-2xl transition-transform duration-300 dark:border-dark-border-primary dark:bg-dark-bg-card ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-border-primary px-6 py-5 dark:border-dark-border-primary">
          <div>
            <h2 className="text-2xl font-bold text-text-primary dark:text-dark-text-primary">Mini Cart</h2>
            <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
              {itemCount} item{itemCount === 1 ? '' : 's'} ready to checkout
            </p>
          </div>
          <button
            onClick={onClose}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-bg-secondary text-text-primary transition hover:bg-bg-tertiary dark:bg-dark-bg-secondary dark:text-dark-text-primary dark:hover:bg-dark-bg-tertiary"
            aria-label="Close mini cart"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-bg-secondary dark:bg-dark-bg-secondary">
                <svg className="h-9 w-9 text-text-tertiary dark:text-dark-text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 3h2l.4 2m0 0L7 13h10l4-8H5.4m0 0L4 3m3 10l-1.5 4.5M9 19.5a1.5 1.5 0 103 0m4.5 0a1.5 1.5 0 103 0" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text-primary dark:text-dark-text-primary">Your cart is empty</h3>
              <p className="mt-2 text-sm text-text-secondary dark:text-dark-text-secondary">
                Add products to see them here instantly.
              </p>
              <Link
                to="/products"
                onClick={onClose}
                className="mt-6 rounded-xl bg-gradient-to-r from-brand-primary to-brand-secondary px-5 py-3 font-semibold text-white transition hover:shadow-lg"
              >
                Browse products
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.productId}
                  className="flex items-center gap-4 rounded-2xl border border-border-primary p-4 dark:border-dark-border-primary"
                >
                  <SmartImage
                    src={item.image}
                    alt={item.productName}
                    className="h-16 w-16 rounded-xl bg-white dark:bg-dark-bg-primary"
                    imgClassName="h-full w-full object-contain"
                    fallbackLabel="No image"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-semibold text-text-primary dark:text-dark-text-primary">{item.productName}</p>
                    <p className="text-sm text-text-secondary dark:text-dark-text-secondary">Qty: {item.quantity}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-text-primary dark:text-dark-text-primary">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-border-primary px-6 py-5 dark:border-dark-border-primary">
          <div className="mb-4 flex items-center justify-between text-text-secondary dark:text-dark-text-secondary">
            <span>Subtotal</span>
            <span className="text-lg font-bold text-text-primary dark:text-dark-text-primary">${total.toFixed(2)}</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Link
              to="/cart"
              onClick={onClose}
              className="rounded-xl border border-border-primary px-4 py-3 text-center font-semibold text-text-primary transition hover:bg-bg-secondary dark:border-dark-border-primary dark:text-dark-text-primary dark:hover:bg-dark-bg-secondary"
            >
              View cart
            </Link>
            <Link
              to="/checkout"
              onClick={onClose}
              className="rounded-xl bg-gradient-to-r from-brand-primary to-brand-secondary px-4 py-3 text-center font-semibold text-white transition hover:shadow-lg"
            >
              Checkout
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
};

export default CartDrawer;
