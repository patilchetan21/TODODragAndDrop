import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onCheckTodo, onDeleteTodo }) {
  return (
    <ul className="bg-white rounded-lg shadow divide-y divide-gray-200">
      {todos.map((todo) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          onCheckTodo={onCheckTodo}
          onDeleteTodo={onDeleteTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
