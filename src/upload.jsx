import React from 'react'
import './upload.css'
function Upload() {
  return (
    <div className='upload'>
        <div className="upload_body">
        <div className='form'>
            <label htmlFor="file">⬆️ Choose a file</label>
            <input type="file" name="file" className="file" id="file" />
            <label>Title</label>
            <textarea className="title" placeholder="Enter a title..." name="title"></textarea>
            <button type="submit" className="btn">Upload</button>
        </div>
    </div> 
    </div>
  )
}

export default Upload