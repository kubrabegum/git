import React, { useEffect } from 'react'
import { v4 as uuidv4 } from "uuid"

export const Add = ({ input, setInput, todos, setTodos, edit, setEdit }) => {
    const onInputChange = (e) => {
        setInput(e.target.value)
    }
    
    const updateTodo=(title,id,completed)=>{
       
        const newTodo=todos.map((ele)=>
            
            ele.id===id?{...todos,title,id,completed,key:id}:ele
        )
        setTodos(newTodo);
        setEdit("")
    }

    useEffect(()=>{
        if(edit){
            setInput(edit.title)
        }else{
            setInput("");
        }
    },[edit,setInput])

    const onSubmitHandle = (e) => {
        e.preventDefault();
        if (!edit) {
            setTodos([...todos, { id: uuidv4(), title: input, completed: false}]);
            setInput("");
        }else{
            updateTodo(input,edit.id,edit.completed)
        }
    }
    return (
        <>
            <form onSubmit={onSubmitHandle}>
                <input type='text' placeholder='Enter the task here!!' className='task-input' value={input} required onChange={onInputChange} />
                <button className='button-add' type='submit'>Add</button>
            </form>
        </>
    )
}
