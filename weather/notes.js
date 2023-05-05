import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import TimeZone from "./TImexone";
import { Weather } from "./Weather";

function App() {
  const [cityName, setCityName] = useState("");
  const [temperature, setTemperature] = useState("");
  const [sunrise, setSunrise] = useState("");
  const [sunset, setSunset] = useState("");
  const [timezone, setTimezone] = useState("");
  const [weather,setWeather]=useState("")

  async function getWeatherData() {
    try {
      const apiKey = "565740994032c44c42a9267c41281294";
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
      );
      const timezoneOffset = response.data.timezone;
      const cityDate = new Date(Date.now() + timezoneOffset * 1000);
    const cityTime = cityDate.toLocaleTimeString();

      setTemperature(response.data.main.temp);
      setSunrise(response.data.sys.sunrise);
      setSunset(response.data.sys.sunset);
      setTimezone(response.data.timezone)
      setWeather(response.data.weather)
      console.log(weather,"weather")
    } catch (error) {
      console.error(error);
    }
  }

  function kelvinToFahrenheit() {
    return `Converted kelvin to Fahrenheit: ${Math.floor((temperature - 273) * 1.8 + 32)}°F`;
  }

  function kelvinToCelsius() {
    return `Converted kelvin to Celsius: ${Math.floor(temperature - 273)}°C`;
  }

  function formatTime(time, offset) {
    const date = new Date(time * 1000 + offset * 1000);
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  }
  
  function formatSunrise() {
    const offset = new Date().getTimezoneOffset() * 60;
    return `Sunrise time: ${formatTime(sunrise, timezone + offset)}`;
  }
  
  function formatSunset() {
    const offset = new Date().getTimezoneOffset() * 60;
    return `Sunset time: ${formatTime(sunset, timezone + offset)}`;
  }
  
  return (
    // <div className="flex flex-col items-center justify-center w-screen min-h-screen text-gray-700 p-10 bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 ">

    <div className="App">
      <h1>Weather Report</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          getWeatherData();
        }}
      >
        <input
          type="text"
          placeholder="Enter city name"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
          weather={weather}
          temperature={temperature}
        />
        <button type="submit">Get Weather</button>
      </form>
      {temperature && (
        <div>
          <p>{kelvinToFahrenheit()}</p>
          <p>{kelvinToCelsius()}</p>
          <p>{formatSunrise()}</p>
          <p>{formatSunset()}</p>
          <p>description : {weather[0].description}</p>
          <p>Main :{weather[0].main} </p>
          {/* <p><TimeZone/></p> */}
          <Weather/>
        </div>
      )}
    </div>
    // </div>
  );
}

export default App;

