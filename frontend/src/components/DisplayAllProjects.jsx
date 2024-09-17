import React from 'react'
import divider from '../assets/ellipse-divider.svg'

import './DisplayAllProjects.css'

const DisplayAllProjects = () => {
  return (
    <div>
        {/* Placeholder lang to, i think you can add a loop here that will iterate throughout the dynamic data */}
        
        <div className="result-wrapper">
            <a href="">
              <span className='result-title'>Archive: A Customized Search Engine for Academic Resources</span> 
              <div className="proponent-date-wrapper">
                <span className='proponent'>Proponents et al.</span>
                <img src={divider} alt="" className='divider'/>
                <span className='date'>2024</span>
              </div>
              <span className='abstract-snippet'>This is an abstract text that wanders through the realms of incomprehensible randomness, blending ephemeral concepts with fleeting notions of structured disarray..</span>
            </a>
        </div>
        
    </div>
  )
}

export default DisplayAllProjects