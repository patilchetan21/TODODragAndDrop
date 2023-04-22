import React from 'react';
import Checkbox from './Checkbox';
import DragHandle from './DragHandle';

function TodoItem({ todo, onCheckTodo, onDeleteTodo }) {
  const handleCheck = (e) => {
    onCheckTodo(todo._id, e.target.checked);
  };

  const handleDelete = () => {
    onDeleteTodo(todo._id);
  };

  return (
    <li className="flex items-center justify-between p-4 hover:bg-gray-50">
      <div className="flex items-center">
        <DragHandle />
        <Checkbox isChecked={todo.isChecked} onCheck={handleCheck} />
        <span
          className={`ml-3 ${todo.isChecked ? 'line-through text-gray-500' : ''}`}
        >
          {todo.title}
        </span>
      </div>
      <button
        className="text-red-500 hover:text-red-700"
        onClick={handleDelete}
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
