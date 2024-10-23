import React from 'react';
import './side.css';
import {Link} from 'react-router-dom';
function Side() {
  return (
    <div className='side'>
        <h1>Instagram</h1>
        <nav className='navbar'>
           <Link to='/' className='h3'>🏠 Home</Link>
           <Link to='/profile' className='h3'>👨‍🦰 Profile</Link>
           <Link to='/reels' className='h3'>📽️ Reels</Link>
           <Link to='/search' className='h3'>🔍 Search</Link>
           <Link to='/upload' className='h3'>➕ Upload</Link>
        </nav>
    </div>
  )
}

export default Side