import axios from 'axios';

// Create axios instance for Fake Store API
const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'https://fakestoreapi.com',
  timeout: parseInt(process.env.REACT_APP_API_TIMEOUT) || 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      const url = error.config?.url || '';
      const isAuthAttempt = url.includes('/api/auth/');
      const isProfileAttempt = url.includes('/api/users/profile');
      const hasToken = localStorage.getItem('token');
      
      // Only redirect if:
      // 1. It's NOT an auth attempt (login/register)
      // 2. It's NOT a profile attempt
      // 3. User has a token (meaning they were authenticated)
      if (!isAuthAttempt && !isProfileAttempt && hasToken) {
        localStorage.removeItem('token');
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

export default apiClient;
