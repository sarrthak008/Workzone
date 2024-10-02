import React, { useEffect, useState } from 'react'
import './SearchBar.css'
import {jobNames} from "../../Config/serchData"

const SearchBar = ({setSearchVal}) => {
   let i = 0
   const [placeholder,setplaceholder] =useState('eg. developer')
   const [index,setIndex] = useState(0)
   const [search,setSearch] =useState()


  useEffect(()=>{
        let Intervalret = setInterval(()=>{
            if(index<jobNames.length){
               setplaceholder(`eg. ${jobNames[index]}`)
               setIndex(prev => prev + 1)
            }else{
              clearInterval(Intervalret)
            }
        },3000)

    },[index]) 
   
   
  return (
    <div className='searchbar-container'>
       <input type='text' className='serch-box' placeholder="eg. developer" value={search} onChange={(e)=>{setSearch(e.target.value)}}></input>
       <button className='btn1 seach-btn' onClick={()=>{
         setSearchVal(search)
       }}>search</button>
    </div>
  )
}

export default SearchBar
