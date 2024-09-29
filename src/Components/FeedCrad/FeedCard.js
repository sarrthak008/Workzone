import React from 'react'
import "./FeedCard.css"

const FeedCard = ({info}) => {
  return (
    <div className='feed-card-body'>
         <div className='feed-user-info'>
             <span className='profile-pic'>
                <img src={info.profile_pic} alt='USER_PROFLE_PIC'></img>
             </span>
             <div className='user-name-emai-cont'>
                <span className='feed-card-username'>{`${info.first_name} ${info.last_name}`}</span>
                <span className='feed-card-email'>{info.email}</span>
             </div>
         </div>
    </div> 
  )
}

export default FeedCard
