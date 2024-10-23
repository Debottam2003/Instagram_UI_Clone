// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Home from './home.jsx'
import Profile from './profile.jsx'
import Reels from './reels.jsx'
import Search from './search.jsx'
import Upload from './upload.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css'

const router = createBrowserRouter([
  
  {path:'/',element: <App />,children:[
    {path:'',element: <Home />},
    {path:'/profile',element: <Profile />},
    {path:'/reels',element: <Reels />},
    {path:'/search',element: <Search />},
    {path:'/upload',element: <Upload />}
  ]}

]);
createRoot(document.getElementById('root')).render(
<RouterProvider router={router}></RouterProvider>
)
