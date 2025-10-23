import React from 'react';
import StatusBadge from '../common/StatusBadge';

const AccountSummary = ({ user }) => {
  return (
    <div className="bg-bg-card dark:bg-dark-bg-card rounded-2xl shadow-lg p-6">
      <h3 className="text-xl font-semibold text-text-primary dark:text-dark-text-primary mb-6">
        Account Summary
      </h3>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-text-secondary dark:text-dark-text-secondary">
            Status:
          </span>
          <StatusBadge status="active" size="sm" />
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-text-secondary dark:text-dark-text-secondary">
            Member since:
          </span>
          <span className="text-text-primary dark:text-dark-text-primary font-medium">
            {new Date().getFullYear()}
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-text-secondary dark:text-dark-text-secondary">
            Email verified:
          </span>
          <span className="text-green-500 font-medium">
            ✓ Verified
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-text-secondary dark:text-dark-text-secondary">
            Phone verified:
          </span>
          <span className="text-green-500 font-medium">
            ✓ Verified
          </span>
        </div>
      </div>
      
      <div className="mt-6 pt-6 border-t border-border-primary dark:border-dark-border-primary">
        <h4 className="text-lg font-semibold text-text-primary dark:text-dark-text-primary mb-3">
          Quick Stats
        </h4>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-brand-primary dark:text-dark-interactive-primary">
              0
            </div>
            <div className="text-sm text-text-secondary dark:text-dark-text-secondary">
              Orders
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-brand-primary dark:text-dark-interactive-primary">
              $0
            </div>
            <div className="text-sm text-text-secondary dark:text-dark-text-secondary">
              Total Spent
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSummary;