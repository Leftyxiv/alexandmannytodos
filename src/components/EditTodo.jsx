import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const EditTodo = (props) => {
  const [inputText, setInputText] = useState('try me');
  const [id, setId] = useState(undefined);

  useEffect(() => {
    for (let i = 0; i < props.todos.length; ++i) {
      if (props.todos[i].id === props.match.params.id) {
        setInputText(props.todos[i].text);
        setId(props.todos[i].id);
      }
    }
  }, [])
  return <div>
    <input type='text' value={inputText} onChange={(event) => setInputText(event.target.value)} />
    <button onClick={() => props.editTodo(id, inputText)}>Edit todo</button>
    <Link to='/'><button>Go back!</button></Link>
  </div>
};
export default EditTodo;
