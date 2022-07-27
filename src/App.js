import React,{useState} from 'react'
import Sidebar from "./components/Sidebar/Sidebar";
import './App.css'
import HeaderBtn from './components/HeadersBtn/HeadersBtn';
import Widget from './components/Widget/Widget';
import Higlights from './components/Highlights/Highlights';
import Footer from './components/Footer/Footer';

export default function App() {
  
    const [city, setCity] = useState("Not Found")
    const [temp, setTemp] = useState("00");
    const [weather, setWeather] = useState("Not Found");
    const [icon, setIcon]  = useState("http://openweathermap.org/img/wn/10d@2x.png")
    const [date, setDate] = useState("Not Found");
    const [cityResult, setCityResult] = useState("Search for the city of your choice.")
    const [whichTemp, setWhichTemp] = useState(true);

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
     />
     <div className='wrapper'>
      <HeaderBtn
      temp={temp}
      setTemp={setTemp}
      setWhichTemp={setWhichTemp}
      />
      <Widget/>
      <Higlights/>
      <Footer/>
     </div>
    </div>
  )
}


