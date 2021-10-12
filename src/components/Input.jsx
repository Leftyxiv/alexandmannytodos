import { useState } from 'react';

const Input = ({ addTodo }) => {
  const [inputText, setInputText] = useState('');

  const onSub = () => {
    addTodo(inputText);
    setInputText('');
  }
  return <div>
    <input type='text' value={inputText} onChange={(event) => setInputText(event.target.value)} />
    <button onClick={() => onSub()}>Add todo</button>
  </div>
};
export default Input;
