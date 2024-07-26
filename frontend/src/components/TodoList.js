import React, { useEffect, useState } from 'react';
import todoService from '../services/todoService';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await todoService.getTodos();
      setTodos(response.data);
    };

    fetchTodos();
  }, []);

  return (
    <div className="todo-list-container">
      <h2>Your Todos</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
