import React from 'react'
import archiveLogo from '../assets/archive-full.svg'
import darkMode from '../assets/moon.svg'
import './Navbar.css'
// import ThemeToggle from './components/ThemeToggle'

const Navbar = () => {
  return (
    <div className="nav">
      <div>
        <img src={archiveLogo} alt="" />
      </div>

      <div className='user-options'>
        <a href="" className='browseButton'>Browse Projects</a>
        <button className='loginButton'>Log in as Admin</button>
      
        <a href=""><img src={darkMode} alt="" /></a>
        
      </div>
      {/* <ThemeToggle 
        isChecked={isDark}
        handleChange={() => setIsDark(!isDark)}
      /> */}
    </div>
  )
}

export default Navbar