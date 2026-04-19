import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile, updateProfile } from '../store/actions/authActions';
import PageContainer from '../components/common/PageContainer';
import ProfileHeader from '../components/Profile/ProfileHeader';
import ProfileForm from '../components/Profile/ProfileForm';
import AccountSummary from '../components/Profile/AccountSummary';
import LoadingSpinner from '../components/common/LoadingSpinner';
import localData from '../utils/localData';

const Profile = () => {
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.auth);
  const [isEditing, setIsEditing] = useState(false);
  const [orders, setOrders] = useState([]);
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    if (!user) {
      dispatch(getProfile());
    }
  }, [user, dispatch]);

  useEffect(() => {
    const userId = user?.id || 'guest';
    setOrders(localData.getOrderHistory(userId));
    setAddresses(localData.getSavedAddresses(userId));
  }, [user]);

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
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <ProfileHeader user={user} ordersCount={orders.length} addressesCount={addresses.length} />

        <div className="grid grid-cols-1 gap-8 xl:grid-cols-[minmax(0,1.55fr)_minmax(320px,0.85fr)]">
          <div className="space-y-8">
            <section>
              <ProfileForm
                user={user}
                isEditing={isEditing}
                loading={loading}
                onEditToggle={() => setIsEditing(!isEditing)}
                onSubmit={handleSubmit}
              />
            </section>

            <section className="rounded-[2rem] border border-border-primary/70 bg-bg-card p-6 shadow-lg dark:border-dark-border-primary/70 dark:bg-dark-bg-card sm:p-8">
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.22em] text-brand-primary dark:text-dark-interactive-primary">
                    Saved Addresses
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-text-primary dark:text-dark-text-primary">
                    Delivery locations
                  </h3>
                </div>
                <span className="rounded-full bg-brand-primary/10 px-4 py-2 text-sm font-semibold text-brand-primary dark:bg-dark-interactive-primary/10 dark:text-dark-interactive-primary">
                  {addresses.length} saved
                </span>
              </div>

              {addresses.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-border-primary px-6 py-10 text-center dark:border-dark-border-primary">
                  <p className="text-text-secondary dark:text-dark-text-secondary">
                    No saved addresses yet. Complete checkout once to store an address locally.
                  </p>
                </div>
              ) : (
                <div className="grid gap-4 md:grid-cols-2">
                  {addresses.map((address) => (
                    <div
                      key={address.id}
                      className="rounded-2xl border border-border-primary p-5 dark:border-dark-border-primary"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <p className="font-semibold text-text-primary dark:text-dark-text-primary">
                          {address.fullName}
                        </p>
                        <span className="rounded-full bg-bg-secondary px-3 py-1 text-xs font-medium text-text-secondary dark:bg-dark-bg-primary dark:text-dark-text-secondary">
                          Shipping
                        </span>
                      </div>
                      <p className="mt-3 text-sm leading-6 text-text-secondary dark:text-dark-text-secondary">
                        {address.street}
                        {address.apartment ? `, ${address.apartment}` : ''}
                        <br />
                        {address.city}, {address.state}, {address.postalCode}, {address.country}
                      </p>
                      <p className="mt-3 text-sm text-text-tertiary dark:text-dark-text-tertiary">
                        {address.email} · {address.phone}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </section>

            <section className="rounded-[2rem] border border-border-primary/70 bg-bg-card p-6 shadow-lg dark:border-dark-border-primary/70 dark:bg-dark-bg-card sm:p-8">
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.22em] text-brand-primary dark:text-dark-interactive-primary">
                    Order History
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-text-primary dark:text-dark-text-primary">
                    Recent purchases
                  </h3>
                </div>
                <span className="rounded-full bg-brand-primary/10 px-4 py-2 text-sm font-semibold text-brand-primary dark:bg-dark-interactive-primary/10 dark:text-dark-interactive-primary">
                  {orders.length} orders
                </span>
              </div>

              {orders.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-border-primary px-6 py-10 text-center dark:border-dark-border-primary">
                  <p className="text-text-secondary dark:text-dark-text-secondary">
                    No orders yet. Place an order to see it stored here locally.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div
                      key={order.id}
                      className="rounded-2xl border border-border-primary p-5 dark:border-dark-border-primary"
                    >
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <div className="flex flex-wrap items-center gap-3">
                            <p className="font-semibold text-text-primary dark:text-dark-text-primary">
                              {order.id}
                            </p>
                            <span className="rounded-full bg-brand-primary/10 px-3 py-1 text-sm font-medium text-brand-primary dark:bg-dark-interactive-primary/10 dark:text-dark-interactive-primary">
                              {order.status}
                            </span>
                          </div>
                          <p className="mt-2 text-sm text-text-secondary dark:text-dark-text-secondary">
                            {new Date(order.createdAt).toLocaleDateString()} · {order.itemCount} item
                            {order.itemCount === 1 ? '' : 's'} · {order.paymentMethod}
                          </p>
                        </div>

                        <div className="text-left sm:text-right">
                          <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
                            Total
                          </p>
                          <p className="text-xl font-semibold text-text-primary dark:text-dark-text-primary">
                            ${order.total.toFixed(2)}
                          </p>
                        </div>
                      </div>

                      {order.customer?.email && (
                        <p className="mt-4 text-sm text-text-tertiary dark:text-dark-text-tertiary">
                          {order.customer.email}
                        </p>
                      )}

                      {order.shippingAddress && (
                        <p className="mt-1 text-sm text-text-tertiary dark:text-dark-text-tertiary">
                          {order.shippingAddress.street}
                          {order.shippingAddress.apartment ? `, ${order.shippingAddress.apartment}` : ''}
                          , {order.shippingAddress.city}, {order.shippingAddress.state}
                        </p>
                      )}

                      <div className="mt-4 space-y-2 rounded-2xl bg-bg-secondary/70 p-4 dark:bg-dark-bg-primary/60">
                        {(order.items || []).slice(0, 3).map((item) => (
                          <div
                            key={`${order.id}-${item.productId}`}
                            className="flex items-center justify-between gap-4 text-sm"
                          >
                            <span className="truncate text-text-secondary dark:text-dark-text-secondary">
                              {item.productName} x{item.quantity}
                            </span>
                            <span className="font-medium text-text-primary dark:text-dark-text-primary">
                              ${item.lineTotal.toFixed(2)}
                            </span>
                          </div>
                        ))}
                        {(order.items || []).length > 3 && (
                          <p className="text-sm text-text-tertiary dark:text-dark-text-tertiary">
                            +{(order.items || []).length - 3} more item
                            {(order.items || []).length - 3 === 1 ? '' : 's'}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          </div>

          <aside className="space-y-6 xl:sticky xl:top-28 xl:self-start">
            <AccountSummary user={user} orders={orders} addresses={addresses} />
          </aside>
        </div>
      </div>
    </PageContainer>
  );
};

export default Profile;
