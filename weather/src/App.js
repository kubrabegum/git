import axios from 'axios';
import moment from 'moment-timezone';
import { useState } from 'react';
import './App.css';

function App() {

  let [cityName,setCityName]=useState("")
  
  const onChange=(e)=>{
    setCityName(e.target.value)
  }
  
  const onClick=async(e)=>{
   try {
    let apiKey="565740994032c44c42a9267c41281294"
    let response=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
    console.log(response)
    console.log(setCityName(response.data.sys.country))
    console.log(response.data.name)
    console.log(response.data.main.temp)
   } catch (error) {
    console.error(error)
   }
  }

  const localDate=new Date()
  const localTime=localDate.toLocaleTimeString()

  return (
    <div >
      <div className="bg-origin-border  border-shadow h-screen bg-cover " style={{ backgroundImage: 'url(https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?cs=srgb&dl=pexels-johannes-plenio-1118873.jpg&fm=jpg)' }}>
      <div className='rounded-[12px] ' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding:'100px'}}>
        <input className='w-[50%] h-[50px] ' type='input' placeholder='enter the city name' value={cityName} onChange={onChange}></input>
        <button className='text-black h-[50px] gap-2 bg-white p-3 ' style={{padding:'10px'}} onClick={onClick}>search</button>
      </div>
      <p>{cityName}</p>
      {/* <p>Date :{moment.tz(localDate).format()}</p> */}
      <p>time : {localTime}</p>
      <p></p>
        </div>
       
    </div>
  );
}

export default App;



