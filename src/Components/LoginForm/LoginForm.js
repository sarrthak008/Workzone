import React from 'react'
import "./LoginForm.css"
import { Link } from 'react-router-dom'
import LOGINIMG from './Login.png'

const LoginForm = () => {
  return (
    <>
      <div className='login-form-container'>
      <span className='signup-text'>Login with workZone.</span>
          <div className='login-inputs-container'>
            <input placeholder='your email id'  className='signup-input'></input>
            <input placeholder='set password'  className='signup-input'></input>
            <button className='btn1 signup-btn login-btn'>signup</button>
          </div>
        <Link to='/signup' className='link'> <span className='login-link'>i dont have an account ? signup</span> </Link>
      </div>
      <div className='login-image-container'>
          <img src={LOGINIMG}></img>
      </div>
    </>
  )
}

export default LoginForm
