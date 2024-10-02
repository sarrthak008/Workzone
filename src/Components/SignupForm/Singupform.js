import React, { useState } from 'react'
import SIGNUP from "./Signup.png"
import "./SignupForm.css"
import { Link, useNavigate, useNavigation } from 'react-router-dom'
import toast from 'react-hot-toast'

/*  

         
*/

const Singupform = () => {

  const [name, setName] = useState('')
  const [lastName, setLastname] = useState("")
  const [mobNumber, setMobileNumber] = useState('')
  const [email, setEmail] = useState('')
  const [jobRole, setJobRole] = useState('')
  const [password, setPassword] = useState('')
  const [conditions, setConditions] = useState(false)

  const navigate = useNavigate()

  const handelSubmit = () => {

   if(name.length==0 && lastName.length==0){
      toast.error("please fill all input fild")
   }else if(email.length==0 && jobRole.length==0){
    toast.error("please fill all input fild")
   }else if(!mobNumber==10){
    toast.error("please enter valid mobile number")
   }else if(password<5){
       toast.error("password must be include  4 or many characters")
   }else if(!conditions){
     toast.error("please accept conditions")
   }else{
      let USERS = JSON.parse(localStorage.getItem("USERS")) || []
      USERS.push({
        name,
        password,
        lastName,
        mobNumber,
        email,
        jobRole,
        conditions,
        id:USERS.length+1
      })
      localStorage.setItem("USERS", JSON.stringify(USERS))
      toast.success("account created successfully..")
      navigate('/login')
    }
    
  }

  return (
    <>

      <div className='signup-form-container'>
        <span className='signup-text'>Signup with workZone.</span>
        <span className='short-inputs'>
          <input placeholder='first name' className='signup-input' value={name} onChange={(e) => { setName(e.target.value) }}></input>
          <input placeholder='last name' className='signup-input' value={lastName} onChange={(e) => { setLastname(e.target.value) }}></input>
        </span>
        <input placeholder='your mobile number' className='signup-input' value={mobNumber} onChange={(e) => { setMobileNumber(e.target.value) }}></input>
        <input placeholder='your email id' className='signup-input' value={email} onChange={(e) => { setEmail(e.target.value) }}></input>
        <input placeholder='needed job role' className='signup-input' value={jobRole} onChange={(e) => { setJobRole(e.target.value) }}></input>
        <input placeholder='set password' className='signup-input' value={password} onChange={(e) => { setPassword(e.target.value) }}></input>
        <span className='check-box'>
          <input type='checkbox' checked={conditions} onChange={(e) => { setConditions(e.target.checked) }}></input>
          i agree terms and conditions.
        </span>
        <button className='btn1 signup-btn' onClick={() => {
          handelSubmit()
        }}>signup</button>
        <Link className='link' to='/login'><span className='login-link'>already have an account ? login</span></Link>
      </div>
      <div className='signup-image-container'>
        <img src={SIGNUP}></img>
      </div>
    </>
  )
}

export default Singupform
