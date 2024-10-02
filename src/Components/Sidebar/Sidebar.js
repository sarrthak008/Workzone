import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'



const Sidebar = () => {



  return (
    <div className='sidebar-container'>
      <ul className='icon-list'>
        <Link  to="/users" className='link'><li className='sidebar-iteams'><i class="ri-group-line"></i></li></Link>
        <Link to="/chat" className='link'><li className='sidebar-iteams'><i class="ri-chat-3-line"></i></li></Link>
        <Link to="/search" className='link'><li className='sidebar-iteams'><i className="ri-search-eye-line"></i></li></Link>
        <Link to="/profile" className='link'> <li className='sidebar-iteams'><i className="ri-account-circle-line"></i></li> </Link>
        <Link to="/setting" className='link'><li className='sidebar-iteams'><i className="ri-settings-5-line"></i></li></Link>
      </ul>
    </div>
  )
}

export default Sidebar
