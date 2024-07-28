import { Todo as _Todo } from "../models";
const Todo = _Todo;

export async function createTodo(req, res) {
  const { text } = req.body;

  try {
    const todo = await Todo.create({ text, userId: req.userId });
    res.status(201).send({ message: "To-do created", todo });
  } catch (error) {
    res.status(500).send({ message: "Error creating to-do", error });
  }
}

export async function getTodos(req, res) {
  try {
    const todos = await Todo.findall({ where: { userId: res.userId } });
    res.status(200).send(todos);
  } catch (error) {
    res.status(500).send({ message: "Error retrieving to-do", error });
  }
}

export async function updateTodo(req, res) {
  const { id } = req.params;
  const { text, completed } = req.body;

  try {
    const todo = await Todo.findOne({ where: { id, userId: req.userId } });
    res.status(200).send(todos);
  } catch (error) {
    res.status(500).send({ message: "Error retrieving todos", error });
  }
}

export async function deleteTodo(req, res) {
  const { id } = req.params;

  try {
    const todo = await Todo.findOne({ where: { id, userId: req.userId } });
    if (!todo) return res.status(404).send({ message: "To-do not found" });

    await todo.destroy();
    res.status(200).send({ message: "To-do deleted" });
  } catch (error) {
    res.status(500).send({ message: "Error deleting to-do", error });
  }
}
