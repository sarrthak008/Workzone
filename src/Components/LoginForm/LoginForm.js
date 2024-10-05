import React, { useState } from 'react'
import "./LoginForm.css"
import { json, Link, useNavigate } from 'react-router-dom'
import LOGINIMG from './Login.png'
import toast from 'react-hot-toast'


const LoginForm = () => {
     
 const [email,setEmail] = useState('')
 const [password,setPassword] = useState('') 
 const [LOGINUSER ,setLOGINUSER] = useState(null)
 const USERS = JSON.parse(localStorage.getItem("USERS")) || []
 const navigate =useNavigate()

  const handleLogin = ()=>{
    const loggedInUser = USERS.find((USER) => USER.email === email && USER.password === password);
    setLOGINUSER(loggedInUser)
    if(LOGINUSER){
      toast.success('login successfully.')
      localStorage.setItem("LOGINUSER",JSON.stringify(LOGINUSER))
      navigate('/search')
    }else{
      toast.error('please check details.')
    }
  }

  return (
    <>
      <div className='login-form-container'>
      <span className='signup-text'>Login with workZone.</span>
          <div className='login-inputs-container'>
            <input placeholder='your email id'  className='signup-input' value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
            <input placeholder='set password'  className='signup-input' value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
            <button className='btn1 signup-btn login-btn' onClick={()=>{
              handleLogin()
            }}>login</button>
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
