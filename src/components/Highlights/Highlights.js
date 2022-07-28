import React from 'react'
import "./Highlights.css"


export default function Higlights({wind,windFlow,humidity,visibility,pressure}){

    return(
     <>
     <h2>Today's Higlights</h2>

     <div className='grid'>
     <div className="h-card">

    <h3 className="h-title"> Wind status </h3>
    <div className="h-body">

    <p>
    <span className="h-number">{wind}</span>
    <span className="h-unity">mph</span>
    </p>

    </div>

    <p>{windFlow}</p>

    </div>

    <div className="h-card">
    <h3 className="h-title">Humidity</h3>
    <div className="h-body">
    
    <p className='hNumber'>
    <span className="h-number">{humidity}</span><span className="h-unity">%</span>
    </p>

    </div>
    
    <div className="percentage-bar">
     
    <p>
    <span className='zeroBar'>0</span>
    <span className='fiftyBar' >50</span>
    <span className='hundredBar'>100</span>
    </p> 
    <progress max="100" value={humidity} id="humidityBar"></progress>
    
    </div>
    
    
    </div>



    <div className="h-card">
    <h3 className="h-title">Visibility </h3>
    <div className="h-body">
    <p><span className="h-number">{visibility}</span><span className="h-unity">miles</span>
    </p>
    </div>
    </div>

    
    <div className="h-card">
    <h3 className="h-title"> Air Pressure </h3>
    <div className="h-body">
    <p>
    <span className="h-number">{pressure}</span><span className="h-unity"> mb</span>
    </p></div></div>
     
   


     </div>
     
     </>   
    )
}