import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BrowseSearchbar from '../components/BrowseSearchbar'
import AlphabetList from '../components/AlphabetList'

import './BrowseProject.css'
import DisplayAllProjects from '../components/DisplayAllProjects'

const BrowseProject = () => {
  return (
    <div className="content">
      <Navbar /> 
      <div className="search-bar-header">
        <div className="search-bar-header-text">
          <span>Showing <span className='dynamic-result-counter'>0</span> projects</span>
        </div>
        <BrowseSearchbar />
      </div>
      
      <div className="results-wrapper">
        <div >
          <div className="display-projects-wrapper">
            {/* All projects here */}
            <DisplayAllProjects />
          </div>
        </div>

        <div className="sort-wrapper">
          <AlphabetList />
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default BrowseProject