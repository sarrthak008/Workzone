import React from 'react'
import "./Profile.css"
import Sidebar from '../../Components/Sidebar/Sidebar'
import Tagline from '../../Components/TagLine/Tagline'
import Userprofile from '../../Components/UserProfile/Userprofile'
import AppliedJobCard from '../../Components/AppliedJobCard/AppliedJobCard'


const Profile = () => {
 
 const APPLIED_JOBS = JSON.parse(localStorage.getItem("APPLIED_JOBS")) || []

  return (
    <>
    <Sidebar/>
    <div className='Profile-container' >
            <Userprofile/>
            <Tagline tagline={'my apply'}/>
          <div className='status-indicator'>
             <span><i class="ri-circle-fill" style={{color:'yellow'}}></i>pending</span>

             <span><i class="ri-circle-fill" style={{color:'green'}}></i>accept</span>

             <span><i class="ri-circle-fill" style={{color:'red'}}></i>reject</span>
          </div>
          <div className='applied-job-container'>
              {APPLIED_JOBS.length==0? null: APPLIED_JOBS.map((job)=>(
                 <AppliedJobCard job={job}/>
              ))}
          </div>
    </div>
    </>
  )
}

export default Profile
