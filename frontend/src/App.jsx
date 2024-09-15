import './App.css'
import React, { useState } from "react";
import { Route, Routes } from 'react-router-dom'

import archiveSearch from './assets/search-the-archive.svg'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MainSearchBar from './components/MainSearchbar';


function App() {
  const [isDark, setIsDark] = useState(true);
  return (
    <>
    <div className="content"  data-theme="dark">
      <Navbar className='Navbar'/>

      <div className="search-page-wrapper">
        <div className="archiveSearch-img">
          <img src={archiveSearch} alt="Search the archive"/>
        </div>

        <MainSearchBar/>
        <span>An Archive of <span id='no-of-projects'>0</span> Senior Projects, Case Studies, and more</span>
      </div>
      
      <Footer />
    </div>
    </>
  )
}

export default App
