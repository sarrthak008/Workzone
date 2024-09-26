import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import "./Signup.css"
import SIGNUPIMG from "./Signup.png"

const Signup = () => {
  return (
    <div>
        <Navbar/>
        <div className='signup-container'>
              <div className='form-and-img-container'>
                 <div className='signup-form-container'>
                   <span className='signup-text'>Signup with workZone.</span>
                   <span>
                      <input placeholder='first name'></input>
                      <input placeholder='last name'></input>
                   </span>
                 </div>
                 <div className='signup-image-container'>
                    <img src={SIGNUPIMG}></img>
                 </div>
              </div>
        </div>
    </div>
  )
}

export default Signup
