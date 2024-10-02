import React from 'react'
import "./Profile.css"
import Sidebar from '../../Components/Sidebar/Sidebar'
import Tagline from '../../Components/TagLine/Tagline'

const Profile = () => {
 
  const LOGINUSER = JSON.parse(localStorage.getItem('LOGINUSER'))
  const {name ,lastName ,email,mobNumber} = LOGINUSER
  return (
    <>
    <Sidebar/>
    <div className='Profile-container' >
            <div className='profile-main-card'>
                 <div className='profile-img-container'></div>
                 <div className='prfile-user-info'>
                   <span className='user-info'>{`${name} ${lastName} .`}</span>
                   <span className='user-info gray'>{email}</span>
                   <span className='user-info gray'>{mobNumber}</span>
                 </div>
                <div className='profile-setting'>
                   <span><i class="ri-share-fill"></i></span>
                   <span><i class="ri-tools-fill"></i></span>
                  </div> 
            </div>
            <Tagline tagline={'my apply'}/>
    </div>
    </>
  )
}

export default Profile
