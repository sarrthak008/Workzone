import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import "./Home.css"
import IMG1 from "./boyjobpp.png"
import IMG2 from "./boyjobpp1.png"
import IMG3 from "./ladyjobpp.png"
import IMG4 from "./Dr.png"
import connectImg from "./connect-peoples.png"

const Home = () => {
  return (
    <div>
        <Navbar/>
        <div className='home-info-container'>
          <h2 className='main-heading'>find your <span className='curv-text'>  dream </span> job.</h2>
          <button className='animated-btn serch-btn'>lets' start <i class="ri-arrow-right-up-line"></i></button>
        </div>
        <div className='profile-container'>
            <div className='profile-left'>
               <img src={IMG2}></img>
               <span className='profile-inner-info'><i class="ri-notification-2-fill "></i></span>
            </div>
            <div className='profile-right'>
                <h4 className='profile-heading'>How its work<i className="ri-question-mark"></i></h4>
                <span className='basic-info-text'>At WorkZone, we bridge the gap between job seekers and employers ,<br></br> making the hiring process seamless and efficient</span>
                <div className='features'><span>key features</span></div>
                <div className='features-container'>
                   <span><i class="ri-search-line"></i></span>
                   <span><i class="ri-flashlight-fill"></i> </span>
                   <span><i class="ri-lock-fill"></i></span>
                   <span><i class="ri-group-fill"></i></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home
