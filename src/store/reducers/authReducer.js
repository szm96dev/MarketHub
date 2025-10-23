import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_REGISTER, AUTH_UPDATE_USER, AUTH_SET_LOADING } from '../actionTypes/authTypes';

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
  loading: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOGIN:
    case AUTH_REGISTER:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true,
        loading: false
      };
    
    case AUTH_LOGOUT:
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
        loading: false
      };
    
    case AUTH_UPDATE_USER:
      return {
        ...state,
        user: action.payload,
        loading: false
      };
    
    case AUTH_SET_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    
    default:
      return state;
  }
};

export default authReducer;

