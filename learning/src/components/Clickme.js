import React from 'react'

export const Clickme = () => {
    const onClick=()=>{
        alert("you clicked to click me")
    }
  return (
    <div >
        <button onClick={onClick}> Clickme</button>
    </div>
  )
}
