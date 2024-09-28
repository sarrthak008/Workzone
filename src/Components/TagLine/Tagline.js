import React from 'react'
import "./Tagline.css"

const Tagline = ({tagline}) => {
  return (
    <div className='tag-line'>
       <span>{tagline}</span>
    </div>
  )
}

export default Tagline
