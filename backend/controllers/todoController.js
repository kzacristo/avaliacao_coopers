const db = require("../models");
const Todo = db.Todo;

exports.createTodo = async (req, res) => {
  const { text } = req.body;

  try {
    const todo = await Todo.create({ text, userId: req.userId });
    res.status(201).send({ message: "To-do created", todo });
  } catch (error) {
    res.status(500).send({ message: "Error creating to-do", error });
  }
};

exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.findall({ where: { userId: res.userId } });
    res.status(200).send(todos);
  } catch (error) {
    res.status(500).send({ message: "Error retrieving to-do", error });
  }
};

exports.updateTodo = async (req, res) => {
  const { id } = req.params;
  const { text, completed } = req.body;

  try {
    const todo = await Todo.findOne({ where: { id, userId: req.userId } });
    res.status(200).send(todos);
  } catch (error) {
    res.status(500).send({ message: "Error retrieving todos", error });
  }
};

exports.deleteTodo = async (req, res) => {
  const { id } = req.params;

  try {
    const todo = await Todo.findOne({ where: { id, userId: req.userId } });
    if (!todo) return res.status(404).send({ message: "To-do not found" });

    await todo.destroy();
    res.status(200).send({ message: "To-do deleted" });
  } catch (error) {
    res.status(500).send({ message: "Error deleting to-do", error });
  }
};
