import React, { useState } from 'react'
import {reactMCQs} from "./questions"

const Question = () => {
    const [data,setData]=useState(reactMCQs)
    const [currentQue,setCurrentQue]=useState(0)
    const [answer,setAnswer]=useState(null)

    const onChange =(option)=>{
        setAnswer(option)
    }

    const handleClick=()=>{
       if(answer !==null){
        data[currentQue].userAnswer=answer
        if(currentQue<data.length-1){
            setCurrentQue(currentQue+1)
            setAnswer(null); // Reset selected answer for the new question
        }
        else{
            alert("End of questions!")
        }
       }else{
        alert("Please select an answer before moving to the next question.")
       }
    }

  return (
    <>
    <div>
      <div>
        <h1>{data[currentQue].question}</h1>
        {Object.entries(data[currentQue].options).map(([optionKey, optionValue]) => (
          <div key={optionKey}>
            <input
              type='radio'
              name='answer'
              onChange={() => onChange(optionKey)}
              checked={answer === optionKey}
            />
            {optionValue}
            <br />
          </div>
        ))}
      </div>
      <button onClick={handleClick}>Next</button>
    </div>
    </>
  )
}

export default Question
