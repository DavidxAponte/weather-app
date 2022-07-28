import React,{useEffect, useState} from 'react'
import './Widget.css'


export default function Widget({
iconTomorrow,
iconOvermorrow,
iconAftermorrow,
maxTomorrow,
minTomorrow,
maxOvermorrow,
minOvermorrow,
maxAftermorrow,
minAftermorrow

}){
const [dayOvermorrow, setDayOvermorrow] = useState("Not Found");
const [dayAftermorrow, setDayAftermorrow] = useState("Not Found"); 


   useEffect(() =>{

    setDayOvermorrow(overmorrow);
    setDayAftermorrow(aftermorrow);
    
   }, [])


    
    const myDate = new Date()
    let overmorrow = new Date(myDate)
    overmorrow.setDate(overmorrow.getDate() + 2)
    overmorrow = overmorrow.toLocaleDateString("en-us",{weekday:"short",day:"2-digit",month:"short"})

    let aftermorrow = new Date(myDate)
    aftermorrow.setDate(aftermorrow.getDate() + 3)
    aftermorrow = aftermorrow.toLocaleDateString("en-us",{weekday:"short",day:"2-digit",month:"short"})
    

    
    return(
        <div className='forecast-container'>

        <div className='forecast-card'>
         <h3>Tomorrow</h3>
         <div className='forecast-condition'>
         <img src={iconTomorrow} alt="tomorrowForecast"></img>
         </div>
         <p className="forecast-card-temp">
        <span className="min-temp">{minTomorrow}</span>
        <span className="max-temp">{maxTomorrow}</span> 
        </p>
        </div>

        <div className='forecast-card'>
         <h3>{dayOvermorrow}</h3>
         <div className='forecast-condition'>
    <img src={iconOvermorrow} alt="overmorrowForecast"></img>
         </div>
         <p className="forecast-card-temp">
        <span className="min-temp">{minOvermorrow}</span> 
        <span className="max-temp">{maxOvermorrow}</span>
        </p>  
        </div>

        <div className='forecast-card'>

         <h3>{dayAftermorrow}</h3>
         <div className='forecast-condition'>
         <img src={iconAftermorrow} alt="aftermorrowForecast"></img>
         </div>
         <p className="forecast-card-temp">
        <span className="min-temp">{minAftermorrow}</span> 
        <span className="max-temp">{maxAftermorrow}</span>
        </p> 

        </div>

        </div>
    )
}