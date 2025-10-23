import apiClient from './apiClient';

// Fetch carts with optional filters: { userId?: number|string, page?: number, limit?: number }
export const getCarts = async (filters = {}) => {
  let url = '/carts';
  if (filters.userId) url = `/carts/user/${filters.userId}`;

  const response = await apiClient.get(url);
  const carts = Array.isArray(response.data) ? response.data : [];

  const page = filters.page || 1;
  const limit = filters.limit || 10;
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedCarts = carts.slice(startIndex, endIndex);

  return {
    carts: paginatedCarts,
    pagination: {
      current: page,
      pages: Math.ceil(carts.length / limit) || 1,
      total: carts.length,
    },
  };
};

export const getCartById = async (id) => {
  const response = await apiClient.get(`/carts/${id}`);
  return { cart: response.data };
};

export const getUserCarts = async (userId, filters = {}) => {
  const response = await apiClient.get(`/carts/user/${userId}`);
  const carts = Array.isArray(response.data) ? response.data : [];

  const page = filters.page || 1;
  const limit = filters.limit || 10;
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedCarts = carts.slice(startIndex, endIndex);

  return {
    carts: paginatedCarts,
    pagination: {
      current: page,
      pages: Math.ceil(carts.length / limit) || 1,
      total: carts.length,
    },
  };
};

// Create a new cart
// Payload example:
// {
//   userId: 1,
//   date: '2020-02-03',
//   products: [{ productId: 1, quantity: 2 }]
// }
export const createCart = async (cartData) => {
  const response = await apiClient.post('/carts', cartData);
  return { cart: response.data };
};

// Update an existing cart
export const updateCart = async (id, cartData) => {
  const response = await apiClient.put(`/carts/${id}`, cartData);
  return { cart: response.data };
};

// Delete a cart
export const deleteCart = async (id) => {
  const response = await apiClient.delete(`/carts/${id}`);
  return { success: true, result: response.data };
};

export const cartService = {
  getCarts,
  getCartById,
  getUserCarts,
  createCart,
  updateCart,
  deleteCart,
};
