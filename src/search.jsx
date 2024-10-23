import React from 'react'
import './search.css'
function Search() {
  return (
    <div className='search'>    
    <div className="search-container">
    <input type="text" className="search-input" placeholder="Search" />
    <button className="search-button">🔍</button>
    </div>
    </div>
  )
}

export default Search