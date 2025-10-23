import apiClient from './apiClient';

const userService = {
  getUsers: async (filters = {}) => {
    try {
      const response = await apiClient.get('/users');
      let users = response.data;

      // Apply client-side filtering for search
      if (filters.search) {
        users = users.filter((user) =>
          user.name.firstname.toLowerCase().includes(filters.search.toLowerCase()) ||
          user.name.lastname.toLowerCase().includes(filters.search.toLowerCase()) ||
          user.email.toLowerCase().includes(filters.search.toLowerCase()) ||
          user.username.toLowerCase().includes(filters.search.toLowerCase())
        );
      }

      // Apply pagination
      const page = filters.page || 1;
      const limit = filters.limit || 20;
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      const paginatedUsers = users.slice(startIndex, endIndex);

      return {
        users: paginatedUsers,
        pagination: {
          page,
          limit,
          total: users.length,
          totalPages: Math.ceil(users.length / limit),
        },
      };
    } catch (error) {
      throw error;
    }
  },

  getUserById: async (id) => {
    try {
      const response = await apiClient.get(`/users/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export { userService };