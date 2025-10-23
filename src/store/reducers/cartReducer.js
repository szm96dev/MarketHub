import { CART_ADD, CART_REMOVE, CART_UPDATE_QTY, CART_CLEAR } from '../actionTypes/cartTypes';

const initialState = {
  items: [],
  total: 0,
  itemCount: 0,
};

function calcTotals(items) {
  const total = items.reduce((s, i) => s + i.price * i.quantity, 0);
  const itemCount = items.reduce((s, i) => s + i.quantity, 0);
  return { total, itemCount };
}

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case CART_ADD: {
      const existing = state.items.find(i => i.productId === action.payload.productId);
      const items = existing
        ? state.items.map(i => i.productId === action.payload.productId ? { ...i, quantity: i.quantity + 1 } : i)
        : [...state.items, { ...action.payload, quantity: 1 }];
      return { ...state, items, ...calcTotals(items) };
    }
    case CART_REMOVE: {
      const items = state.items.filter(i => i.productId !== action.payload);
      return { ...state, items, ...calcTotals(items) };
    }
    case CART_UPDATE_QTY: {
      const { productId, quantity } = action.payload;
      const items = quantity <= 0
        ? state.items.filter(i => i.productId !== productId)
        : state.items.map(i => i.productId === productId ? { ...i, quantity } : i);
      return { ...state, items, ...calcTotals(items) };
    }
    case CART_CLEAR: {
      return { ...initialState };
    }
    default:
      return state;
  }
}


