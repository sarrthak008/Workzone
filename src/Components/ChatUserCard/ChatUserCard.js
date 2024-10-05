import React, { useState } from 'react'
import './ChatUserCard.css'
import { jobNames } from '../../Config/serchData'


const ChatUserCard = ({ user }) => {

   const [isFriend, setIsFriend] = useState(false)

   const getJobName = () => {
      return (jobNames[Math.floor(Math.random() * jobNames.length)])
   }

   const [randomJobName,setrandomJobName] =useState(getJobName())

const addtoCircle  = (user) =>{
         try {
            let  MY_CIRCLE = JSON.parse(localStorage.getItem("MY_CIRCLE")) || []
             user.jobRole = randomJobName
             MY_CIRCLE.unshift(user)
             localStorage.setItem('MY_CIRCLE',JSON.stringify(MY_CIRCLE))
             setIsFriend(true)
         } catch (error) {
             console.log(error
             )
         }
   }

   const removeToCircle = (user) =>{
      let  MY_CIRCLE = JSON.parse(localStorage.getItem("MY_CIRCLE")) || []
      let index = MY_CIRCLE.findIndex((friend)=>{
          return(friend.login.uuid===user.login.uuid)
      })
      MY_CIRCLE.splice(index,1)
      localStorage.setItem("MY_CIRCLE", JSON.stringify(MY_CIRCLE))
      setIsFriend(false)
   }


   return (
      <div className='chat-user-body'>
         <div className='chat-user-profile feed-user-info'>
            <span className='profile-pic'>
               <img src={user.picture.medium} alt='USER_PROFLE_PIC'></img>
            </span>
            <div className='user-name-emai-cont'>
               <span className='feed-card-username'>{`${user.name.first} ${user.name.last}`}</span>
               <span className='feed-card-email'>{user.email}</span>
            </div>
         </div>
         <div className='user-card-jon-info'><span className='user-card-jon-info'>Passinate {randomJobName}</span></div>
         <div className='user-other-info'>
            <span><i class="ri-landscape-line"></i> {user.location.city.split("-")[0]}</span>
            <span><i class="ri-cake-line"></i> {user.dob.age}</span>
            <span>{user.gender == "male" ? <i class="ri-men-line"></i> : <i class="ri-women-line"></i>}</span>
         </div>
         {isFriend ? <button className='btn-2 add-circel-btn' onClick={(e)=>{ e.preventDefault()
            removeToCircle(user)}}>remove</button> : <button className='btn1 add-circel-btn' onClick={(e)=>{ e.preventDefault()
            addtoCircle(user)}}> add to circle</button>}
      </div>
   )
}

export default ChatUserCard
