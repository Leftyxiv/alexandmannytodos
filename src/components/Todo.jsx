import { Link } from 'react-router-dom';

const Todo = ({ todo, toggleTodo, deleteTodo }) => {

  return <div>
    <input type='checkbox' value={ todo.completed } onChange={() => toggleTodo(todo.id)} />
    { todo.text }
    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    Created At: { todo.createdAt }
    <Link to={`/${todo.id}`}><button>Edit</button></Link>
  </div>
};

export default Todo;