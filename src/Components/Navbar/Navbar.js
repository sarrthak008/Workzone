import React from 'react'
import "./Navbar.css"
import { MAIN_COLOR } from '../../Config/Colors'

const Navbar = () => {
  return (
    <div className='nav-body'>
          <div className='nav-iteam-container'>
              <div className='brand-heading' style={{color:MAIN_COLOR}}>workZone.</div>
              <div className='nav-iten-container'>
                 <span>home</span>
                 <span>signup</span>
                 <span className='medium-round' >login.</span>
              </div>
          </div>
    </div>
  )
}

export default Navbar
