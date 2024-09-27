import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import "./Signup.css"
import Singupform from '../../Components/SignupForm/Singupform'

const Signup = () => {
  return (
    <div>
        <Navbar/>
        <div className='signup-container'>
              <div className='form-and-img-container'>
                    <Singupform/>
              </div>
        </div>
    </div>
  )
}

export default Signup
