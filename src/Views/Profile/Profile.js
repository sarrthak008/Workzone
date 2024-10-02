import React from 'react'
import "./Profile.css"
import Sidebar from '../../Components/Sidebar/Sidebar'
import Tagline from '../../Components/TagLine/Tagline'
import Userprofile from '../../Components/UserProfile/Userprofile'

const Profile = () => {
 
  return (
    <>
    <Sidebar/>
    <div className='Profile-container' >
            <Userprofile/>
            <Tagline tagline={'my apply'}/>
    </div>
    </>
  )
}

export default Profile
