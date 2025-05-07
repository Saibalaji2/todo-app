import React from 'react';

function Todo({ todo, toggleTodo }) {
  return (
    <div
      onClick={() => toggleTodo(todo.id)}
      style={{
        textDecoration: todo.completed ? 'line-through' : 'none',
        cursor: 'pointer',
      }}
    >
      {todo.text}
    </div>
  );
}

export default Todo;
