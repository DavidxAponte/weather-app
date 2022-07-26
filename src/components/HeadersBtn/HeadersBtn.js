import React from 'react'
import './HeadersBtn.css'

export default function HeaderBtn() {
    return(
      <header className='wrapper-header'>
        <button className='btn btn-rounded '>ºC</button>
        <button className='btn btn-rounded active'>ºF</button>
      </header>  
    )
}