import React, { useState, useEffect } from 'react';
import { useUserStore } from '../store/userStore';
import PageContainer from '../components/common/PageContainer';
import LoadingSpinner from '../components/common/LoadingSpinner';

const Users = () => {
  const { users, loading, fetchUsers } = useUserStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  useEffect(() => {
    if (searchTerm) {
      const filtered = users.filter(user =>
        user.name.firstname.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.name.lastname.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.username.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredUsers(filtered);
    } else {
      setFilteredUsers(users);
    }
  }, [users, searchTerm]);

  if (loading) {
    return (
      <PageContainer>
        <LoadingSpinner size={60} message="Loading users..." />
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-text-primary dark:text-dark-text-primary mb-4">
            Users
          </h1>
          <p className="text-text-secondary dark:text-dark-text-secondary">
            Browse all users from the Fake Store API
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search users by name, email, or username..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md px-4 py-3 border border-border-primary dark:border-dark-border-primary rounded-lg bg-bg-primary dark:bg-dark-bg-primary text-text-primary dark:text-dark-text-primary placeholder-text-tertiary dark:placeholder-dark-text-tertiary focus:outline-none focus:ring-2 focus:ring-brand-primary dark:focus:ring-dark-interactive-primary focus:border-transparent"
          />
        </div>

        {/* Users Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUsers.map((user) => (
            <div
              key={user.id}
              className="bg-bg-card dark:bg-dark-bg-card rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center text-white font-semibold">
                  {user.name.firstname.charAt(0)}{user.name.lastname.charAt(0)}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary dark:text-dark-text-primary">
                    {user.name.firstname} {user.name.lastname}
                  </h3>
                  <p className="text-text-secondary dark:text-dark-text-secondary text-sm">
                    @{user.username}
                  </p>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-text-tertiary dark:text-dark-text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm text-text-secondary dark:text-dark-text-secondary">
                    {user.email}
                  </span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-text-tertiary dark:text-dark-text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-sm text-text-secondary dark:text-dark-text-secondary">
                    {user.phone}
                  </span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-text-tertiary dark:text-dark-text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm text-text-secondary dark:text-dark-text-secondary">
                    {user.address.city}, {user.address.zipcode}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredUsers.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-text-primary dark:text-dark-text-primary mb-2">
              No users found
            </h3>
            <p className="text-text-secondary dark:text-dark-text-secondary">
              {searchTerm ? 'No users match your search criteria.' : 'No users available.'}
            </p>
          </div>
        )}
      </div>
    </PageContainer>
  );
};

export default Users;