import React, { useState, useEffect } from "react";
import { geTodos } from "../services/todoService";

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await getTodos();
        setTodos(response.data);
      } catch (error) {
        console.error("Error fetching tasks", error);
      }
    };
    fetchTodos();
  }, []);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text} - {todo.completed ? "Done" : "Pending"}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
