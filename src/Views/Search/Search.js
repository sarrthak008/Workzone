import React, { useState } from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import './Search.css'
import SearchBar from '../../Components/SearchBar/SearchBar'
import Tagline from '../../Components/TagLine/Tagline'
import Feedloder from '../../Components/FeedLoder/Feedloder'
const Search = () => {
  
   let StoreSearchVal = JSON.parse(localStorage.getItem('LOGINUSER'))
   const [searchVal , setSearchVal] = useState (StoreSearchVal.jobRole);

  return (
    <div>
        <Sidebar/>
        <div className='main-container'>
                  <SearchBar  setSearchVal={setSearchVal}/>
                  <Tagline tagline={'your feed'}/>
                  <Feedloder searchVal={searchVal} setSearchVal={setSearchVal}/>
                  {console.log(searchVal)}
        </div>
    </div>
  )
}

export default Search
