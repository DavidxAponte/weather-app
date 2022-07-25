import React from 'react'
import './HeadersBtn.css'

export default function HeaderBtn() {
    return(
      <header className='wrapper-header'>
        <button className='btn btn-rounded active'>ºC</button>
        <button className='btn btn-rounded'>ºF</button>
      </header>  
    )
}