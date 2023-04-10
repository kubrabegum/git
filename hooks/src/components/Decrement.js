import React, { useState } from 'react'

export const Decrement = () => {
    let [dec,setDec]=useState(0)
    // const onClick=()=>{
    //     setDec(dec-1)
       
    // }
  return (
    <div >
        {/* <button onClick={onClick}>dec {dec}</button> */}
        <button onClick={()=>{setDec(dec-1)}}>dec {dec}</button>
    </div>
  )
}
