import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import LoginForm from '../../Components/LoginForm/LoginForm'

const Login = () => {
  return (
    <div>
        <Navbar/>
        <div className='signup-container'>
              <div className='form-and-img-container'>
                 <LoginForm/>
              </div>
        </div>
    </div>
  )
}

export default Login
