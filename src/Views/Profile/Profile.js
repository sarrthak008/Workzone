import React from 'react'
import "./Profile.css"
import Sidebar from '../../Components/Sidebar/Sidebar'
import Tagline from '../../Components/TagLine/Tagline'

const Profile = () => {
  return (
    <>
    <Sidebar/>
    <div className='Profile-container' >
            <div className='profile-main-card'></div>
            <Tagline tagline={'my apply'}/>
    </div>
    </>
  )
}

export default Profile
