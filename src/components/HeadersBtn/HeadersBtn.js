import React,{useRef, useEffect} from 'react'
import './HeadersBtn.css'

export default function HeaderBtn({temp,setTemp,setWhichTemp}) {
  const celiusBtnRef = useRef();
  const fahrenheitBtnRef = useRef();
  
  useEffect(()=>{
    fahrenheitBtnRef.current.disabled = true;
  },[])

  const celsiusBtn = () =>{
      fahrenheitBtnRef.current.disabled = false;

      celiusBtnRef.current.className = "btn btn-rounded active"
      fahrenheitBtnRef.current.className = "btn btn-rounded" 
      
      let myTemp = parseInt(temp);
            
      let celsius = convertFtoC(myTemp);

      setTemp(`${celsius}°C`)

      celiusBtnRef.current.disabled = true;
      
      setWhichTemp(false);
  } 

  const fahrenheitBtn = () =>{
    celiusBtnRef.current.disabled = false;

    fahrenheitBtnRef.current.className = "btn btn-rounded active" 
    celiusBtnRef.current.className = "btn btn-rounded"

    let myTemp = parseInt(temp);

    let fahrenheit = convertCtoF(myTemp);

    setTemp(`${fahrenheit}°F`)

    fahrenheitBtnRef.current.disabled = true;

    setWhichTemp(true);
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