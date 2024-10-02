import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Userprofile from '../../Components/UserProfile/Userprofile'

const Setting = () => {
  return (
    <div>
      <Sidebar/>
        <div className='Profile-container'>
            <Userprofile/>
        </div>
    </div>
  )
}

export default Setting
