import React, { useState } from 'react'
import './Popup.css'
import toast from 'react-hot-toast'

const ProfilePopUp = ({setpPopup}) => {
     
    const LOGINUSER = JSON.parse(localStorage.getItem('LOGINUSER'))
    const {email,mobNumber,id} = LOGINUSER
    const [useremail,setusremail] = useState(email)
    const [mobNum,setMobNum] = useState(mobNumber)
     const [imge ,setimge] = useState(null)
     const updateProfile = () =>{
         let USERS = JSON.parse(localStorage.getItem('USERS'))
          let findedUser = USERS.find((user)=>{
              return(user.id==id)
          })
           if(!(useremail.includes('@gmail.com'))){
               toast.error('please enter valid email')
           }else{
               findedUser.email = useremail
           }

           if(mobNum.length ==10){
            findedUser.mobNumber = mobNum
           }else{
             toast.error('please enter valid mobile number')
           }

         USERS[id-1] = findedUser
         localStorage.setItem('USERS' , JSON.stringify(USERS))
        }

     const handleFile = (e)=>{
         let file = e.target.files[0]
         let obj = URL.createObjectURL(file)
         setimge(obj)
        console.log(obj)
        localStorage.setItem("PROFILE_IMG",obj)
     }

  return (
    <div className='popup-body'>
        <div className='update-profile-container'>
             <input type='file' onChange={handleFile} accept="image/png, image/jpeg"></input>
             <input className='update-input' value={mobNum} onChange={(e)=>{setMobNum(e.target.value)}}></input>
             <input className='update-input' value={useremail} onChange={(e)=>{setusremail(e.target.value)}}></input>
             <button className='btn1 update-btn' onClick={()=>{updateProfile()}}>update</button>
           <span className='close-btn' onClick={()=>{
              setpPopup(false)
           }}><i class="ri-close-line"></i></span>  
        </div>
    </div>
  )
}

export  {ProfilePopUp}
