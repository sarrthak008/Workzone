import React from 'react'
import "./FeedCard.css"
import { COLORS } from '../../Config/Colors'

import IMG1 from "./assets/pic1.png"
import IMG2 from "./assets/pic2.png"
import IMG3 from "./assets/pic3.png"
import IMG4 from "./assets/pic4.png"
import IMG5 from "./assets/pic5.png"
import IMG6 from "./assets/pic6.png"
import IMG7 from "./assets/pic7.png"
import IMG8 from "./assets/pic8.png"
import IMG9 from "./assets/pic9.png"
import IMG10 from "./assets/pic10.png"

const IMGS = [IMG1,IMG2,IMG3,IMG4,IMG5,IMG6,IMG7,IMG8,IMG9,IMG10]




const FeedCard = ({info}) => {
  return (
    <div className='feed-card-body'>
         <div className='feed-user-info'>
             <span className='profile-pic'>
                <img src={info.profile_pic} alt='USER_PROFLE_PIC'></img>
             </span>
             <div className='user-name-emai-cont'>
                <span className='feed-card-username'>{`${info.first_name} ${info.last_name}`}</span>
                <span className='feed-card-email'>{info.email}</span>
             </div>
         </div>
        <span className='feed-card-email'>{info.title.split("(")[0]}</span>
        <div className='job-card-image-container'>
            <div className='image-job-card' style={{
              backgroundColor:`${COLORS[Math.floor(Math.random()*COLORS.length)]}`
            }}>
              <img src={`${IMGS[Math.floor(Math.random()*IMGS.length)]}`}></img>
            <div className='job-info-overlay'>
                <span className='company-info'>{info.c_name} , ARE HIRE..</span>
                <span className='card-sal-info'> get avg. salary {`${info.min_sal}-${info.max_sal} $`}</span>
            </div>
            </div>
        </div>
    </div> 
  )
}

export default FeedCard
