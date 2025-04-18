import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Signup } from './pages/Signup'
import {Signin} from './pages/Signin'
import { SendMoney } from './pages/SendMoney'
import { Dashboard } from './pages/Dashboard'
import { Startingpage } from './pages/StartingPage'
// import './App.css'


function App() {
  

  return (
  <>
  
    <BrowserRouter>
    <Routes> 
      <Route path='/' element={<Signup></Signup>}></Route>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/send' element={<SendMoney/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  
  )
}

export default App
