import './App.css'
import React, { useState } from "react";
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
function App() {
  return (
    <>
    <div className="content">
      <Navbar />

      <div className="searchbar">
        <span className='Display'>Search the arc<span className='Display_2'>hive</span></span>
      </div>
      {/* <Search /> */}

      {/* <Footer /> */}
    </div>
    </>
  )
}

export default App
