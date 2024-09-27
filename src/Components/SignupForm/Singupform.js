import React from 'react'
import SIGNUP from "./Signup.png"
import "./SignupForm.css"

const Singupform = () => {
    return (
        <>

            <div className='signup-form-container'>
                <span className='signup-text'>Signup with workZone.</span>
                <span className='short-inputs'>
                    <input placeholder='first name' className='signup-input'></input>
                    <input placeholder='last name'  className='signup-input'></input>
                </span>
                <input placeholder='your mobile number'  className='signup-input'></input>
                <input placeholder='your email id'  className='signup-input'></input>
                <input placeholder='needed job role' className='signup-input'></input>
                <input placeholder='set password'  className='signup-input'></input>
                <span>
                     <input type='checkbox'></input>
                     i agree terms and conditions.
                </span>
               <button>Signup</button> 
            </div>
            <div className='signup-image-container'>
                <img src={SIGNUP}></img>
            </div>
        </>
    )
}

export default Singupform
