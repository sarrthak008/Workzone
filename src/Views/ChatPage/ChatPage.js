import React from 'react'
import { Link, useParams } from 'react-router-dom'
import './ChatPage.css'

const ChatPage = () => {
    let   MY_CIRCLE = JSON.parse(localStorage.getItem('MY_CIRCLE'))
    const {uuid} =useParams()
    let openUser =  MY_CIRCLE.find((user)=>{
         return(user.login.uuid === uuid)
    })

  return (
    <div className='chat-page-container'>
        <div className='chat-user-header'>
     <Link to='/chat' className='link ' style={{color:'white'}}><span className='goback'><i class="ri-arrow-left-line" ></i></span> </Link>   
             <span className='open-user-profile'>
                <img src={openUser.picture.medium}></img>
             </span>
             <div className='open-user-name'>
                 <span className='openuser-name'>{`${openUser.name.first} ${openUser.name.last}`}</span>
                 <span className='jobrole'>{openUser.jobRole}</span>
             </div>
        </div>
    </div>
  )
}

export default ChatPage
