import React from 'react';

const ProfileHeader = ({ user, ordersCount = 0, addressesCount = 0 }) => {
  const firstName = user?.name?.firstname || 'User';
  const lastName = user?.name?.lastname || '';
  const fullName = `${firstName} ${lastName}`.trim();
  const location = user?.address?.city || 'No city added';
  const username = user?.username || 'username';
  const subtitle = user
    ? 'Manage your personal details, saved addresses, and recent order activity from one place.'
    : 'Manage your account settings';

  const highlights = [
    { label: 'Orders', value: ordersCount },
    { label: 'Saved Addresses', value: addressesCount },
    { label: 'Account Status', value: 'Active' },
  ];

  return (
    <section className="mb-8 overflow-hidden rounded-[2rem] border border-border-primary/70 bg-bg-card shadow-xl dark:border-dark-border-primary/70 dark:bg-dark-bg-card">
      <div className="bg-gradient-to-r from-brand-primary/15 via-brand-secondary/10 to-transparent px-6 py-8 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary shadow-lg">
              <span className="text-3xl font-bold text-white">
                {firstName.charAt(0)}
              </span>
            </div>

            <div className="space-y-3">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-brand-primary dark:text-dark-interactive-primary">
                  Account Dashboard
                </p>
                <h1 className="mt-2 text-3xl font-bold text-text-primary dark:text-dark-text-primary sm:text-4xl">
                  {fullName}
                </h1>
              </div>

              <div className="flex flex-wrap gap-3 text-sm text-text-secondary dark:text-dark-text-secondary">
                <span className="rounded-full border border-border-primary px-3 py-1 dark:border-dark-border-primary">
                  @{username}
                </span>
                <span className="rounded-full border border-border-primary px-3 py-1 dark:border-dark-border-primary">
                  {location}
                </span>
                <span className="rounded-full border border-border-primary px-3 py-1 dark:border-dark-border-primary">
                  {user?.email || 'No email added'}
                </span>
              </div>

              <p className="max-w-2xl text-base leading-7 text-text-secondary dark:text-dark-text-secondary">
                {subtitle}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:min-w-[420px]">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/40 bg-white/70 px-4 py-4 backdrop-blur dark:border-white/5 dark:bg-dark-bg-primary/70"
              >
                <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
                  {item.label}
                </p>
                <p className="mt-2 text-2xl font-bold text-text-primary dark:text-dark-text-primary">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileHeader;
