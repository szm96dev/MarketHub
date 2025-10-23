import { CART_ADD, CART_REMOVE, CART_UPDATE_QTY, CART_CLEAR } from '../actionTypes/cartTypes';

export const addToCart = (item) => ({ type: CART_ADD, payload: item });
export const removeFromCart = (productId) => ({ type: CART_REMOVE, payload: productId });
export const updateCartQty = (productId, quantity) => ({ type: CART_UPDATE_QTY, payload: { productId, quantity } });
export const clearCart = () => ({ type: CART_CLEAR });


