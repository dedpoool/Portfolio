import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './Components/Home/Home.jsx'
import Header from './Components/Header/Header.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Options from './Components/Home/Options.jsx'
import Solutions from './Components/Solutions/Solutions.jsx'
import Routing from './Components/Routing.jsx'
import About from './Components/About/About.jsx'

import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'



// Route Method 1
// const routs = createBrowserRouter([
//   {
//   path:'/',
//   element:<Routing/>,
//   children:[
//     {
//       path:'/',
//       element:<Home/>
//     },
//     {
//       path:'/Sol',
//       element:<Solutions/>
//     }
//   ]
// }
// ])

// Route Method 2
const routs = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<Routing/>}>
    <Route path='' element={<Home/>}/>
    <Route path='/Sol' element={<Solutions/>} />
    <Route path='/About' element={<About/>} />
  </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routs}/> 
  </React.StrictMode>,
)
