import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth/';

const getTodos = async () => {
  const response = await axios.get(`${API_URL}todos`, { withCredentials: true });
  return response.data;
};

const addTodo = async (todo) => {
  const response = await axios.post(`${API_URL}todos`, todo, { withCredentials: true });
  return response.data;
};

export {
  getTodos,
  addTodo,
};
