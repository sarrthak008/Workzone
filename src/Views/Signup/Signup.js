import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import "./Signup.css"
import Singupform from '../../Components/SignupForm/Singupform'
import Footer from '../../Components/Footer/Footer'

const Signup = () => {
  return (
    <div>
        <Navbar/>
        <div className='signup-container'>
              <div className='form-and-img-container'>
                    <Singupform/>
              </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Signup
