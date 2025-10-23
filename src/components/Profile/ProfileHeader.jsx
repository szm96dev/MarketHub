import React from 'react';

const ProfileHeader = ({ user }) => {
  const title = user ? `${user.name?.firstname || 'User'}'s Profile` : 'Profile';
  const subtitle = user ? `Welcome back, ${user.name?.firstname || 'User'}!` : 'Manage your account settings';

  return (
    <div className="text-center mb-8">
      <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center">
        <span className="text-3xl font-bold text-white">
          {user?.name?.firstname?.charAt(0) || 'U'}
        </span>
      </div>
      <h1 className="text-4xl font-bold text-text-primary dark:text-dark-text-primary mb-4">
        {title}
      </h1>
      <p className="text-xl text-text-secondary dark:text-dark-text-secondary">
        {subtitle}
      </p>
    </div>
  );
};

export default ProfileHeader;