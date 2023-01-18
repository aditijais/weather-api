import {useState} from "react";
import axios from 'axios';


function Navbar() {
  <h1>HELLO</h1>
  const [location,setLocation] = useState();
  const [weather,setWeather] = useState([]);
  const inputEvent=(e)=>{
    setLocation(e.target.value);
  }

   const handleonsubmit=(e)=>{
      e.preventDefault();
      console.log(location);
      axios.get(`https://api.weatherapi.com/v1/current.json?key=970b42fd54bd40d69e7120153231101&q=${location}&aqi=no`)
      
      .then(data => data.data)
      .then(data=>setWeather(data.current))
      console.log(weather)
   } 
  
    
    

  return (
    <>
    <div className="nav--head">
    <img src="/images/weather-logo.png" alt=" " className="cf--logo"/>
    <h1 className="weather--temp">{weather.temp_c} °C </h1>
    <div>{weather.temp_c<25 && <img src="/images/summer.jpg" alt=" "/>}</div>
    {weather.last_updated}
    </div>
    <div className="nav--search">
      <input type='text' placeholder='Enter Location...' className="input--search"
      onChange={inputEvent}/>
      <br/>
      <button onClick={handleonsubmit}>Search</button>
      
    </div>
    
      <div></div>
      
      <div className="feels--like">Feels like : {weather.feelslike_c}</div>
      
    
    </>
  );
}

export default Navbar;