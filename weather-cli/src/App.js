import Search from './components/Search';
import './App.css';
import Result from './components/Result';
import { useState } from 'react';

function App() {
  const [search,setSearch]=useState("");
  const [weather,setWeather]=useState([]);

  const changeSearch=(value)=>{
    setSearch(value)
  }


  return (
  <>
  <div className='max-w-[1240px] mx-auto mt-2  p-3'>
  <Search searchData={search} eventHandler={changeSearch} />
  <Result wheatherData={weather}/>
  </div>
  </>
  );
}

export default App;
