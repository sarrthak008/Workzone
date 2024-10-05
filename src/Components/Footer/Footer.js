import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer-container'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#b091ff" fill-opacity="1" d="M0,128L60,154.7C120,181,240,235,360,213.3C480,192,600,96,720,96C840,96,960,192,1080,197.3C1200,203,1320,117,1380,74.7L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
        <div className='main-footer'>
            <div className='brand-name'>
                <span className='brand-info'>workZone</span>
                <span className='tag'>find your dream job in one click</span>
            </div>

            <div className='brand-name'>
                <span className='brand-info'>Contact us</span>
                <span className='tag'>if you have more and idea or any query just do ! <a href='mailto:sarthaknavale40@gmail.com'>hello@workzone.com</a></span>
            </div>

            <div className='brand-name'>
                <span className='brand-info'>Social handels</span>
                <span className='tag'>
                     <span><a href='https://www.instagram.com/workzoneoffice/'><i class="ri-instagram-fill"></i></a></span>
                     <span><a href='https://www.facebook.com/Workzone/'><i class="ri-facebook-box-fill"></i></a></span>
                     <span><a href='https://x.com/i/flow/login?redirect_after_login=%2Fworkzone'><i class="ri-twitter-x-fill"></i></a></span>
                </span>
            </div>

            <div  className='brand-name'>
                <span className='animation-span'></span>
            </div>

        </div>
    </div>
  )
}

export default Footer
