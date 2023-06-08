import React, { useEffect, useState } from 'react'
import axios from "axios"
const Gitcomponent = () => {
    let [Login,setLogin]=useState([]);
    useEffect(()=>{
        const fetchData=async()=>{
            let {data}=await axios.get(`https://api.github.com/users`,{
                auth:{
                    'username':"kubrabegum",
                    "password":"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"
                }
            })
           
           setLogin(data)
        }
        fetchData()
    },[])

  return (
    <div>
      <h1>GitHub users</h1>
      
       {
        Login.map((ele,index)=>(
        
           < div key={index}>
             <img src={ele.avatar_url} alt="pics" />
             <h1>{ele.login}</h1>
             </div>
  
        ))
       }
    
    </div>
  )
}

export default Gitcomponent
