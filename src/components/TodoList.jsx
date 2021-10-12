import Todo from './Todo';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {

  return <div>
    { todos.map((todo) => <Todo deleteTodo={deleteTodo} key={todo.id} toggleTodo={toggleTodo} todo={todo}  />) }
  </div>
};

export default TodoList;