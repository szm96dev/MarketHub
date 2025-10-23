import React from 'react';

const StatusBadge = ({ status, size = 'md', showIcon = true }) => {
  const getStatusConfig = () => {
    switch (status) {
      case 'success':
        return {
          color: 'bg-green-500/10 text-green-600 border-green-500/20',
          icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          ),
        };
      case 'processing':
        return {
          color: 'bg-brand-primary/10 text-brand-primary border-brand-primary/20',
          icon: (
            <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          ),
        };
      case 'warning':
        return {
          color: 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20',
          icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          ),
        };
      case 'error':
        return {
          color: 'bg-red-500/10 text-red-600 border-red-500/20',
          icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ),
        };
      case 'info':
        return {
          color: 'bg-blue-500/10 text-blue-600 border-blue-500/20',
          icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
        };
      case 'pending':
        return {
          color: 'bg-gray-500/10 text-gray-600 border-gray-500/20',
          icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
        };
      default:
        return {
          color: 'bg-gray-500/10 text-gray-600 border-gray-500/20',
          icon: null,
        };
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-2 py-1 text-xs';
      case 'md':
        return 'px-3 py-1.5 text-sm';
      case 'lg':
        return 'px-4 py-2 text-base';
      default:
        return 'px-3 py-1.5 text-sm';
    }
  };

  const config = getStatusConfig();

  return (
    <span className={`inline-flex items-center space-x-1 rounded-full border font-medium ${config.color} ${getSizeClasses()}`}>
      {showIcon && config.icon && (
        <span className="flex-shrink-0">
          {config.icon}
        </span>
      )}
      <span className="capitalize">{status}</span>
    </span>
  );
};

export default StatusBadge;