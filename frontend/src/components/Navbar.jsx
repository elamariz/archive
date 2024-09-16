import React from 'react'
import archiveLogo from '../assets/archive-full.svg'
import darkMode from '../assets/moon.svg'
import './Navbar.css'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  return (
    <div className="nav">
      <div>
        <img src={archiveLogo} alt="" />
      </div>

      <div className='user-options'>
        <a href="" className='browseButton'>Browse Projects</a>
        <button className='loginButton'>Log in as Admin</button>
        <div className="ThemeToggle">
          <ThemeToggle />
        </div>
        
        
      </div>
      
    </div>
  )
}

export default Navbar