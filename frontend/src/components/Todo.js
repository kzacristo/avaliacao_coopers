import React, { useState } from "react";
import { createTodo } from "../services/todoService";

function Todo() {
  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createTodo({ text });
      setText("");
    } catch (error) {
      console.error("Error creating task", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit"> Add Task </button>
    </form>
  );
}

export default Todo;
