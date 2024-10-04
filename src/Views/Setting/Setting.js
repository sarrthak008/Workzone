import React, { useState } from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Userprofile from '../../Components/UserProfile/Userprofile'
import Tagline from '../../Components/TagLine/Tagline'
import "./Setting.css"
import { PasswordPopUP,LinksPopup ,FeedPopUp} from '../../Components/Popup/Popup'


const Setting = () => {

  const [passPpup,setPassPopup] = useState(false)
  const [linkopopup,setLinkpopup] = useState(false)
  const [feedpopup,setFeedPopUp] = useState(false)

  return (
    <div>
      <Sidebar/>
        <div className='Profile-container'>
            <Userprofile/>
            <Tagline tagline ={'app settings'}/>
            <div className='setting-body'>
                  <div className='setting-main-body'>
                     <span onClick={()=>{
                       setPassPopup(true)
                     }}>update password <i class="ri-arrow-right-s-line"></i></span>
                  </div>
                  <div className='setting-main-body'>
                     <span onClick={()=>{
                       setLinkpopup(true)
                     }}>link accouts <i class="ri-arrow-right-s-line"></i></span>
                  </div>

                  <div className='setting-main-body'>
                     <span onClick={()=>{
                      setFeedPopUp(true)
                     }}>feed results <i class="ri-arrow-right-s-line"></i></span>
                  </div>

                  <div className='setting-main-body'>
                     <span>log out <i class="ri-arrow-right-s-line"></i></span>
                  </div>

                  
                  <div className='setting-main-body del'>
                     <span>delete account <i class="ri-arrow-right-s-line"></i></span>
                  </div>
            </div>
        </div>
    {passPpup ? <PasswordPopUP setPassPopup={setPassPopup}/> : null}
    {linkopopup ? <LinksPopup LinksPopuppup={setLinkpopup}/> : null}
    {feedpopup ? <FeedPopUp feedpopup={setFeedPopUp}/> : null}
    </div>
  )
}

export default Setting
