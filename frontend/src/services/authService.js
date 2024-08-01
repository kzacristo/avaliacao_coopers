import axios from 'axios';

const API_URL = 'http://localhost:8080/api/';

// Register route
const register = async (username, email, password) => {
  const response = await axios.post(`${API_URL}register`, { username, email, password });
  return response.data;
};

// Login route
const login = async (username, password) => {
  const response = await axios.post(`${API_URL}login`, { username, password });
  if (response.data.accessToken) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

// Logout route
const logout = () => {
  localStorage.removeItem('user');
};

export {
  register,
  login,
  logout,
};
