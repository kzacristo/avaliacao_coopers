import axios from 'axios';

const API_URL = 'http://localhost:8080/api/';

const getTodos = async () => {
  const response = await axios.get(`${API_URL}todo`, { withCredentials: true });
  return response.data;
};

const addTodo = async (todo) => {
  const response = await axios.post(`${API_URL}addtodo`, todo, { withCredentials: true });
  console.log("todoService - ", response.data)
  return response.data;
};

export {
  getTodos,
  addTodo,
};
