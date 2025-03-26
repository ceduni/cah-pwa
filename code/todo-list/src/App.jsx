import { useRef, useState } from 'react'
import TodoItem from './components/Todo';
import './App.css';

function append(arr, value) {
  return [...arr, value];
}

function createTodo(value) {
  return {
    id: crypto.randomUUID(),
    text: value ?? "",
    completed: false,
    isEditing: false
  }
}

function App() {
  const todoListReference = useRef(null);
  const [inputValue, setInputValue] = useState('');
  const [myListData, setmyListData] = useState([]);

  function handleInput(event) {
    setInputValue(event.target.value);
  }

  function createItem(event) {
    event.preventDefault();
    setmyListData(append(myListData, createTodo(inputValue)));
  }

  function updateItem(id, value){
    const updatedList = myListData.map((todo) => todo.id === id ? { ...todo, text: value } : todo);
    setmyListData(updatedList)
  }

  function handleDelete(id) {
    if (confirm("Are you sure?")) {
      setmyListData(myListData.filter(todo => todo.id !== id));
    }
  }

  return (
    <>
      <h1>To-do List</h1>
      <form style={{ display: 'flex' }} onSubmit={createItem}>
        <input type="text" value={inputValue} onInput={handleInput} placeholder='Nouvelle tache...' />
        <button type='submit'>Ajouter</button>
      </form>
      <ul style={{margin: 0, padding: 0, listStyle: "none"}} ref={todoListReference}>
        {myListData.map((todo) => <TodoItem key={todo.id} todo={todo} onDelete={handleDelete} onUpdate={updateItem} />)}
      </ul>
    </>
  )
}

export default App
