import React, { useState } from 'react';
import {AiOutlineDoubleRight} from "react-icons/ai"
import data from './data';

const Netlify = () => {
    const [index,setIndex]=useState(0)
    let {title,job,info,date}=data[index] 

    const handle =(arg)=>{
        setIndex(arg)
    }

  return (
    <div>
        <p>{title}</p>
        <p>{date}</p>
        <p>{job}</p>
        <p>
        {info}
        <AiOutlineDoubleRight/>
        </p>
        <div>
            {
                data.map((ele,indx)=>(
                    <button key={indx} onClick={()=>handle(indx)} >{ele.title}</button>
                ))
            }
        </div>
    </div>
  )
}

export default Netlify
