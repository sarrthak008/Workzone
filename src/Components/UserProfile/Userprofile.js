import React, { useState } from 'react'
import "./Userprofile.css"
import { ProfilePopUp } from '../Popup/Popup'
import USER_IMG from './user.png'

const Userprofile = () => {
    
  const LOGINUSER = JSON.parse(localStorage.getItem('LOGINUSER'))
  const PROFILE_IMG = localStorage.getItem('PROFILE_IMG') || USER_IMG 
  const {name ,lastName ,email,mobNumber} = LOGINUSER
  const [pPopup,setpPopup] = useState(false)
    
  return (

    <div>
      <div className='profile-main-card'>
                 <div className='profile-img-container'>
                     <img src={PROFILE_IMG} alt='profile image'></img>
                     {console.log(PROFILE_IMG)}
                 </div>
                 <div className='prfile-user-info'>
                   <span className='user-info'>{`${name} ${lastName} .`}</span>
                   <span className='user-info gray'>{email}</span>
                   <span className='user-info gray'>{mobNumber}</span>
                   <span className='user-info social-media'> {LOGINUSER.github_URL.length>0 ? <><a href={LOGINUSER.github_URL} target='__blank' className='link'><i class="ri-github-fill"></i></a> </>: null}  {LOGINUSER.linkdin_URL.length>0 ? <><a href={LOGINUSER.linkdin_URL} target='__blank' className='link'><i class="ri-linkedin-box-fill"></i></a> </>: null}</span>
                 </div>
                 <div className='profile-setting'>
                   <span><i class="ri-share-fill"></i></span>
                   <span  onClick={()=>{
                    setpPopup(true)
                   }}><i class="ri-tools-fill"></i></span>
                   </div> 
      </div>
    {pPopup ? <ProfilePopUp setpPopup={setpPopup}/> : null }
    </div>
  )
}

export default Userprofile
