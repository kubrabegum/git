import React from 'react'

export const Person = ({ person }) => {
  return (
    <div>
     {person.id}
     {person.title}
     {person.body}
    </div>

  )
}

