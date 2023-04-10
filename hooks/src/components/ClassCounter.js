import React, { useState } from 'react'

export const ClassCounter = () => {
    let [increment,setIncrement]=useState(0);
    const onClick=(e)=>{
        setIncrement(increment+1)
        console.log(increment)
    }

  return (
    <div>
        <button  onClick={onClick} >count {increment}</button>
        {/* <button onClick={()=>setIncrement(increment+1)}>Count {increment}</button> */}
    </div>
  )
}
