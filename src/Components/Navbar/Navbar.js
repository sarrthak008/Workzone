import React from 'react'
import "./Navbar.css"
import { MAIN_COLOR } from '../../Config/Colors'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
 
  const navigate = useNavigate ()

  return (
    <div className='nav-body'>
          <div className='nav-iteam-container'>
              <div className='brand-heading' style={{color:MAIN_COLOR}}>workZone.</div>
              <div className='nav-iten-container'>
               <Link className='link' to="/"><span>home</span> </Link>
               <Link className='link' to="/signup"><span>signup</span></Link>
                 <span className='medium-round' onClick={()=>{
                  navigate('/login')
                 }}>login.</span>
              </div>
          </div>
    </div>
  )
}

export default Navbar
