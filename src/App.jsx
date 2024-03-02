import { useEffect, useState } from 'react'
import './App.css'
// import Header from './source/Header'
import Image from './source/Image'
import DigitalClock from './source/CLock';

function App() {
  const [weather,setWeather] = useState(null);


  useEffect(()=>{
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

       
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=c49431ded79a55b327048e0f1432067e`)

        .then((response)=>response.json())
        .then((data) => setWeather(data));




      })
    }
  },[])




  return (
   <div>
    {/* <Header/> */}
     
 
    <div >
      
      { weather?(<><div className="image">
  <img src={weather.weather[0].main+".jpg"} alt="" />
  
    
  </div>
        <div className='weather'>
          


          <h1 className='title'>Current weather</h1>
        <div className='home'> 
         <h2>Temparature: {Math.round(weather.main.temp-273.15)} °C</h2>
          <h2>Condition:  {weather.weather[0].main}</h2>
          <h2>wind:    {weather.wind.speed}km/hr</h2>
          <h2>Humidity:  {weather.main.humidity}</h2>
          <h2>Place:   {weather.name}</h2>

          </div>



        </div>
</>
        ):
        (
      <p>
        RUK JA BHAI JARA
      </p>
        )
      }
      </div>
      <div className='clock'>
        <DigitalClock/>
      </div>

      <div className='mai'>
        <h1 >Weather </h1>
      </div>
    
  
   


   </div>
  )
}

export default App
