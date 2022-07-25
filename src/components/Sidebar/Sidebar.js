import React from 'react';
import './Sidebar.css';
import locationIcon from './location.svg'
import sideBackground from './Cloud-background.png'
import mapIcon from './map.svg'

export default function Sidebar(){
    return(
        <aside className='sidebarContainer'>
       <header className='headerSidebar'>
        <button className='btnAside btn-primary'>Search for place</button>
        <img src={locationIcon} className='btnAside btn-rounded'></img>
       </header>

       <div className='weather-status'>
        <img src={sideBackground} className='img-bg'></img>
        <img src='//cdn.weatherapi.com/weather/64x64/day/116.png' className='w-icon'></img>
       </div>

       <div className='weather-info'>
        <h1 className='temp'>30</h1>
        <h2 className='current-condition'>Partly cloudy</h2>
       </div>

       <div className='current-location'>
        <p>Today - Mon, 25 Jul</p>
        <div className='city'>
        <img src={mapIcon} className='mapIcon'></img>
        <p>Buenos Aires</p>
        </div> 
       </div>
        </aside>
    )
}