import React from 'react'
import archiveLogo from '../assets/archive-full.svg'
import darkMode from '../assets/moon.svg'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="nav">
      <div>
        <img src={archiveLogo} alt="" />
      </div>

      <div className='user-options'>
        <a href=""><span>Browse Projects</span></a>
        <button className='loginButton'>Log in as Admin</button>
      
        <a href=""><img src={darkMode} alt="" /></a>
      </div>
      {/* <ThemeToggle /> */}
    </div>
  )
}

export default Navbar