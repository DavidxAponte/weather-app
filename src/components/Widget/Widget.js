import React from 'react'
import './Widget.css'

export default function Widget(){
    return(
        <div className='forecast-container'>

        <div className='forecast-card'>
         <h3>Sun, 24 Jul</h3>
         <div className='forecast-condition'>
         <img src="//cdn.weatherapi.com/weather/64x64/day/116.png" alt="Partly cloudy"></img>
         </div>
         <p className="forecast-card-temp">
        <span className="min-temp">22.9°c</span>
        <span className="max-temp">36.8°c</span> 
        </p>
        </div>

        <div className='forecast-card'>
         <h3>Sun, 24 Jul</h3>
         <div className='forecast-condition'>
    <img src="//cdn.weatherapi.com/weather/64x64/day/113.png" alt="Sunny"></img>
         </div>
         <p className="forecast-card-temp">
        <span className="max-temp">39°c</span> 
        <span className="min-temp">23°c</span>
        </p>
        </div>

        <div className='forecast-card'>

         <h3>Sun, 24 Jul</h3>
         <div className='forecast-condition'>
         <img src="//cdn.weatherapi.com/weather/64x64/day/176.png" alt="Patchy rain possible"></img>
         </div>
         <p className="forecast-card-temp">
        <span className="max-temp">37.1°c</span> 
        <span className="min-temp">23.2°c</span>
        </p>

        </div>

        </div>
    )
}