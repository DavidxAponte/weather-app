import React,{useRef, useEffect} from 'react'
import './HeadersBtn.css'

export default function HeaderBtn({
  temp,
  setTemp,
  setWhichTemp,
  maxTomorrow,
  minTomorrow,
  maxOvermorrow,
  minOvermorrow,
  maxAftermorrow,
  minAftermorrow,
  setMaxTomorrow,
  setMinTomorrow,
  setMaxOvermorrow,
  setMinOvermorrow,
  setMaxAftermorrow,
  setMinAftermorrow,
  setBtnCities,
}) {
  const celiusBtnRef = useRef();
  const fahrenheitBtnRef = useRef();
  const regexTemp = /\d/g


  useEffect(()=>{
    fahrenheitBtnRef.current.disabled = true;
  },[])



  const celsiusBtn = () =>{
       
      setWhichTemp(false);
       
      fahrenheitBtnRef.current.disabled = false;

      celiusBtnRef.current.className = "btn btn-rounded active"
      fahrenheitBtnRef.current.className = "btn btn-rounded" 
      
      let myTemp = parseInt(temp);
            
      let celsius = convertFtoC(myTemp);

      setTemp(`${celsius}°C`)

      celiusBtnRef.current.disabled = true;
      
      //console.log("this is the Max Temp tomorrow value", maxTomorrow)

      let tempMaxTomorrow = parseInt(maxTomorrow.match(regexTemp).join(""),10)
      tempMaxTomorrow = convertFtoC(tempMaxTomorrow);
      setMaxTomorrow(`${tempMaxTomorrow}°C`);

      let tempMinTomorrow = parseInt(minTomorrow.match(regexTemp).join(""),10)
      tempMinTomorrow = convertFtoC(tempMinTomorrow);
      setMinTomorrow(`${tempMinTomorrow}°C`);

      let tempMaxOvermorrow = parseInt(maxOvermorrow.match(regexTemp).join(""),10)
      tempMaxOvermorrow = convertFtoC(tempMaxOvermorrow);
      setMaxOvermorrow(`${tempMaxOvermorrow}°C`)
      
      let tempMinOvermorrow = parseInt(minOvermorrow.match(regexTemp).join(""),10)
      tempMinOvermorrow = convertFtoC(tempMinOvermorrow);
      setMinOvermorrow(`${tempMinOvermorrow}°C`)

      let tempMaxAftermorrow = parseInt(maxAftermorrow.match(regexTemp).join(""),10)
      tempMaxAftermorrow = convertFtoC(tempMaxAftermorrow)
      setMaxAftermorrow(`${tempMaxAftermorrow}°C`)

      let tempMinAftermorrow = parseInt(minAftermorrow.match(regexTemp).join(""),10)
      tempMinAftermorrow = convertFtoC(tempMinAftermorrow)
      setMinAftermorrow(`${tempMinAftermorrow}°C`)
      
      setBtnCities(<p>Please search again to see the results in <span>CELSIUS</span></p>)
      
  } 

  const fahrenheitBtn = () =>{

    setWhichTemp(true);

    celiusBtnRef.current.disabled = false;

    fahrenheitBtnRef.current.className = "btn btn-rounded active" 
    celiusBtnRef.current.className = "btn btn-rounded"

    let myTemp = parseInt(temp);

    let fahrenheit = convertCtoF(myTemp);

    setTemp(`${fahrenheit}°F`)

    fahrenheitBtnRef.current.disabled = true;

      let tempMaxTomorrow = parseInt(maxTomorrow.match(regexTemp).join(""),10)
      tempMaxTomorrow = convertCtoF(tempMaxTomorrow);
      setMaxTomorrow(`${tempMaxTomorrow}°F`);

      let tempMinTomorrow = parseInt(minTomorrow.match(regexTemp).join(""),10)
      tempMinTomorrow = convertCtoF(tempMinTomorrow);
      setMinTomorrow(`${tempMinTomorrow}°F`);

      let tempMaxOvermorrow = parseInt(maxOvermorrow.match(regexTemp).join(""),10)
      tempMaxOvermorrow = convertCtoF(tempMaxOvermorrow);
      setMaxOvermorrow(`${tempMaxOvermorrow}°F`)

      let tempMinOvermorrow = parseInt(minOvermorrow.match(regexTemp).join(""),10)
      tempMinOvermorrow = convertCtoF(tempMinOvermorrow);
      setMinOvermorrow(`${tempMinOvermorrow}°F`)

      let tempMaxAftermorrow = parseInt(maxAftermorrow.match(regexTemp).join(""),10)
      tempMaxAftermorrow = convertCtoF(tempMaxAftermorrow)
      setMaxAftermorrow(`${tempMaxAftermorrow}°F`)

      let tempMinAftermorrow = parseInt(minAftermorrow.match(regexTemp).join(""),10)
      tempMinAftermorrow = convertCtoF(tempMinAftermorrow)
      setMinAftermorrow(`${tempMinAftermorrow}°F`)

      setBtnCities(<p>Please search again to see the results in <span>FARENHEIT</span></p>)

  }

  const convertFtoC = (temp) =>{
    let result = Math.round((temp-32) / 1.8);
    return result
  } 

  const convertCtoF = (temp) =>{
    let result = Math.round(temp * 1.8 +32);
    return result 
  }
      

    return(
      <header className='wrapper-header'>
        <button className='btn btn-rounded' id='cBtn' ref={celiusBtnRef} onClick={celsiusBtn}>ºC</button>
        <button className='btn btn-rounded active' id='fBtn' ref={fahrenheitBtnRef} onClick={fahrenheitBtn}>ºF</button>
      </header>  
    )
}