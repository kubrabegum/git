import { useState } from 'react';
import './App.css';
import Add from './components/Add';
import Fetch from './components/Fetch';

function App() {
  const [input,setInput]=useState("");
  const [todos,setTodos]=useState([]);
  const [edit,setEdit]=useState(null)
  return (
    <div className="App">
      <Add input={input} setInput={setInput} todos={todos} edit={edit} setEdit={setEdit} setTodos={setTodos}/>
      <Fetch todos={todos} setTodos={setTodos} setEdit={setEdit}/>
    </div>
  );
}

export default App;
