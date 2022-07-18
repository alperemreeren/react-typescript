import React from 'react';

// Components
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';

// Models
import { Todo } from './models/todo.model';

// Styles
import './App.css';

const App: React.FC = () => {
  const [todos, setTodos] = React.useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos(prevTodos => [
      ...prevTodos,
      { id: Math.floor(Math.random() * 100).toString(), text: text }
      ])
  }

  const todoDeleteHandler = (todoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId)
    })
  }

  return (
    <div className='App'>
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
}

export default App;
