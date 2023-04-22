const API_URL = 'http://localhost:5000';

export async function getTodos() {
  const response = await fetch(`${API_URL}/todos`);
  if (!response.ok) {
    throw new Error('Failed to fetch todos');
  }
  const todos = await response.json();
  return todos;
}

export async function addTodo(todo) {
  const response = await fetch(`${API_URL}/todos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  });
  if (!response.ok) {
    throw new Error('Failed to add todo');
  }
  const newTodo = await response.json();
  return newTodo;
}

export async function updateTodo(todo) {
  const response = await fetch(`${API_URL}/todos/${todo._id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  });
  if (!response.ok) {
    throw new Error('Failed to update todo');
  }
  const updatedTodo = await response.json();
  return updatedTodo;
}

export async function deleteTodo(todoId) {
  const response = await fetch(`${API_URL}/todos/${todoId}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete todo');
  }
  const deletedTodo = await response.json();
  return deletedTodo;
}
