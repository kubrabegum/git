import { useState } from "react";
import "./App.css";
import { Add } from "./components/Add";
import { Header } from "./components/Header";
import { TodolistFetch } from "./components/TodolistFetch";
function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState(null);
  return (
    <>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <Add
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            edit={edit}
            setEdit={setEdit}
          />
          <div>
            <TodolistFetch
              todos={todos}
              setTodos={setTodos}
              setEdit={setEdit}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
