import React from 'react'

// export const Greet = (props) => {
//     console.log(props)
//     return (
//         <div>
//             Greet  {props.name} {props.heroname}
//             {props.children}
//         </div>


//     )
// }

export const Greet = ({name,heroname}) => {
    // export const Greet = ({name,heroname}) => {
        // const {name,heroname}=props//other way to structure props
    // console.log(name,heroname)
    return (
        <div>
            Greet  {name} {heroname}
            
        </div>


    )
}
