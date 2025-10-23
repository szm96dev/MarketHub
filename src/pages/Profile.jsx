import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile, updateProfile } from '../store/actions/authActions';
import PageContainer from '../components/common/PageContainer';
import ProfileHeader from '../components/Profile/ProfileHeader';
import ProfileForm from '../components/Profile/ProfileForm';
import AccountSummary from '../components/Profile/AccountSummary';
import QuickActions from '../components/Profile/QuickActions';
import LoadingSpinner from '../components/common/LoadingSpinner';

const Profile = () => {
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.auth);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (!user) {
      dispatch(getProfile());
    }
  }, [user, dispatch]);

  const handleSubmit = async (values) => {
    try {
      await dispatch(updateProfile(values));
      setIsEditing(false);
    } catch (error) {
      console.error('Profile update failed:', error);
    }
  };

  if (loading) {
    return (
      <PageContainer>
        <LoadingSpinner size={60} message="Loading profile..." />
      </PageContainer>
    );
  }

  if (!user) {
    return (
      <PageContainer>
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-text-primary dark:text-dark-text-primary mb-4">
            Profile Not Found
          </h2>
          <p className="text-text-secondary dark:text-dark-text-secondary">
            Unable to load your profile information.
          </p>
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <ProfileHeader user={user} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Information */}
          <div className="lg:col-span-2">
            <ProfileForm
              user={user}
              isEditing={isEditing}
              loading={loading}
              onEditToggle={() => setIsEditing(!isEditing)}
              onSubmit={handleSubmit}
            />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <AccountSummary user={user} />
            <QuickActions />
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Profile;