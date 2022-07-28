import React, {useRef, useEffect} from 'react';
import './Sidebar.css';
import locationIcon from './location.svg'
import sideBackground from './Cloud-background.png'
import mapIcon from './map.svg'
import magnificerIcon from './magnificer.svg'
import axios from 'axios';
import ApiKey from '../../api/ApiKey';
import cityList from "../../api/city.list.json"


export default function Sidebar({
  city,
  setCity,
  temp,
  setTemp,
  weather,
  setWeather,
  icon,
  setIcon,
  date,
  setDate,
  cityResult,
  setCityResult,
  whichTemp,
  setWind,
  setWindFlow,
  setHumidity,
  setVisibility,
  setPressure,
  latitude,
  longitude,
  setLatitude,
  setLongitude,
  setIconTomorrow,
  setIconOvermorrow,
  setIconAftermorrow,
  setMaxTomorrow,
  setMinTomorrow,
  setMaxOvermorrow,
  setMinOvermorrow,
  setMaxAftermorrow,
  setMinAftermorrow
}){
    const navSearch = useRef();
    const searchResultRef = useRef();
    const cityValue = useRef();

  

    useEffect(() => {
     getMyLocation();

     getNextFourDaysForecast();
     
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

   const convertFtoC = (temp) =>{
    let result = Math.round((temp-32) / 1.8);
    return result  
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

         setLatitude(json.coord.lat);
         setLongitude(json.coord.lon);

         let farenheit = convertKtoF(json.main.temp)

         let celsius = convertFtoC(farenheit);
     
         whichTemp ? setTemp(`${farenheit}°F`) : setTemp(`${celsius}°C`);

         setWeather(json.weather[0].description)
         setIcon(`http://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`)
         setDate(myDate)
         setCityResult("Search for the city of your choice")
         cityValue.current.value = "";
         setWind(json.wind.speed)
         setWindFlow(setWindDirection(json.wind.deg))
         setHumidity(json.main.humidity)
         setVisibility(convertMetersToMiles(json.visibility))
         setPressure(json.main.pressure)

         
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

     setLatitude(json.coord.lat);
     setLongitude(json.coord.lon);

     let farenheit = convertKtoF(json.main.temp);
     
     let celsius = convertFtoC(farenheit);
     
     whichTemp ? setTemp(`${farenheit}°F`) : setTemp(`${celsius}°C`);

     setWeather(json.weather[0].description)
     setIcon(`http://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`)
     setDate(myDate)
     setWind(json.wind.speed)
     setWindFlow(setWindDirection(json.wind.deg))
     setHumidity(json.main.humidity)
     setVisibility(convertMetersToMiles(json.visibility))
     setPressure(json.main.pressure)  

     getNextFourDaysForecast();

    } catch (err) {
      let message = err.statusText || "An error has ocurred";
      searchResultRef.current.value = message;
      console.log(message);
    }
 } 


 const setWindDirection = (windFlow) =>{
  if(windFlow >= 0 && windFlow <= 45){
     return "North"  
  }
  
  if(windFlow >= 45 && windFlow <= 90){
      return "NorthEast"
  }

  if(windFlow >= 90 && windFlow <= 135 ){
      return "East"
  }

  if(windFlow >= 135 && windFlow <= 180){
      return "SouthEast"
  }

  if(windFlow >= 180 && windFlow <= 225){
      return "South"
  }

  if(windFlow >= 225 && windFlow <= 270){
      return "SouthWest"
  }

  if(windFlow >= 270 && windFlow <= 315){
      return "West"
  }

  if(windFlow >= 315 && windFlow <= 360){
      return "NortWest"
  }
}

const convertMetersToMiles = (meters) =>{
   let result = meters/1609.34
   result = result.toFixed(2)
   return result 
}

const getNextFourDaysForecast = async() =>{

  try {
    let res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${ApiKey()}`),
    json = await res.data
   
    console.log('this is our FORECAST response data:',json)
    let tomorrowIcon = json.list[6].weather[0].icon;
    let overmorrowIcon = json.list[14].weather[0].icon;
    let aftermorrowIcon = json.list[21].weather[0].icon;
    setIconTomorrow(`http://openweathermap.org/img/wn/${tomorrowIcon}@2x.png`);
    setIconOvermorrow(`http://openweathermap.org/img/wn/${overmorrowIcon}@2x.png`)
    setIconAftermorrow(`http://openweathermap.org/img/wn/${aftermorrowIcon}@2x.png`)

    let tempMaxTomorrow = json.list[6].main.temp_max
    tempMaxTomorrow = convertKtoF(tempMaxTomorrow)
    let tempMaxTomorrowCelsius = convertFtoC(tempMaxTomorrow);
    whichTemp ? setMaxTomorrow(`${tempMaxTomorrow}°F`): setMaxTomorrow(`${tempMaxTomorrowCelsius}°C`)
    
    

    let tempMinTomorrow = json.list[6].main.temp_min
    tempMinTomorrow = convertKtoF(tempMinTomorrow)
    let tempMinTomorrowCelsius = convertFtoC(tempMinTomorrow)
    whichTemp ? setMinTomorrow(`${tempMinTomorrow}°F`): setMinTomorrow(`${tempMinTomorrowCelsius}°C`)
    

    let tempMaxOvermorrow = json.list[14].main.temp_max
    tempMaxOvermorrow = convertKtoF(tempMaxOvermorrow)
    let tempMaxOvermorrowCelsius = convertFtoC(tempMaxOvermorrow)
    whichTemp ?  setMaxOvermorrow(`${tempMaxOvermorrow}°F`): setMaxOvermorrow(`${tempMaxOvermorrowCelsius}°C`)
    

    let tempMinOvermorrow = json.list[14].main.temp_min
    tempMinOvermorrow = convertKtoF(tempMinOvermorrow)
    let tempMinOvermorrowCelsius = convertFtoC(tempMinOvermorrow)
    whichTemp ? setMinOvermorrow(`${tempMinOvermorrow}°F`) : setMinOvermorrow(`${tempMinOvermorrowCelsius}°C`)
    
     
    let tempMaxAftermorrow = json.list[21].main.temp_max
    tempMaxAftermorrow = convertKtoF(tempMaxAftermorrow)
    let tempMaxAftermorrowCelsius = convertFtoC(tempMaxAftermorrow)
    whichTemp ? setMaxAftermorrow(`${tempMaxAftermorrow}°F`): setMaxAftermorrow(`${tempMaxAftermorrowCelsius}°C`)
    

    let tempMinAftermorrow = json.list[21].main.temp_min
    tempMinAftermorrow = convertKtoF(tempMinAftermorrow)
    let tempMinAftermorrowCelsius = convertFtoC(tempMinAftermorrow)
    whichTemp ?  setMinAftermorrow(`${tempMinAftermorrow}°F`): setMinAftermorrow(`${tempMinAftermorrowCelsius}°C`)
    
  } catch (err) {
     let message = err.statusText || "An error has ocurred";
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