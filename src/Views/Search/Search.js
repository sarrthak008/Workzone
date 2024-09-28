import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import './Search.css'
import SearchBar from '../../Components/SearchBar/SearchBar'

const Search = () => {
  return (
    <div>
        <Sidebar/>
        <div className='main-container'>
                  <SearchBar/>
        </div>
    </div>
  )
}

export default Search
