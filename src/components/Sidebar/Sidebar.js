import React, {useRef, useState, useEffect} from 'react';
import './Sidebar.css';
import locationIcon from './location.svg'
import sideBackground from './Cloud-background.png'
import mapIcon from './map.svg'
import magnificerIcon from './magnificer.svg'
import axios from 'axios';
import ApiKey from '../../api/ApiKey';
import cityList from "../../api/city.list.json"


export default function Sidebar(){
    const navSearch = useRef();
    const searchResultRef = useRef();
    const cityValue = useRef();

    const [city, setCity] = useState("Not Found")
    const [temp, setTemp] = useState("00");
    const [weather, setWeather] = useState("Not Found");
    const [icon, setIcon]  = useState("http://openweathermap.org/img/wn/10d@2x.png")
    const [date, setDate] = useState("Not Found");
    const [cityResult, setCityResult] = useState("Search for the city of your choice.")

    useEffect(() => {
     getMyLocation();
     
    }, [])

    let isDisplay = false;

   const displaySearch = () => {
     if(!isDisplay){
        navSearch.current.className = "search-nav activeSearch";
        isDisplay = true;
        cityValue.current.focus();
     } else {
        navSearch.current.className = "search-nav";
        isDisplay = false;
     }
   }

   const convertKtoF = (kelvin) =>{
     let result = Math.round(1.8 * (kelvin-273) + 32)
     return result;
   }
    
   const myDate = new Date().toDateString();
 
    
   const getMyLocation = () =>{
    navigator.geolocation.getCurrentPosition((position) => {
     const getCityWeather = async () => {
        try {
          let res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${ApiKey()}`),
          json = await res.data
          
        console.log('this is our response data:',json)
        console.log("cityName: ", json.name);
         
         setCity(json.name);
         let farenheit = convertKtoF(json.main.temp)
         setTemp(`${farenheit}°F`);
         setWeather(json.weather[0].description)
         setIcon(`http://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`)
         setDate(myDate)
         setCityResult("Search for the city of your choice")
         cityValue.current.value = "";

        } catch (err) {
          let message = err.statusText || "An error has ocurred";
          searchResultRef.current.value = message;
        }
     }
     
     getCityWeather();
        
    })
   };

   const getFormValue = (e) => {
     e.preventDefault();
     let city = cityValue.current.value;
     console.log("this is the value: ", city); 
     let cityInfo = locateCity(city);
     console.log("This is the city Info:", cityInfo);

     if(cityInfo !== "Not found"){

      setCityResult(`${city} LOCATED!`)

      getCityWeather(cityInfo);

      setTimeout(displaySearch,1000);

      setTimeout(displaySearch,1000);

     } else{
      setCityResult(`${city} Not Found`)
      cityValue.current.value = "";
     }
   }
   
   const locateCity = (city) => {
     let cityData = "Not found";
     cityList.map((element) =>{
       if(element.name === city){
        cityData = element;
       }})
     return cityData   
   }
   
   const getCityWeather = async (cityInfo) => {
    try {
      let res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${cityInfo.coord.lat}&lon=${cityInfo.coord.lon}&appid=${ApiKey()}`),
      json = await res.data
      
    console.log('this is our response data:',json)
    console.log("cityName: ", json.name);
     
     setCity(json.name);
     let farenheit = convertKtoF(json.main.temp)
     setTemp(`${farenheit}°F`);
     setWeather(json.weather[0].description)
     setIcon(`http://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`)
     setDate(myDate)
     

    } catch (err) {
      let message = err.statusText || "An error has ocurred";
      searchResultRef.current.value = message;
      console.log(message);
    }
 } 


    return(
        <>
        <nav className='search-nav' ref={navSearch}>
         <button className='btnAside btn-close' onClick={displaySearch}>x</button> 

         <form className='search-form'>
        <div className='input-container'>
         <img src={magnificerIcon}alt="magnificerIcon" className="magnificer"></img>    
        <input type='search' name='city' placeholder='Search Location' ref={cityValue}></input>   
        </div>
        <button className='btnAside btn-submit' onClick={getFormValue}>Search</button>    
        </form>

        <div className='search-results'>
        <p ref={searchResultRef} className="cityResult">{cityResult}</p>
        </div>  
        </nav>

        <aside className='sidebarContainer'>
       <header className='headerSidebar'>
        <button className='btnAside btn-primary' onClick={displaySearch}>Search for place</button>
        <img src={locationIcon} className='btnAside btn-rounded' onClick={getMyLocation} alt="locationIcon"></img>
       </header>

       <div className='weather-status'>
        <img src={sideBackground} className='img-bg' alt="background"></img>
        <img src={icon} className='w-icon' alt='weatherIcon'></img>
       </div>

       <div className='weather-info'>
        <h1 className='temp'>{temp}</h1>
        <h2 className='current-condition'>{weather}</h2>
       </div>

       <div className='current-location'>
        <p>{date}</p>
        <div className='city'>
        <img src={mapIcon} className='mapIcon' alt="mapIcon"></img>
        <p>{city}</p>
        </div> 
       </div>
        </aside>
        </>
    )
}