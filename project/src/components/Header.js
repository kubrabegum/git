import React, { useState } from 'react'
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai"
export const Header = () => {
    const[toggle,setToggle]=useState(false)
  return (
    <>
    <div className='p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...'>
    <div className="items-center py-[1px] flex mx-auto justify-between">
        <div className='text-3xl font-bold'>
            kubra
        </div>
        {
            toggle?
            <AiOutlineClose onClick={()=>setToggle(!toggle)} className='text-white text-2xl md:hidden block'/>
            :
            <AiOutlineMenu onClick={()=>setToggle(!toggle)} className='text-white text-2xl md:hidden block'/>
        }
       
       
        <ul className='duration-300 hidden md:flex text-white gap-10'>
            <li>
                Home
            </li>
            <li>
                Company
            </li>
            <li>
                Resorce
            </li>
            <li>
                Contact
            </li>
        </ul>
        {/* responsive menu */}
        <ul className={`md:hidden w-full h-screen text-white fixed bg-black top-[70px]
         ${toggle ? 'left-[0]':'left-[100%]'}`
         } >
            <li className='p-5'>
                Home
            </li>
            <li className='p-5'>
                Company
            </li>
            <li className='p-5'>
                Resorce
            </li>
            <li className='p-5 '>
                Contact
            </li>
        </ul>

        </div>
  </div>
  </>
  )
}
export default Header