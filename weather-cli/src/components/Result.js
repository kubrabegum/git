import React from 'react'

export const Result = () => {
  return (
    <div className='shadow mt-5 p-0'>
        <h2 className='text-4xl text-center'>City Name</h2>
        <div className='text-2xl flex justify-around'>
        <div>Min Temp: 40deg</div>
        <div>Max Temp: 30deg</div>
        </div>
        <div className='text-2xl flex justify-around mt-2'>
        <div>Icon</div>
        <div>Weather Type </div>
        </div>
    </div>
  )
}
export default Result
