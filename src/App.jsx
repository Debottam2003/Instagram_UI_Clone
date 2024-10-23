import React from 'react'
import './App.css'
import Side from './side'
import { Outlet } from 'react-router-dom';
function App() {

  return (
    <>
    <div>
      <Side />
      <Outlet />
    </div>
    </>
  )
}

export default App
