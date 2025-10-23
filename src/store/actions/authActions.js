import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_REGISTER, AUTH_UPDATE_USER, AUTH_SET_LOADING } from '../actionTypes/authTypes';
import { authService } from '../../services/authService';
import { showToast } from '../../utils/toast';

// Sync action creators
export const loginSuccess = (user, token) => ({
  type: AUTH_LOGIN,
  payload: { user, token }
});

export const logoutAction = () => ({
  type: AUTH_LOGOUT
});

export const registerSuccess = (user, token) => ({
  type: AUTH_REGISTER,
  payload: { user, token }
});

export const updateUserSuccess = (user) => ({
  type: AUTH_UPDATE_USER,
  payload: user
});

export const setLoading = (loading) => ({
  type: AUTH_SET_LOADING,
  payload: loading
});

// Async thunks
export const login = (credentials) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await authService.login(credentials);
    dispatch(loginSuccess(response.user, response.token));
    showToast.success(response.message);
    return response;
  } catch (error) {
    dispatch(setLoading(false));
    showToast.error(error.message);
    throw error;
  }
};

export const register = (userData) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await authService.register(userData);
    dispatch(registerSuccess(response.user, response.token));
    showToast.success(response.message);
    return response;
  } catch (error) {
    dispatch(setLoading(false));
    showToast.error(error.message);
    throw error;
  }
};

export const getProfile = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await authService.getProfile();
    dispatch(updateUserSuccess(response.user));
    return response;
  } catch (error) {
    dispatch(setLoading(false));
    console.warn('Profile fetch failed:', error.message);
    throw error;
  }
};

export const updateProfile = (userData) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await authService.updateProfile(userData);
    dispatch(updateUserSuccess(response.user));
    showToast.success(response.message);
    return response;
  } catch (error) {
    dispatch(setLoading(false));
    showToast.error(error.message);
    throw error;
  }
};

export const logout = () => (dispatch) => {
  authService.logout();
  dispatch(logoutAction());
  showToast.success('Logged out successfully');
};
