import {
  PRODUCTS_SET_LOADING,
  PRODUCTS_FETCH_SUCCESS,
  PRODUCTS_SET_CATEGORIES,
  PRODUCTS_SET_CURRENT,
  PRODUCTS_CLEAR
} from '../actionTypes/productsTypes';
import { productService } from '../../services/productService';

// Sync action creators
export const setLoading = (loading) => ({
  type: PRODUCTS_SET_LOADING,
  payload: loading
});

export const setProducts = (products, pagination) => ({
  type: PRODUCTS_FETCH_SUCCESS,
  payload: { products, pagination }
});

export const setCategories = (categories) => ({
  type: PRODUCTS_SET_CATEGORIES,
  payload: categories
});

export const setCurrentProduct = (product) => ({
  type: PRODUCTS_SET_CURRENT,
  payload: product
});

export const clearProducts = () => ({
  type: PRODUCTS_CLEAR
});

// Async thunks
export const fetchProducts = (filters = {}) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await productService.getProducts(filters);
    dispatch(setProducts(response.products, response.pagination));
  } catch (error) {
    dispatch(setLoading(false));
    console.error('Failed to fetch products:', error);
  }
};

export const fetchCategories = () => async (dispatch) => {
  try {
    const categories = await productService.getCategories();
    dispatch(setCategories(categories));
  } catch (error) {
    console.error('Failed to fetch categories:', error);
  }
};

export const fetchProductById = (id) => async (dispatch) => {
  dispatch(setLoading(true));
  dispatch(setCurrentProduct(null));
  try {
    const product = await productService.getProductById(id);
    dispatch(setCurrentProduct(product));
    return product;
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(setCurrentProduct(null));
    throw error;
  }
};

export const searchProducts = (query, filters = {}) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await productService.searchProducts(query, filters);
    dispatch(setProducts(response.products, response.pagination));
  } catch (error) {
    dispatch(setLoading(false));
    console.error('Failed to search products:', error);
  }
};

export const getProductsByCategory = (category, filters = {}) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await productService.getProductsByCategory(category, filters);
    dispatch(setProducts(response.products, response.pagination));
  } catch (error) {
    dispatch(setLoading(false));
    console.error('Failed to fetch products by category:', error);
  }
};

