import { useState, useEffect } from 'react';
import { Route } from 'react-router';
import './App.css';

import { v4 as uuidv4 } from 'uuid';

import Input from './components/Input';
import TodoList from './components/TodoList';
import EditTodo from './components/EditTodo';

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

  const toggleTodo = (id) => {
   for (let i = 0; i < todos.length; ++i) {
     if (todos[i].id === id) {
       todos[i].completed = !todos[i].completed;
     }
   }
  }
  // create a function that will delete the todo
  const deleteTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const deleteAll = () => {
    const filteredTodos = todos.filter((todo) => !todo.completed);
    setTodos(filteredTodos);
  };

  const editTodo = (id, input) => {
    for (let i = 0; i < todos.length; ++i) {
      if (todos[i].id === id) {
        todos[i].text = input;
        return;
      }
    }
  };
  return (
    <div className="App">
      <Route exact path='/'>
      <Input addTodo={addTodo} />
      <TodoList deleteTodo={deleteTodo} toggleTodo={toggleTodo} todos={todos} />
      <button onClick={deleteAll}>Delete all completed todos</button>
      </Route>
      <Route path='/:id' render={(props) => <EditTodo editTodo={editTodo} todos={todos} {...props} />} />
    </div>
  );
}

export default App;
