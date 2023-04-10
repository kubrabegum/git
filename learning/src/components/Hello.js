import React from 'react'

export const Hello = () => {
    return React.createElement('div',
    {id : "hello",className:"dummyclass"},
    React.createElement("h1", null, "hello World"))
}
