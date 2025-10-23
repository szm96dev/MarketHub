import { FAVORITES_ADD, FAVORITES_REMOVE, FAVORITES_TOGGLE, FAVORITES_CLEAR } from '../actionTypes/favoritesTypes';

export const addToFavorites = (product) => ({
  type: FAVORITES_ADD,
  payload: {
    id: product.id,
    title: product.title,
    price: product.price,
    image: product.image,
    category: product.category,
    rating: product.rating,
    description: product.description
  }
});

export const removeFromFavorites = (productId) => ({
  type: FAVORITES_REMOVE,
  payload: productId
});

export const toggleFavorite = (product) => ({
  type: FAVORITES_TOGGLE,
  payload: product
});

export const clearFavorites = () => ({
  type: FAVORITES_CLEAR
});

