import React, { useState } from 'react'
import './Popup.css'
import toast from 'react-hot-toast'


const LOGINUSER = JSON.parse(localStorage.getItem('LOGINUSER'))
const {email,mobNumber,id} = LOGINUSER

const ProfilePopUp = ({setpPopup}) => {
    
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
    setpPopup(false)
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



const PasswordPopUP  = ({setPassPopup})=>{

 
 const [newpass , setNewPass] = useState('') 
 const [oldpass,setOldPass] = useState('')

  const updatePass = ()=>{
       if(oldpass === LOGINUSER.password){
          if(newpass.length<5){
            toast.error('password length must be grater than 5')
          }else{
             let USERS = JSON.parse(localStorage.getItem('USERS'))
             let findedUser = USERS.find((user)=>{
                return(user.password==oldpass)
            })
            findedUser.password=newpass
            USERS[id-1] = findedUser
            localStorage.setItem('USERS' , JSON.stringify(USERS))
           setPassPopup(false)
          }
       }
  }

   return(
    <>
      <div className='popup-body'>
           <div className='update-profile-container pass-popup'>
            <input className='update-input' placeholder='enter your old password' type='password' value={oldpass} onChange={(e)=>{setOldPass(e.target.value)}}></input>
            <input className='update-input' placeholder='set a new password' value={newpass} onChange={(e)=>{setNewPass(e.target.value)}}></input>
            <button className='btn1 update-btn' onClick={()=>{
              updatePass()
            }}>update</button>
            
            <span className='gray'>next time login with new password</span>
   
           <span className='close-btn' onClick={()=>{
            setPassPopup(false)
           }}><i class="ri-close-line"></i></span> 
           </div>
      </div>
    </>
   )
}



const LinksPopup  = ({LinksPopuppup})=>{

    return(
     <>
       <div className='popup-body'>
            <div className='update-profile-container pass-popup'>
             <input className='update-input' placeholder='enter your Github profile URL'></input>
             <input className='update-input' placeholder='enter your Linkdin profile URL'></input>
             <button className='btn1 update-btn' onClick={()=>{
             }}>connect</button>
             
             <span className='gray'>connect your Linkdin & Github with workZone</span>
    
            <span className='close-btn' onClick={()=>{
             LinksPopuppup(false)
            }}><i class="ri-close-line"></i></span> 
            </div>
       </div>
     </>
    )
 }

export  {ProfilePopUp ,PasswordPopUP,LinksPopup}
