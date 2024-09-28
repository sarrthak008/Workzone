import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import './Search.css'
import SearchBar from '../../Components/SearchBar/SearchBar'
import Tagline from '../../Components/TagLine/Tagline'

const Search = () => {
  return (
    <div>
        <Sidebar/>
        <div className='main-container'>
                  <SearchBar/>
                  <Tagline tagline={'your feed'}/>
        </div>
    </div>
  )
}

export default Search
