import React from 'react'
import axios from "axios"
import { useEffect, useState } from 'react';

const User = () => {
   
    let [data,setData]=useState([])
 
    useEffect(()=>{
     const fetchData=async()=>{
       const res=await axios.get("https://jsonplaceholder.typicode.com/users")
       setData(res.data)
     }
     fetchData()
    },[])
    
  return (
   <>
  {
    data.map((ele,index)=>(
      <div key={index}>
        <p>{ele.id}</p>
        <p>{ele.name}</p>
        <p>{ele.phone}</p>
      </div>
    ))
   }
   </>
  )
}

export default User
