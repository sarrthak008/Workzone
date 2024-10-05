import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import "./Home.css"
import IMG2 from "./boyjobpp1.png"
import Footer from '../../Components/Footer/Footer'

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
        <div className='serch-design'>
             <div className='design-txt'>se<i className="ri-search-eye-fill"></i>rch</div>
             <span className='basic-info-text serhg-brif-info'>Unlock your career potential with WorkZone, your one-stop destination for finding the perfect job! Our platform simplifies the job search process, offering a user-friendly experience to help you discover opportunities that match your skills and interests.</span>
        </div>
        <div className='ind-info'>
           <h4 className='profile-heading supports'>Tech industry </h4>
           <div className='indstry-container'>
               <div className='conpany'>
                 <span><i class="ri-google-fill"></i> </span>
                 <span><i class="ri-facebook-fill"></i></span>
                 <span><i class="ri-discord-fill"></i></span>
                 <span><i class="ri-windows-fill"></i></span>
                 <span><i class="ri-firefox-fill"></i></span>
                 <span><i class="ri-app-store-fill"></i></span>
                 <span><i class="ri-google-fill"></i> </span>
                 <span><i class="ri-facebook-fill"></i></span>
                 <span><i class="ri-discord-fill"></i></span>
                 <span><i class="ri-windows-fill"></i></span>
                 <span><i class="ri-firefox-fill"></i></span>
                 <span><i class="ri-app-store-fill"></i></span>
                 <span><i class="ri-google-fill"></i> </span>
                 <span><i class="ri-facebook-fill"></i></span>
                 <span><i class="ri-discord-fill"></i></span>
                 <span><i class="ri-windows-fill"></i></span>
                 <span><i class="ri-firefox-fill"></i></span>
                 <span><i class="ri-app-store-fill"></i></span>
                 <span><i class="ri-google-fill"></i> </span>
                 <span><i class="ri-facebook-fill"></i></span>
                 <span><i class="ri-discord-fill"></i></span>
                 <span><i class="ri-windows-fill"></i></span>
                 <span><i class="ri-firefox-fill"></i></span>
                 <span><i class="ri-app-store-fill"></i></span>
              </div>
            <div className='hide'></div>
            <div className='hide2'></div>
           </div>
        </div>
      <Footer/>
    </div>
  )
}

export default Home
