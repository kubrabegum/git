import React from 'react';
import Typed from 'react-typed'; 

export const Banner = () => {
  return (
    <div className='bg-neutral-200 w-full py-[100px]'>
    <div className='max-w-[240px] my-[100px] mx-auto text-center'>
     <div className='text:xl md:text-3xl font-bold '>
        Learn with us.
     </div>
     <h2 className='font-bold text-xl md:text-4xl mt-8'>Grow with us.</h2>
     <div className='font-bold text-xl md:text-3xl mt-8'>
     <Typed
                    className='pl-3'
                    strings={['I am Kubra','MERN Stack Developer']}
                    typeSpeed={200}
                    backSpeed={100}
                    loop={true}
                />
     </div>
    </div>
    </div>
  )
}
export default Banner