import apiClient from './apiClient';

export async function registerUserFakeStore(userPayload) {
  const { data } = await apiClient.post('/users', userPayload);
  return data;
}

export const login = async (credentials) => {
    try {
        // Use Fake Store API authentication endpoint
        const response = await apiClient.post('/auth/login', {
            username: credentials.email,
            password: credentials.password
        });

        const authData = response.data;
        
        // Get user details from the users endpoint
        const userResponse = await apiClient.get('/users');
        const users = userResponse.data;
        
        // Find user by email (since Fake Store API doesn't have direct user lookup by token)
        const user = users.find((u) => u.email === credentials.email) || users[0];
        
        const token = authData.token || 'fake-store-token-' + Date.now();
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        
        return {
            message: 'Login successful',
            token: token,
            user: user
        };
    } catch (error) {
        throw new Error('Login failed. Please check your credentials.');
    }
};

export const register = async (userData) => {
    try {
        // Create a new user using Fake Store API users endpoint
        const newUser = {
            email: userData.email,
            username: userData.username,
            password: userData.password,
            name: {
                firstname: userData.firstname,
                lastname: userData.lastname
            },
            address: {
                city: 'New York',
                street: '123 Main St',
                number: 123,
                zipcode: '10001',
                geolocation: {
                    lat: '40.7128',
                    long: '-74.0060'
                }
            },
            phone: '555-0123'
        };

        const response = await apiClient.post('/users', newUser);
        const createdUser = response.data;
        const token = 'fake-store-token-' + Date.now();
        
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(createdUser));
        
        return {
            message: 'Registration successful',
            token: token,
            user: createdUser
        };
    } catch (error) {
        throw new Error('Registration failed. Please try again.');
    }
};

export const getProfile = async () => {
    const userStr = localStorage.getItem('user');
    if (!userStr) {
        throw new Error('User not found');
    }
    
    const user = JSON.parse(userStr);
    
    // Optionally fetch fresh user data from API
    try {
        const response = await apiClient.get(`/users/${user.id}`);
        const freshUser = response.data;
        localStorage.setItem('user', JSON.stringify(freshUser));
        return { user: freshUser };
    } catch (error) {
        // If API call fails, return cached user
        console.warn('Failed to fetch fresh user data, using cached data');
    }
    
    return { user };
};

export const updateProfile = async (userData) => {
    const userStr = localStorage.getItem('user');
    if (!userStr) {
        throw new Error('User not found');
    }
    
    const user = JSON.parse(userStr);
    
    // Update user data
    if (userData.firstname) user.name.firstname = userData.firstname;
    if (userData.lastname) user.name.lastname = userData.lastname;
    if (userData.username) user.username = userData.username;
    if (userData.email) user.email = userData.email;
    if (userData.phone) user.phone = userData.phone;
    
    try {
        // Update user via Fake Store API
        const response = await apiClient.put(`/users/${user.id}`, user);
        const updatedUser = response.data;
        localStorage.setItem('user', JSON.stringify(updatedUser));
        return {
            user: updatedUser,
            message: 'Profile updated successfully'
        };
    } catch (error) {
        console.warn('Failed to update user via API, using local update');
    }
    
    // Fallback to local update
    localStorage.setItem('user', JSON.stringify(user));
    
    return {
        user,
        message: 'Profile updated successfully'
    };
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
};

export const isAuthenticated = () => {
    return !!localStorage.getItem('token');
};

export const getToken = () => {
    return localStorage.getItem('token');
};

export const getUser = () => {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
};

// Export all functions as authService for backward compatibility
export const authService = {
    login,
    register,
    getProfile,
    updateProfile,
    logout,
    isAuthenticated,
    getToken,
    getUser
};
