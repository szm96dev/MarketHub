import { FAVORITES_ADD, FAVORITES_REMOVE, FAVORITES_TOGGLE, FAVORITES_CLEAR } from '../actionTypes/favoritesTypes';

const initialState = {
  favorites: []
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FAVORITES_ADD: {
      const isAlreadyFavorite = state.favorites.some(fav => fav.id === action.payload.id);
      if (isAlreadyFavorite) {
        return state;
      }
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };
    }
    
    case FAVORITES_REMOVE:
      return {
        ...state,
        favorites: state.favorites.filter(fav => fav.id !== action.payload)
      };
    
    case FAVORITES_TOGGLE: {
      const isFavorite = state.favorites.some(fav => fav.id === action.payload.id);
      if (isFavorite) {
        return {
          ...state,
          favorites: state.favorites.filter(fav => fav.id !== action.payload.id)
        };
      } else {
        return {
          ...state,
          favorites: [...state.favorites, {
            id: action.payload.id,
            title: action.payload.title,
            price: action.payload.price,
            image: action.payload.image,
            category: action.payload.category,
            rating: action.payload.rating,
            description: action.payload.description
          }]
        };
      }
    }
    
    case FAVORITES_CLEAR:
      return {
        ...state,
        favorites: []
      };
    
    default:
      return state;
  }
};

export default favoritesReducer;

