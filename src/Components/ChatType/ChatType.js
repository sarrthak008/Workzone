import React from 'react'
import './ChatType.css'


const Reciever = ({text}) => {
  return (
    <div>
      <span className='receiver-msg'>{text}</span>
    </div>
  )
}


const Sender = ({text}) => {
  return (
    <div className='msg-container'>
      <span className='sender-msg'>{text}</span>
    </div>
  )
}

export {Sender ,Reciever}

