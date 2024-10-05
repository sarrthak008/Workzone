import React from 'react'
import "./Chatprofile.css"
import { Link } from 'react-router-dom'


const Chatprofile = ({ user }) => {
    return (

        <div className='chat-profile-container'>

            <div className=' chat-user-profile chats-body'>
                <Link to={`/chatpage/${user.login.uuid}`} className='link LINK'>
                    <span className='profile-pic'>
                        <img src={user.picture.medium} alt='USER_PROFLE_PIC'></img>
                    </span>
                    <div className='user-name-emai-cont'>
                        <span className='feed-card-username'>{`${user.name.first} ${user.name.last}`}</span>
                        <span className='feed-card-email'>{user.jobRole}</span>
                    </div>
                </Link>
            </div>

        </div>

    )
}

export default Chatprofile
