import React, { useState } from 'react'
import './Popup.css'
import toast from 'react-hot-toast'


const LOGINUSER = JSON.parse(localStorage.getItem('LOGINUSER')) || []
const {email,mobNumber,id,github_URL,linkdin_URL} = LOGINUSER

const ProfilePopUp = ({setpPopup}) => {
    
    const [useremail,setusremail] = useState(email)
    const [mobNum,setMobNum] = useState(mobNumber)
    const [imge ,setimge] = useState(null)

     const updateProfile = () =>{
         let USERS = JSON.parse(localStorage.getItem('USERS'))
          let findedUser = USERS.find((user)=>{
              return(user.id==id)
          })
           if(!(useremail.includes('@gmail.com'))){
               toast.error('please enter valid email')
           }else{
               findedUser.email = useremail
               LOGINUSER.email=useremail
               localStorage.setItem('LOGINUSER',JSON.stringify(LOGINUSER))
           }

           if(mobNum.length == 10){
            findedUser.mobNumber = mobNum
            LOGINUSER.mobNumber=mobNum
            localStorage.setItem('LOGINUSER',JSON.stringify(LOGINUSER))
            
           }else{
             toast.error('please enter valid mobile number')
           }
         USERS[id-1] = findedUser
         localStorage.setItem('USERS' , JSON.stringify(USERS))
    setpPopup(false)
    }

     const handleFile = (e)=>{
         let file = e.target.files[0]
         if(file){
         let obj = URL.createObjectURL(file)
         setimge(obj)
         localStorage.setItem("PROFILE_IMG",obj) 
      }
     }

  return (
    <div className='popup-body'>
        <div className='update-profile-container'>
             <input type='file' onChange={handleFile} accept="image/png, image/jpeg"></input>
             <input className='update-input' value={mobNum} onChange={(e)=>{setMobNum(e.target.value)}}></input>
             <input className='update-input' value={useremail} onChange={(e)=>{setusremail(e.target.value)}}></input>
             <button className='btn1 update-btn' onClick={()=>{updateProfile()}}>update</button>
           <span className='close-btn' onClick={()=>{
              setpPopup(false)
           }}><i class="ri-close-line"></i></span>  
        </div>
    </div>
  )
}



const PasswordPopUP  = ({setPassPopup})=>{

 
 const [newpass , setNewPass] = useState('') 
 const [oldpass,setOldPass] = useState('')

  const updatePass = ()=>{
       if(oldpass === LOGINUSER.password){
          if(newpass.length<5){
            toast.error('password length must be grater than 5')
          }else{
             let USERS = JSON.parse(localStorage.getItem('USERS'))
             let findedUser = USERS.find((user)=>{
                return(user.password==oldpass)
            })
            findedUser.password=newpass
            LOGINUSER.password=newpass
            localStorage.setItem('LOGINUSER',JSON.stringify(LOGINUSER))
            USERS[id-1] = findedUser
            localStorage.setItem('USERS' , JSON.stringify(USERS))
           setPassPopup(false)
          }
       }
  }

   return(
    <>
      <div className='popup-body'>
           <div className='update-profile-container pass-popup'>
            <input className='update-input' placeholder='enter your old password' type='password' value={oldpass} onChange={(e)=>{setOldPass(e.target.value)}}></input>
            <input className='update-input' placeholder='set a new password' value={newpass} onChange={(e)=>{setNewPass(e.target.value)}}></input>
            <button className='btn1 update-btn' onClick={()=>{
              updatePass()
            }}>update</button>
            
            <span className='gray'>next time login with new password</span>
   
           <span className='close-btn' onClick={()=>{
            setPassPopup(false)
           }}><i class="ri-close-line"></i></span> 
           </div>
      </div>
    </>
   )
}



const LinksPopup  = ({LinksPopuppup})=>{
 
     
   const [linkdinURL,setLInkdinURL] = useState(linkdin_URL)
   const [githubURL,steGithubURL]= useState(github_URL)

   const connectAC = () =>{
      if(linkdinURL.includes("https://www.linkedin.com/")){
        let USERS = JSON.parse(localStorage.getItem('USERS'))
        let findedUser = USERS.find((user)=>{
           return(user.id==id)
       })
       findedUser.linkdin_URL=linkdinURL
       LOGINUSER.linkdin_URL=linkdinURL
       localStorage.setItem('LOGINUSER',JSON.stringify(LOGINUSER))
       USERS[id-1] = findedUser
       localStorage.setItem('USERS' , JSON.stringify(USERS))
      }else{
        toast.error('please enter valid linkdin url')
      }

      if(githubURL.includes('https://github.com/')){
        let USERS = JSON.parse(localStorage.getItem('USERS'))
        let findedUser = USERS.find((user)=>{
           return(user.id==id)
       })
       findedUser.github_URL=githubURL
       LOGINUSER.github_URL=githubURL
       localStorage.setItem('LOGINUSER',JSON.stringify(LOGINUSER))
       USERS[id-1] = findedUser
       localStorage.setItem('USERS' , JSON.stringify(USERS))
      }
      LinksPopuppup(false)
   }
   
    return(
     <>
       <div className='popup-body'>
            <div className='update-profile-container pass-popup'>
             <input className='update-input' placeholder='enter your Github profile URL' value={githubURL} onChange={(e)=>{steGithubURL(e.target.value)}}></input>
             <input className='update-input' placeholder='enter your Linkdin profile URL' value={linkdinURL} onChange={(e)=>{setLInkdinURL(e.target.value)}}></input>
             <button className='btn1 update-btn' onClick={()=>{
              connectAC()
             }}>connect</button>
             
             <span className='gray'>connect your Linkdin & Github with workZone</span>
    
            <span className='close-btn' onClick={()=>{
             LinksPopuppup(false)
            }}><i class="ri-close-line"></i></span> 
            </div>
       </div>
     </>
    )
 }


const FeedPopUp = ({feedpopup}) =>{

   const [feednum ,setFeedNum] = useState(20)

  const setfeedSearchNumber = () =>{
    if(feednum<1 && feednum >21){
      toast.error('value must be betwwen 1 to 20')
    }else{
      localStorage.setItem('RES_NUM',feednum)
      toast.success('setting saved successfully')
      feedpopup(false)
    }
  }

   return(
   <>
    <div className='popup-body'>
    <div className='update-profile-container pass-popup'>
    <input className='update-input' placeholder='eg . 10 ,12' type='number' value={feednum} onChange={(e)=>{setFeedNum(e.target.value)}}></input>
             <button className='btn1 update-btn' onClick={()=>{ 
               setfeedSearchNumber()
             }}>set</button>
    <span className='gray'>set how many result shows in your feed .</span>
    <span className='close-btn' onClick={()=>{
      feedpopup(false)
    }}><i class="ri-close-line"></i></span>
    </div>
    </div>
   </>)
}

export  {ProfilePopUp ,PasswordPopUP,LinksPopup,FeedPopUp}
