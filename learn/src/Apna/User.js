import axios from "axios";
import React, { useEffect, useState } from "react";

const GitUser = () => {
    const [users,setUsers]=useState([])
    useEffect(()=>{
        const fetch=async()=>{
        const {data}=await axios.get("https://api.github.com/users")
        setUsers(data)
    };
    fetch()
    },[])
    return (
    <>
    
      <h3 className="text-2xl font-bold mb-4 text-center">github users</h3>
      <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {
            users.map((user,index)=>(
        <li key={index} className="flex items-center bg-gray-200 p-5 rounded">
          <img
            src={user.avatar_url}
            alt="login"
            className="w-14 h-14 rounded-full mr-4"
          />
          <div>
            <h4 className="mb-1">{user.login}</h4>
            <a href={user.html_url} className="text-gray-500 capitalize">
              profile
            </a>
          </div>
        </li>
        ))
        }
      </ul>
    </>
  );
};

export default GitUser;
