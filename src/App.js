import React,{useState} from 'react'
import Sidebar from "./components/Sidebar/Sidebar";
import './App.css'
import HeaderBtn from './components/HeadersBtn/HeadersBtn';
import Widget from './components/Widget/Widget';
import Higlights from './components/Highlights/Highlights';
import Footer from './components/Footer/Footer';
import userEvent from '@testing-library/user-event';

export default function App() {
  
    const [city, setCity] = useState("Not Found")
    const [temp, setTemp] = useState("00");
    const [weather, setWeather] = useState("Not Found");
    const [icon, setIcon]  = useState("http://openweathermap.org/img/wn/10d@2x.png")
    const [date, setDate] = useState("Not Found");
    const [cityResult, setCityResult] = useState("Search for the city of your choice.")
    const [whichTemp, setWhichTemp] = useState(true);
    const [wind, setWind]  = useState(0);
    const [windFlow, setWindFlow] = useState("Not Found");
    const [humidity, setHumidity] = useState("Not Found");
    const [visibility, setVisibility] = useState("Not Found");
    const [pressure, setPressure] = useState("Not Found");
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const [iconTomorrow, setIconTomorrow] = useState("http://openweathermap.org/img/wn/10d@2x.png")
    const [iconOvermorrow, setIconOvermorrow] = useState("http://openweathermap.org/img/wn/10d@2x.png");
    const [iconAftermorrow, setIconAftermorrow] = useState("http://openweathermap.org/img/wn/10d@2x.png")
    const [maxTomorrow, setMaxTomorrow] = useState(0);
    const [minTomorrow, setMinTomorrow] = useState(0);
    const [maxOvermorrow, setMaxOvermorrow] = useState(0);
    const [minOvermorrow, setMinOvermorrow] = useState(0);
    const [maxAftermorrow, setMaxAftermorrow] = useState(0);
    const [minAftermorrow, setMinAftermorrow] = useState(0);


  return (
    <div className='mainContainer'>
     <Sidebar
     city={city}
     setCity={setCity}
     temp={temp}
     setTemp={setTemp}
     weather={weather}
     setWeather={setWeather}
     icon={icon}
     setIcon={setIcon}
     date={date}
     setDate={setDate}
     cityResult={cityResult}
     setCityResult={setCityResult}
     whichTemp={whichTemp}
     setWind={setWind}
     setWindFlow={setWindFlow}
     setHumidity={setHumidity}
     setVisibility={setVisibility}
     setPressure={setPressure}
     latitude={latitude}
     longitude={longitude}
     setLatitude={setLatitude}
     setLongitude={setLongitude}
     setIconTomorrow={setIconTomorrow}
     setIconOvermorrow={setIconOvermorrow}
     setIconAftermorrow={setIconAftermorrow}
     setMaxTomorrow={setMaxTomorrow}
     setMinTomorrow={setMinTomorrow}
     setMaxOvermorrow={setMaxOvermorrow}
     setMinOvermorrow={setMinOvermorrow}
     setMaxAftermorrow={setMaxAftermorrow}
     setMinAftermorrow={setMinAftermorrow}
     />
     <div className='wrapper'>
      <HeaderBtn
      temp={temp}
      setTemp={setTemp}
      setWhichTemp={setWhichTemp}
      maxTomorrow={maxTomorrow}
      minTomorrow={minTomorrow}
      maxOvermorrow={maxOvermorrow}
      minOvermorrow={minOvermorrow}
      maxAftermorrow={maxAftermorrow}
      minAftermorrow={minAftermorrow}
      setMaxTomorrow={setMaxTomorrow}
      setMinTomorrow={setMinTomorrow}
      setMaxOvermorrow={setMaxOvermorrow}
      setMinOvermorrow={setMinOvermorrow}
      setMaxAftermorrow={setMaxAftermorrow}
      setMinAftermorrow={setMinAftermorrow}

      />
      <Widget
      iconTomorrow={iconTomorrow}
      iconOvermorrow={iconOvermorrow}
      iconAftermorrow={iconAftermorrow}
      maxTomorrow={maxTomorrow}
      minTomorrow={minTomorrow}
      maxOvermorrow={maxOvermorrow}
      minOvermorrow={minOvermorrow}
      maxAftermorrow={maxAftermorrow}
      minAftermorrow={minAftermorrow}
      />
      <Higlights
      wind={wind}
      windFlow={windFlow}
      humidity={humidity}
      visibility={visibility}
      pressure={pressure}
      />
      <Footer/>
     </div>
    </div>
  )
}


