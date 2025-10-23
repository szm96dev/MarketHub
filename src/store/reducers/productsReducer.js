import {
  PRODUCTS_SET_LOADING,
  PRODUCTS_FETCH_SUCCESS,
  PRODUCTS_SET_CATEGORIES,
  PRODUCTS_SET_CURRENT,
  PRODUCTS_CLEAR,
} from '../actionTypes/productsTypes';

const initialState = {
  products: [],
  categories: [],
  currentProduct: null,
  loading: false,
  pagination: {
    page: 1,
    limit: 20,
    total: 0,
    totalPages: 0,
  },
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS_SET_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    
    case PRODUCTS_FETCH_SUCCESS:
      return {
        ...state,
        products: action.payload.products,
        pagination: action.payload.pagination,
        loading: false
      };
    
    case PRODUCTS_SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      };
    
    case PRODUCTS_SET_CURRENT:
      return {
        ...state,
        currentProduct: action.payload,
        loading: false
      };
    
    case PRODUCTS_CLEAR:
      return {
        ...state,
        products: []
      };
    
    default:
      return state;
  }
};

export default productsReducer;

