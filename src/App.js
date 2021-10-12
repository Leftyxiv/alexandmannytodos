import { useState, useEffect } from 'react';
import './App.css';

import { v4 as uuidv4 } from 'uuid';

import Input from './components/Input';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const holder = [];
    const stuff = ['clean stuff up', 'live best life', 'laugh at haters'];
    for (let i = 0; i < stuff.length; ++i) {
      const newTodo = {
        id: uuidv4(),
        text: stuff[i],
        completed: false,
        createdAt: new Date().toUTCString()
      }
      holder.push(newTodo);
    }
    setTodos(holder);
    // component did mount
    // return () => // component will unmount
  }, [])

  const addTodo = (input) => {
    const newTodo = {
      id: uuidv4(),
      text: input,
      completed: false,
      createdAt: new Date().toUTCString()
    }
    setTodos([...todos, newTodo]);
  };

  // create a functopn that will toggle the completed status of the todo
  const toggleTodo = (id) => {
   for (let i = 0; i < todos.length; ++i) {
     if (todos[i].id === id) {
       todos[i].completed = !todos[i].completed;
     }
   }
  }
  // create a function that will delete the todo

  // create a function that wil delete al to doso
  const deleteAll = () => {
    const filteredTodos = todos.filter((todo) => !todo.completed);
    setTodos(filteredTodos);
  };

  return (
    <div className="App">
      <Input addTodo={addTodo} />
      <TodoList toggleTodo={toggleTodo} todos={todos} />
      <button onClick={deleteAll}>Delete all completed todos</button>
    </div>
  );
}

export default App;
