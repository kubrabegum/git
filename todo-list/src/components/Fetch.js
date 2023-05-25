import React from 'react'

const Fetch = ({todos,setTodos,setEdit}) => {
    const Delete=(id)=>{
        setTodos(todos.filter((ele)=>ele.id!==id))
    }

    const Edit=(id)=>{
        let newTodo=todos.find(ele=>ele.id===id);
        setEdit({...newTodo})
    }

    const isComplete=(id)=>{
        setTodos(todos.map((ele)=>{
            return {
                ...ele,
                isCompleted:!ele.isCompleted
            }
        }))
    }

  return (
    <div>
      {
        todos.map((ele)=>(
            <li key={ele.id}>{ele.title}
            <div>
                <button onClick={()=>Delete(ele.id)}>Delete</button>
                <button onClick={()=>Edit(ele.id)}>Edit</button>
                <button onClick={()=>isComplete(ele.id)}>isComplete:{ele.isCompleted.toString()}</button>
            </div>
            </li>
        ))
      }
   
    </div>
  )
}

export default Fetch
