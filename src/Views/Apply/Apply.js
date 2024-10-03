import React from 'react'
import { useParams } from 'react-router-dom'

const Apply = () => {
  const {id} = useParams()
  const FEED  = JSON.parse(localStorage.getItem("FEED"))
  let searchedjob = FEED.find((JOB)=>{
    return(JOB.id===id)
  })
  return (
    <div>
       {searchedjob.c_name}
    </div>
  )
}

export default Apply
