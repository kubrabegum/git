import React from 'react'

export const FunctionClick = () => {
    const clickHandler=()=>{
        console.log("button")
    }
  return (
    <div>
        <button onClick={clickHandler}>Click</button>
    </div>
  )
}
