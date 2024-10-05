import React from 'react'
import Chatprofile from '../../Components/Chatprofile/Chatprofile'
import Sidebar from '../../Components/Sidebar/Sidebar'
import './Chat.css'
import Tagline from '../../Components/TagLine/Tagline'

const Chat = () => {

   const MY_CIRCLE =  JSON.parse(localStorage.getItem("MY_CIRCLE")) || []

  return (
    <div>
        <Sidebar/>
         <div className='chats-container'>
            <Tagline  tagline={'my circle'}/>
           {MY_CIRCLE.map((user,index)=>(
             <Chatprofile  user={user} key={index}/>
           ))}
         </div>
    </div>
  )
}

export default Chat
