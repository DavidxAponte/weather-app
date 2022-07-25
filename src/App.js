import React from 'react'
import Sidebar from "./components/Sidebar/Sidebar";
import './App.css'
import HeaderBtn from './components/HeadersBtn/HeadersBtn';
import Widget from './components/Widget/Widget';
import Higlights from './components/Highlights/Highlights';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <div className='mainContainer'>
     <Sidebar/>
     <div className='wrapper'>
      <HeaderBtn/>
      <Widget/>
      <Higlights/>
      <Footer/>
     </div>
    </div>
  )
}


