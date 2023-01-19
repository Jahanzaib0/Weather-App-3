import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import '../main.css'
function Main(props) {
    const city = props.city;
    const [weather, setWeather] = useState(null);
    console.log(weather)
    const getWeather = async () => {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=59eb7244ae137ea55321927d145b5d53`;
            const res = await fetch(url);
            // console.log(res)
            const resJson = await res.json()
            console.log(resJson)
                setWeather(resJson)
        } catch (error) {
            console.log(error)
        }
       

    }
    useEffect(()=>{
      getWeather()
    },[props.city])
  return (
    <>
        { weather && <div className="container my-2">
        <div className=" align-items-center d-flex justify-content-center">
       <div className="card">
        <div className ="text-center">
            <h1>{weather.name}</h1>
            <h2 className='text-b'>{weather.main.temp}</h2>
        </div>
  <img src="https://i.imgur.com/QA63I0q.png" className="card-img-top" alt="..." style={{height:"230px", widht : "100px"}}/>
        
  <div className="card-body">
    <p className="card-text "><strong className='mx-5'>Min Temp : {weather.main.temp_min}</strong> <strong> Max TemP : {weather.main.temp_max}</strong></p>
    <p className="card-text"></p>
    <p className="card-text"><strong className='mx-5'> Humidity : {weather.main.humidity}</strong></p>
    <p className="card-text"><strong className='mx-5'> Feels Like : {weather.main.feels_like}</strong></p>
    <p className="card-text"><strong className='mx-5'> Wind deg : {weather.wind.deg} deg</strong><strong> wind Speed : {weather.wind.speed}</strong> </p>
    
  </div>
</div>
    </div>
    </div>}
    </>
  )
}

export default Main