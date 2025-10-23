import { create } from 'zustand';
import { cartService } from '../services/cartService';
import { showToast } from '../utils/toast';

const useApiCartStore = create((set, get) => ({
  // State
  carts: [],
  currentCart: null,
  loading: false,
  pagination: {
    page: 1,
    limit: 20,
    total: 0,
    totalPages: 0,
  },

  // Actions
  fetchCarts: async (filters = {}) => {
    set({ loading: true });
    try {
      const response = await cartService.getCarts(filters);
      set({
        carts: response.carts,
        pagination: response.pagination,
        loading: false,
      });
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Failed to fetch carts';
      set({ loading: false });
      showToast.error(errorMessage);
    }
  },

  fetchCartById: async (id) => {
    set({ loading: true });
    try {
      const cart = await cartService.getCartById(id);
      set({
        currentCart: cart,
        loading: false,
      });
      return cart;
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Failed to fetch cart';
      set({ loading: false });
      showToast.error(errorMessage);
      throw error;
    }
  },

  fetchUserCarts: async (userId) => {
    set({ loading: true });
    try {
      const response = await cartService.getUserCarts(userId);
      set({
        carts: response.carts,
        pagination: response.pagination,
        loading: false,
      });
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Failed to fetch user carts';
      set({ loading: false });
      showToast.error(errorMessage);
    }
  },

  clearCarts: () => {
    set({ carts: [], currentCart: null });
  },
}));

export { useApiCartStore };