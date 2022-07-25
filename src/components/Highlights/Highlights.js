import React from 'react'
import "./Highlights.css"


export default function Higlights(){
    const styleContent = {
        width: "49%"
    }

    return(
     <>
     <h2>Today's Higlights</h2>
     <div className='grid'>
     <div className="h-card">

    <h3 className="h-title"> Wind status </h3>
    <div className="h-body">

    <p>
    <span className="h-number">6.9</span>
    <span className="h-unity"> mph</span>
    </p>

    </div>

    <p>E</p>

    </div>

    <div className="h-card">
    <h3 className="h-title"> Humidity </h3>
    <div className="h-body">
    <p><span className="h-number">49</span><span className="h-unity"> %</span>
        
        </p>
    </div>
    
    <div className="percentage-bar">
    <div className="bar-header"><span>0</span><span>50</span><span>100</span>
    </div>
    
    <div className="bar"><div className="percentage" style={styleContent}></div></div><div className="flex-end"><span>%</span></div></div></div>

    <div className="h-card">
    <h3 className="h-title"> Visibility </h3>
    <div className="h-body">
    <p><span className="h-number">11</span><span className="h-unity"> miles</span>
    </p>
    </div>
    </div>

    
    <div className="h-card">
    <h3 className="h-title"> Air Pressure </h3>
    <div className="h-body">
    <p>
    <span className="h-number">1017</span><span className="h-unity"> mb</span>
    </p></div></div>
     
   


     </div>
     
     </>   
    )
}