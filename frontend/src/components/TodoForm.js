import React, { useState } from 'react';

function TodoForm({ onAddTodo }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;
    onAddTodo({ title });
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex">
        <input
          type="text"
          className="block w-full rounded-l-md bg-white border border-gray-300 px-4 py-2 text-sm leading-5 placeholder-gray-400 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue focus:placeholder-gray-500 focus:ring-blue-900 focus:text-gray-900 sm:text-sm sm:leading-5"
          placeholder="Add a new todo..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-r-md px-4 py-2 transition duration-300 ease-in-out"
        >
          Add
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
