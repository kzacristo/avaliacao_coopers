const express = require("express");
const {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");
// const authenticate = require("../middleware/authenticate");
const router = express.Router();

// router.use(authenticate);

router.post("/addtodo", createTodo);
router.get("/todo", getTodos);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

module.exports = router;
