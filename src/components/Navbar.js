import {useState} from "react";
import axios from 'axios';
//import summer from '../images/summer.jpg'


function Navbar() {
  <h1>HELLO</h1>
  
  const [location,setLocation] = useState();
  const [weather,setWeather] = useState(null);
  const [image,setImage]=useState("/images/summer.jpg");
  const inputEvent=(e)=>{
    setLocation(e.target.value);
  }

   const handleonsubmit=(e)=>{
      e.preventDefault();
      console.log(location);
      axios.get(`https://api.weatherapi.com/v1/current.json?key=970b42fd54bd40d69e7120153231101&q=${location}&aqi=no`)
      
      .then(data => data.data)
      .then((data) =>{
        setWeather(data.current);
        console.log(data);
        if(data.current?.temp_c<25){
          setImage("images/snow.jpeg");
       }
       else if(data.current?.temp_c>30){
        setImage("images/summer.jpg");
       }
       else if(data.current?.temp_c>=25 && data.current?.temp_c<=30){
        setImage("images/spring.jpg");
       }
       if(data.current?.humidity>=30){
        setImage("images/rainy.jpg");
       }
      });
   }; 
   
   
   
  
  
    
    

  return (
    <div style={{ 
                 backgroundImage:`url(${image})`,
                 backgroundPosition: 'center',
                 backgroundSize: 'cover',
                 backgroundRepeat: 'no-repeat',
                 width: '100vw',
                 height: '100vh'
                 }}>
    
    <div className="nav--head">
    <img src="/images/weather-logo.png" alt=" " className="cf--logo"/>
    {weather?.temp_c && <h1 className="weather--temp">{weather?.temp_c} °C </h1>}

      {weather?.last_updated}
    </div>
     
    <div className="nav--search">
      <input type='text' placeholder='Enter Location...' className="input--search"
      onChange={inputEvent}/>
      <br/>
      <button onClick={handleonsubmit}>Search</button>
      
    </div>
    

      <div className="feels--like">Feels like : {weather?.feelslike_c}</div>
      
    
    </div>
  );
}

export default Navbar;