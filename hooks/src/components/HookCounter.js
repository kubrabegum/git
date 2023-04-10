import React, { useState } from 'react'

export const HookCounter = () => {
    const int=0
    const [count,setCount]=useState(int)
    const incrementFive=()=>{
        for(let i=0;i<5;i++){
            setCount(pre=>pre+1)
          
        }
    }
  return (
    <div>
        count:{count}
        <button onClick={()=>setCount(0)}>Reset </button>
        <button onClick={()=>setCount(count+1)}>Increment </button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        <button onClick={incrementFive}>Increment5</button>
    </div>
  )
}
