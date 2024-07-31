import React, { useState } from 'react';
import { addTodo } from '../services/todoService';

const Todo = () => {
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addTodo({
      description: newTodo,
    });
    setNewTodo('');
  };

  return (
    <div className="todo-container">
      <h2>Add Todo</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          required
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Todo;
