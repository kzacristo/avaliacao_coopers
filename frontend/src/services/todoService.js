import axios from 'axios';

const API_URL = 'http://localhost:8080/api/todos/';

const getTodos = () => {
  return axios.get(API_URL);
};

const createTodo = (todo) => {
  return axios.post(API_URL, todo);
};

export default {
  getTodos,
  createTodo,
};
