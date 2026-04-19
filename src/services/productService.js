import apiClient from './apiClient';

const sortProducts = (products, sortBy) => {
  const sortedProducts = [...products];

  switch (sortBy) {
    case 'name':
      return sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
    case 'name-desc':
      return sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
    case 'price':
      return sortedProducts.sort((a, b) => a.price - b.price);
    case 'price-desc':
      return sortedProducts.sort((a, b) => b.price - a.price);
    case 'rating':
      return sortedProducts.sort((a, b) => (b.rating?.rate || 0) - (a.rating?.rate || 0));
    case 'newest':
      return sortedProducts.sort((a, b) => (b.id || 0) - (a.id || 0));
    default:
      return sortedProducts;
  }
};

export const productService = {
  async getProducts(filters = {}) {
    try {
      const response = await apiClient.get('/products');
      let products = response.data;
      
      // Apply client-side filtering
      if (filters.category) {
        products = products.filter(product => 
          product.category.toLowerCase() === filters.category.toLowerCase()
        );
      }
      
      if (filters.search) {
        products = products.filter(product =>
          product.title.toLowerCase().includes(filters.search.toLowerCase()) ||
          product.description.toLowerCase().includes(filters.search.toLowerCase())
        );
      }
      
      if (filters.minPrice !== undefined) {
        products = products.filter(product => product.price >= filters.minPrice);
      }
      
      if (filters.maxPrice !== undefined) {
        products = products.filter(product => product.price <= filters.maxPrice);
      }

      if (filters.sortBy) {
        products = sortProducts(products, filters.sortBy);
      }
      
      // Pagination
      const page = filters.page || 1;
      const limit = filters.limit || 20;
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      
      const paginatedProducts = products.slice(startIndex, endIndex);
      
      return {
        products: paginatedProducts,
        pagination: {
          page,
          limit,
          total: products.length,
          totalPages: Math.ceil(products.length / limit)
        }
      };
    } catch (error) {
      throw new Error('Failed to fetch products');
    }
  },

  async getProductById(id) {
    try {
      const response = await apiClient.get(`/products/${id}`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch product');
    }
  },

  async getCategories() {
    try {
      const response = await apiClient.get('/products/categories');
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch categories');
    }
  },

  async searchProducts(query, filters = {}) {
    try {
      const response = await apiClient.get('/products');
      let products = response.data;
      
      // Filter by search query
      products = products.filter(product =>
        product.title.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
      );
      
      // Apply additional filters
      if (filters.category) {
        products = products.filter(product => 
          product.category.toLowerCase() === filters.category.toLowerCase()
        );
      }
      
      if (filters.minPrice !== undefined) {
        products = products.filter(product => product.price >= filters.minPrice);
      }
      
      if (filters.maxPrice !== undefined) {
        products = products.filter(product => product.price <= filters.maxPrice);
      }

      if (filters.sortBy) {
        products = sortProducts(products, filters.sortBy);
      }
      
      // Pagination
      const page = filters.page || 1;
      const limit = filters.limit || 20;
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      
      const paginatedProducts = products.slice(startIndex, endIndex);
      
      return {
        products: paginatedProducts,
        pagination: {
          page,
          limit,
          total: products.length,
          totalPages: Math.ceil(products.length / limit)
        }
      };
    } catch (error) {
      throw new Error('Failed to search products');
    }
  },

  async getProductsByCategory(category, filters = {}) {
    try {
      const response = await apiClient.get('/products');
      let products = response.data;
      
      // Filter by category
      products = products.filter(product => 
        product.category.toLowerCase() === category.toLowerCase()
      );
      
      // Apply additional filters
      if (filters.search) {
        products = products.filter(product =>
          product.title.toLowerCase().includes(filters.search.toLowerCase()) ||
          product.description.toLowerCase().includes(filters.search.toLowerCase())
        );
      }
      
      if (filters.minPrice !== undefined) {
        products = products.filter(product => product.price >= filters.minPrice);
      }
      
      if (filters.maxPrice !== undefined) {
        products = products.filter(product => product.price <= filters.maxPrice);
      }

      if (filters.sortBy) {
        products = sortProducts(products, filters.sortBy);
      }
      
      // Pagination
      const page = filters.page || 1;
      const limit = filters.limit || 20;
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      
      const paginatedProducts = products.slice(startIndex, endIndex);
      
      return {
        products: paginatedProducts,
        pagination: {
          page,
          limit,
          total: products.length,
          totalPages: Math.ceil(products.length / limit)
        }
      };
    } catch (error) {
      throw new Error('Failed to fetch products by category');
    }
  }
};
