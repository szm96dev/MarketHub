import React from 'react';

const ProductsPagination = ({ currentPage, totalPages, paginationWindow, onPageChange }) => {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="mt-10 flex flex-col items-center gap-4">
      <div className="flex flex-wrap items-center justify-center gap-2">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="rounded-xl border border-neutral-300 bg-white px-4 py-2 text-sm font-semibold text-neutral-700 transition hover:border-brand-primary hover:text-brand-primary disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:border-dark-interactive-primary dark:hover:text-dark-interactive-primary"
        >
          Previous
        </button>
        {paginationWindow.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`h-11 w-11 rounded-xl text-sm font-bold transition ${
              page === currentPage
                ? 'bg-gradient-to-r from-brand-primary to-brand-secondary text-white shadow-lg'
                : 'border border-neutral-300 bg-white text-neutral-700 hover:border-brand-primary hover:text-brand-primary dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:border-dark-interactive-primary dark:hover:text-dark-interactive-primary'
            }`}
          >
            {page}
          </button>
        ))}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="rounded-xl border border-neutral-300 bg-white px-4 py-2 text-sm font-semibold text-neutral-700 transition hover:border-brand-primary hover:text-brand-primary disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:border-dark-interactive-primary dark:hover:text-dark-interactive-primary"
        >
          Next
        </button>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-400">
        Page {currentPage} of {totalPages}
      </p>
    </div>
  );
};

export default ProductsPagination;
