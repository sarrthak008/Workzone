import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './ChatPage.css'
import axios from 'axios'
import { Sender ,Reciever } from '../../Components/ChatType/ChatType'


const ChatPage = () => {


    let   MY_CIRCLE = JSON.parse(localStorage.getItem('MY_CIRCLE'))
    const {uuid} =useParams()
    let openUser =  MY_CIRCLE.find((user)=>{
         return(user.login.uuid === uuid)
    })

    const [msg ,setMsg] =useState('')
    const [chat ,setChat] =useState([])
    const [chatState, setchatState] = useState(`${openUser.jobRole}`)

    const  addMessage = (msg,type) =>{
        setChat(prevMsg=>[...prevMsg,{msg,type}])
        setMsg('')
    }


    const answer = async () => {
        setchatState('typing..')
        let QUE = msg.replace(" ", "_")
        let responce = "i cant any thing about that."
        let URL = `https://telesevapi.vercel.app/gpt-web?question=${QUE}`;
        try {
          let res = await axios.get(URL)
          if (res) { setchatState(`${openUser.jobRole}`) }
          responce = res.data.message
          console.log(responce)
          console.log(chat)
        } catch (error) {
          console.log(error)
        }
    
         addMessage(responce, "reciever")
    }

  return (
    <div className='chat-page-container'>
        <div className='chat-user-header'>
        <Link to='/chat' className='link ' style={{color:'white'}}><span className='goback'><i class="ri-arrow-left-line" ></i></span> </Link>   
             <span className='open-user-profile'>
                <img src={openUser.picture.medium}></img>
             </span>
             <div className='open-user-name'>
                 <span className='openuser-name'>{`${openUser.name.first} ${openUser.name.last}`}</span>
                 <span className='jobrole'>{chatState}</span>
             </div>
        </div>
        <div className='chat-screen'>
             {chat.map((msg,index)=>(
                <>
                 {msg.type==="user" ? <Sender text={msg.msg} key={index}/> : <Reciever text={msg.msg} key={index}/>}
                </>
               ))}
        </div>

        <div className='input-box-container'>
             <input className='msg-input' placeholder='enter your message' value={msg} onChange={(e)=>{
                setMsg(e.target.value)
             }}></input>
             <button className='btn1 send-btn' disabled={!msg.trim()} onClick={() =>{
                addMessage(msg, "user")
                answer()
             }}><i class="ri-send-plane-fill"></i></button>
        </div>
    </div>
  )
}

export default ChatPage
