import React, { useState } from 'react'

export const HookName = () => {
    let[ name,setName]=useState({
        firstName:"",
        lastName:""
    })
     let {firstName,lastName}=name
     const onChange=(e)=>{
        setName({
            ...name,
            [e.target.name]:e.target.value
        })
     }
  return (
    <div>
        <form>
            <input name='firstName' type="text" onChange={onChange} value={firstName} />
            <input name='lastName' type="text" onChange={onChange} value={lastName}/>
            <h2 >First Name :{firstName} </h2>
            <h2 >Last Name :{lastName} </h2>
            <h2>{JSON.stringify(name)}</h2>
        </form>
    </div>
  )
}
