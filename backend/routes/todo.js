const express = require("express");
const {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");
// const authenticate = require("../middleware/authenticate");
const router = express.Router();
const API_URL = 'http://localhost:8080/api/';

// router.use(authenticate);

router.post(`${API_URL}addtodo`, createTodo);
router.get(`${API_URL}todo`, getTodos);
router.put(`${API_URL}:id`, updateTodo);
router.delete(`${API_URL}:id`, deleteTodo);

module.exports = router;
