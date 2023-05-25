import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Add = ({ input, setInput, todos, setTodos, edit, setEdit }) => {
  const onChange = (e) => {
    setInput(e.target.value);
  };

  const updateTodo = (id, title, isCompleted) => {
    const newTodos = todos.map((ele) =>
      ele.id === id ? { ...ele,id,title, isCompleted } : ele
    );
    setTodos(newTodos);
    setEdit("")
  };

  useEffect(()=>{
    if(edit){
        setInput(edit.title)
    }else{
        setInput("")
    }
  },[edit , setInput])

  const onSubmit = (e) => {
    e.preventDefault();
    if (!edit) {
      setTodos([...todos, { id: uuidv4(), title: input, isCompleted: false }]);
      setInput("");
    } else {
      updateTodo(edit.id, input, edit.isCompleted);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Enter the input"
          value={input}
          onChange={onChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Add;
