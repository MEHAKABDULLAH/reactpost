import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import PostReady from '../pages/PostReady'


const AppRouter = () => {
    return (
      <div>
        <BrowserRouter>
         <Routes>
          
          <Route path='/' element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/postready' element={<PostReady/>}/>


  
  
         </Routes>
         </BrowserRouter>
      
        
      </div>
    )
  }
  
  export default AppRouter