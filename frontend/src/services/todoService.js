import axios from 'axios';

const API_URL = 'http://localhost:3000/api/todos/';

const getTodos = () => {
  return axios.get(API_URL);
};

const createTodo = (todo) => {
  return axios.post(API_URL, todo);
};

export {
  getTodos,
  createTodo,
};
