import React from 'react'

export const Product = () => {
    const veg=[
        { title: 'Cabbage', isFruit: true, id: 1 },
        { title: 'Garlic', isFruit: true, id: 2 },
        { title: 'Apple', isFruit: false, id: 3 },
    ]
    const list=veg.map((ele,i)=><li key={i}  style={{
        color:ele.isFruit ? 'darkgreen' : 'red'
      }} >
        {ele.title}
    </li>)
  return (
    <div>
     <ul>{list}</ul>
        
    </div>
  )
}
