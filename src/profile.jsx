import React from 'react'
import './profile.css'
function Profile() {
  return (
    <div className='profile'>
        <div className="container">
        <div className="profile-header">
            <div className="profile-picture">
            </div>
            <div className="profile-info">
                <h1>@debottam2003</h1>
                <p>Posts: 120</p>
                <p>Followers: 1.2k</p>
                <p>Following: 300</p>
                <button>Follow</button>
            </div>
        </div>
        <div className="bio">
            <p>I am Debottam Kar, Be the best version of yourself.</p>
        </div>
        <div className="grid">
            <div className="grid-item">
                <img src="https://images.pexels.com/photos/1007427/pexels-photo-1007427.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Post 1" />
                </div>
            <div className="grid-item">
                <img src="https://images.pexels.com/photos/2815093/pexels-photo-2815093.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Post 2" />
                </div>
            <div className="grid-item">
                <img src="https://images.pexels.com/photos/2499271/pexels-photo-2499271.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Post 3" />
                </div>
            <div className="grid-item">
                <img src="https://images.pexels.com/photos/1694663/pexels-photo-1694663.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Post 4" />
                </div>
            <div className="grid-item">
                <img src="https://images.pexels.com/photos/2041556/pexels-photo-2041556.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Post 5" />
                </div>
            <div className="grid-item">
                <img src="https://images.pexels.com/photos/3284268/pexels-photo-3284268.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Post 6" />
                </div>
            <div className="grid-item">
                <img src="https://images.pexels.com/photos/2097616/pexels-photo-2097616.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Post 7" />
                </div>
                <div className="grid-item">
            <img src="https://images.pexels.com/photos/64271/queen-of-liberty-statue-of-liberty-new-york-liberty-statue-64271.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Post 8" />
                </div>
            <div className="grid-item">
                <img src="https://images.pexels.com/photos/3599553/pexels-photo-3599553.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Post 9" />
                </div>
        </div>
    </div>
    </div>
  )
}

export default Profile