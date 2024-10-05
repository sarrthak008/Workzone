import React from 'react'
import "./Chatprofile.css"


const Chatprofile = ({user}) => {
  return (
    <div className='chat-profile-container'>
       <div className=' chat-user-profile chats-body'>
            <span className='profile-pic'>
               <img src={user.picture.medium} alt='USER_PROFLE_PIC'></img>
            </span>
            <div className='user-name-emai-cont'>
               <span className='feed-card-username'>{`${user.name.first} ${user.name.last}`}</span>
               <span className='feed-card-email'>{user.jobRole}</span>
            </div>
         </div>
    </div>
  )
}

export default Chatprofile
