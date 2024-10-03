import React from 'react'
import { Link, useParams } from 'react-router-dom'
import './Apply.css'    
import BGIMG from './bg-logo.png'
import TagLine from '../../Components/TagLine/Tagline'

const Apply = () => {
  const {id} = useParams()
  const FEED  = JSON.parse(localStorage.getItem("FEED"))
  let info = FEED.find((JOB)=>{
    return(JOB.id===id)
  })

 const addppliedJob = () =>{
  let  APPLIED_JOBS = JSON.parse(localStorage.getItem('APPLIED_JOBS')) || []
   APPLIED_JOBS.push(info)
   localStorage.setItem("APPLIED_JOBS",JSON.stringify(APPLIED_JOBS))
 }

  return (
    <>
    <Link to='/search' className='link'> <span className='back-btn'><i class="ri-arrow-left-line"></i></span> </Link>
    <div className='job-info-container'>
        <div className='main-job-info-container'>
             <div className='feed-user-info '>
             <span className='profile-pic'>
                <img src={info.profile_pic} alt='USER_PROFLE_PIC'></img>
             </span>
             <div className='user-name-emai-cont'>
                <span className='feed-card-username'>{`${info.first_name} ${info.last_name}`}</span>
                <span className='feed-card-email'>{info.email}</span>
             </div>
              </div>
            <span>#{info.tag}</span>
            <div><h2 className='company-info-apply'>{info.c_name} are hiring...</h2></div>
            <TagLine tagline={' all information'}/>
            <div className='apply-job-desc'><p>{info.desc}</p></div>
            <div className='job-other-info-cont'>
               <span className='salary-font'>average salary up to {info.min_sal}  to {info.max_sal} $ </span>
               <span className='salary-font'>work location {info.location}</span>
               <span className='salary-font'>add date {info.post_at.split("T")[0]}</span>
            </div>
            <button className='btn1 apply-btn aply-info-btn'
              onClick={()=>{
                 addppliedJob()
              }}
            >apply now</button>
            <span className='gray'>please read all information before apply</span>
        </div>
    </div>
    </>
  )
}

export default Apply
