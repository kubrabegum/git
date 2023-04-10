import React from 'react'

export const List = () => {
    const product=[
        { title: 'Cabbage', id: 1 },
        { title: 'Garlic', id: 2 },
        { title: 'Apple', id: 3 },
    ]
   let list= product.map((ele,i)=><li key={i}>
    {ele.title}
   </li>)
  return (
    <div>
       <ul>
        {list}
       </ul>
    </div>
  )
}
