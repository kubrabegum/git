import React from 'react'

export const TodolistFetch = ({todos,setTodos,edit,setEdit}) => {
    const handleComplete=(todo)=>{
      setTodos(
        // eslint-disable-next-line array-callback-return
        todos.map((item)=>{
            if(item.id===todo.id){
                return {...item,completed:!item.completed}
            }
            return item
        })
      )
    }

    const handleEdit=({id})=>{
        const findTodo=todos.find((todo)=>todo.id===id);
        setEdit(findTodo)
    }

    const handleDelete =({id})=>{
        setTodos(todos.filter((todo)=>todo.id !==id))
    }
  return (
    <>
    <div>
        {
            todos.map   ((todo)=>(
                <li className='list-item' key={todo.id}>
                    <input type='text' value={todo.title} className='list' onChange={(e)=>e.preventDefault()}/>
                    <div>
                        <button className='button-complete task-button' onClick={()=>handleComplete(todo)}>
                            <i className='fa fa-check-circle'></i>
                        </button>
                        <button className='button-edit edit-button' onClick={()=>handleEdit(todo)}>
                            <i className='fa fa-edit'></i>
                        </button>
                        <button className='button-delete delete-button' onClick={()=> handleDelete(todo)}>
                            <i className='fa fa-trash'></i>
                        </button>
                    </div>
                </li>
            ))
        }
    </div>
    </>
  )
}
