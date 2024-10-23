import React from 'react'
import './reels.css'
function Reels() {
  return (
    <div className='reels'>
      <div className='v'>
      <video controls >
        <source src='https://videos.pexels.com/video-files/7297870/7297870-sd_360_640_30fps.mp4' type="video/mp4" />
      </video >
      <div className='logo'><div className='logo1'></div></div>
      </div>
      <div className='v'>
      <video controls >
        <source src='https://videos.pexels.com/video-files/6550972/6550972-hd_1080_1920_25fps.mp4' type="video/mp4" />
      </video >
      <div className='logo'><div className='logo2'></div></div>
      </div>
      <div className='v'>
      <video controls>
        <source src='https://videos.pexels.com/video-files/5896379/5896379-sd_360_640_24fps.mp4' type="video/mp4" />
      </video >
      <div className='logo'><div className='logo3'></div></div>
      </div>
      <div className='v'>
      <video controls>
        <source src='https://videos.pexels.com/video-files/4019911/4019911-hd_1080_1920_24fps.mp4' type="video/mp4" />
      </video >
      <div className='logo'><div className='logo4'></div></div>
      </div>
      <div className='v'>
      <video controls>
        <source src='https://videos.pexels.com/video-files/3833491/3833491-sd_360_640_30fps.mp4' type="video/mp4" />
      </video >
      <div className='logo'><div className='logo5'></div></div>
      </div>
      <div className='v'>
      <video controls>
        <source src='https://videos.pexels.com/video-files/6853337/6853337-sd_506_960_25fps.mp4' type="video/mp4" />
      </video >
      <div className='logo'><div className='logo6'></div></div>
      </div>
    </div>
  )
}

export default Reels