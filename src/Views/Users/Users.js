import React, { useEffect, useState } from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Tagline from '../../Components/TagLine/Tagline'
import './Users.css'
import ChatUserCard from '../../Components/ChatUserCard/ChatUserCard'
import axios from 'axios'
import toast from 'react-hot-toast'

const Users = () => {

  useEffect(()=>{
    SearchUsers()
  },[])


  const [users,setUser] =useState([])

  const SearchUsers =  async () =>{
    try {
      const USER_URL = `https://randomuser.me/api/?results=30&nat=IN`;
      let tid= toast.loading('searching your query')
      const userResponse = await axios.request(USER_URL);
      if(userResponse){
        toast.dismiss(tid)
      }
      const findedusers = userResponse.data.results;
      setUser(findedusers)
  
     } catch (error) {
       console.log(error)
     }
   
  }


  return (
    <div>
        <Sidebar/>
        <div className='users-container'>
             <Tagline tagline={'create your circle'}/>
             <div className='main-user-container'>
                 {users.map((user ,index)=>(
                    <ChatUserCard user={user} key={index}/>
                 ))}
             </div>
        </div>
    </div>
  )
}

export default Users
