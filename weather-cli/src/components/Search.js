import React, { useRef } from 'react'

export const Search = (props,e) => {
    const [searchInput]=useRef();
  return (
    <div className='flex shadow'>
        <input type='search'  value={props.searchData} className='border border-black w-full p-3'
       onChange={()=>props.eventHandler(searchInput.current.value)} ref={searchInput}

        />
        <button className='p-3 bg-slate-600 text-white '>Search</button>
    </div>
  )
}
export default Search
