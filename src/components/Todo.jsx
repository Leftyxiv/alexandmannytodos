const Todo = ({ todo, toggleTodo }) => {

  return <div>
    <input type='checkbox' value={ todo.completed } onChange={() => toggleTodo(todo.id)} />
    { todo.text }
    <button>Delete</button>
    Created At: { todo.createdAt }
  </div>
};

export default Todo;