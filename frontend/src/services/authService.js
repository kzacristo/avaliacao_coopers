import axios from 'axios';

const API_URL = 'http://localhost:3000/api/auth/';

// Register route
const register = async (username, email, password) => {
  const response = await axios.post(`${API_URL}register`, { username, email, password });
  return response.data;
};

// Login route
const login = async (username, password) => {
  const response = await axios.post(`${API_URL}signin`, { username, password });
  if (response.data.accessToken) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

// Logout route
const logout = () => {
  localStorage.removeItem('user');
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
