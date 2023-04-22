import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { getTodos, addTodo, updateTodo, deleteTodo } from './utils/api';
import './styles/index.css';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTodos();
      setTodos(data);
    };
    fetchData();
  }, []);

  const handleAddTodo = async (newTodo) => {
    const data = await addTodo(newTodo);
    setTodos([...todos, data]);
  };

  const handleCheckTodo = async (id, isChecked) => {
    const data = await updateTodo(id, { isChecked });
    setTodos(
      todos.map((todo) => (todo._id === id ? { ...todo, isChecked } : todo))
    );
  };

  const handleDeleteTodo = async (id) => {
    await deleteTodo(id);
    setTodos(todos.filter((todo) => todo._id !== id));
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mt-4 mb-8">Todo List Dashboard</h1>
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        onCheckTodo={handleCheckTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
}

export default App;
