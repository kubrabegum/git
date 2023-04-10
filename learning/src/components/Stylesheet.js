import React from 'react'
import "../style.css"

function Stylesheet({primary }) {
    let className=primary?"primary":""
    // let font=font-xl
  return (
    <div className={`${className} font-xl`}>
      Stylesheet
    </div>
  )
}

export default Stylesheet
