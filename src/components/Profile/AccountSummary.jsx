import React from 'react';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import EmailOutlined from '@mui/icons-material/EmailOutlined';
import LocationOnOutlined from '@mui/icons-material/LocationOnOutlined';
import PersonOutlineOutlined from '@mui/icons-material/PersonOutlineOutlined';
import { useNavigate } from 'react-router-dom';
import StatusBadge from '../common/StatusBadge';

const AccountSummary = ({ user, orders = [], addresses = [] }) => {
  const navigate = useNavigate();
  const totalSpent = orders.reduce((sum, order) => sum + order.total, 0);
  const latestOrder = orders[0];
  const username = user?.username ? `@${user.username}` : 'No username';
  const email = user?.email || 'No email added';
  const city = user?.address?.city || 'No city added';
  const memberSince = new Date().getFullYear();
  const overviewItems = [
    {
      label: 'Username',
      value: username,
      icon: <PersonOutlineOutlined sx={{ fontSize: 18 }} />,
    },
    {
      label: 'Email',
      value: email,
      icon: <EmailOutlined sx={{ fontSize: 18 }} />,
    },
    {
      label: 'City',
      value: city,
      icon: <LocationOnOutlined sx={{ fontSize: 18 }} />,
    },
  ];

  return (
    <div className="rounded-[2rem] border border-border-primary/70 bg-bg-card p-6 shadow-lg dark:border-dark-border-primary/70 dark:bg-dark-bg-card">
      <div className="mb-6">
        <p className="text-sm font-medium uppercase tracking-[0.22em] text-brand-primary dark:text-dark-interactive-primary">
          Account Overview
        </p>
        <h3 className="mt-2 text-2xl font-semibold text-text-primary dark:text-dark-text-primary">
          Dashboard snapshot
        </h3>
        <p className="mt-2 text-sm leading-6 text-text-secondary dark:text-dark-text-secondary">
          Your account status, spend summary, and latest activity in one place.
        </p>
      </div>

      <div className="space-y-3">
        {overviewItems.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-3 rounded-2xl bg-bg-secondary/70 px-4 py-3 dark:bg-dark-bg-primary/60"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary dark:bg-dark-interactive-primary/10 dark:text-dark-interactive-primary">
              {item.icon}
            </div>
            <div className="min-w-0">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-text-tertiary dark:text-dark-text-tertiary">
                {item.label}
              </p>
              <p className="truncate text-sm font-medium text-text-primary dark:text-dark-text-primary">
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <button
          type="button"
          onClick={() => navigate('/cart')}
          className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-brand-primary to-brand-secondary px-4 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
        >
          <ShoppingCartOutlined sx={{ fontSize: 20 }} />
          View Cart
        </button>
      </div>

      <div className="mt-6 border-t border-border-primary pt-6 dark:border-dark-border-primary">
        <h4 className="mb-4 text-lg font-semibold text-text-primary dark:text-dark-text-primary">
          Account Status
        </h4>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between rounded-xl bg-bg-secondary/70 px-4 py-3 dark:bg-dark-bg-primary/60">
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
            {memberSince}
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

      <div className="mt-6 border-t border-border-primary pt-6 dark:border-dark-border-primary">
        <h4 className="mb-4 text-lg font-semibold text-text-primary dark:text-dark-text-primary">
          Quick Stats
        </h4>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-xl border border-border-primary p-4 text-center dark:border-dark-border-primary">
            <div className="text-2xl font-bold text-brand-primary dark:text-dark-interactive-primary">
              {orders.length}
            </div>
            <div className="text-sm text-text-secondary dark:text-dark-text-secondary">
              Orders
            </div>
          </div>
          <div className="rounded-xl border border-border-primary p-4 text-center dark:border-dark-border-primary">
            <div className="text-2xl font-bold text-brand-primary dark:text-dark-interactive-primary">
              ${totalSpent.toFixed(0)}
            </div>
            <div className="text-sm text-text-secondary dark:text-dark-text-secondary">
              Total Spent
            </div>
          </div>
        </div>
        <div className="mt-4 rounded-xl border border-border-primary p-4 text-center dark:border-dark-border-primary">
          <div className="text-2xl font-bold text-brand-primary dark:text-dark-interactive-primary">
            {addresses.length}
          </div>
          <div className="text-sm text-text-secondary dark:text-dark-text-secondary">
            Saved Addresses
          </div>
        </div>
      </div>

      <div className="mt-6 border-t border-border-primary pt-6 dark:border-dark-border-primary">
        <h4 className="mb-3 text-lg font-semibold text-text-primary dark:text-dark-text-primary">
          Latest Activity
        </h4>
        {latestOrder ? (
          <div className="rounded-xl bg-bg-secondary/70 p-4 dark:bg-dark-bg-primary/60">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-medium text-text-primary dark:text-dark-text-primary">
                  {latestOrder.id}
                </p>
                <p className="mt-1 text-sm text-text-secondary dark:text-dark-text-secondary">
                  {latestOrder.itemCount} item{latestOrder.itemCount === 1 ? '' : 's'} ordered
                </p>
              </div>
              <span className="text-sm font-semibold text-brand-primary dark:text-dark-interactive-primary">
                ${latestOrder.total.toFixed(2)}
              </span>
            </div>
            <p className="mt-3 text-sm text-text-secondary dark:text-dark-text-secondary">
              {new Date(latestOrder.createdAt).toLocaleDateString()} via {latestOrder.paymentMethod}
            </p>
          </div>
        ) : (
          <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
            No recent orders yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default AccountSummary;
