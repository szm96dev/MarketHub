// Legacy API endpoints - use individual services instead

// Re-export services for backward compatibility
export const authAPI = {
  login: authService.login,
  register: authService.register,
  getProfile: authService.getProfile,
  updateProfile: authService.updateProfile,
};

export const productAPI = {
  getProducts: productService.getProducts,
  getProductById: productService.getProductById,
  getCategories: productService.getCategories,
};

export const userAPI = {
  getUsers: userService.getUsers,
  getUserById: userService.getUserById,
};

export const cartAPI = {
  getCarts: cartService.getCarts,
  getCartById: cartService.getCartById,
  getUserCarts: cartService.getUserCarts,
};

export { authService, productService, userService, cartService };
