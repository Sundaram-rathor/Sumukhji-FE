import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'remixicon/fonts/remixicon.css'
import Signup from './pages/Signup';
import Login from './pages/Login'
import { RecoilRoot } from 'recoil';

import Admin from './pages/Admin';
import process from 'process';
window.process = process;

import Home from './pages/Home'
import CartPage from './pages/CartPage';
import FinalProductPage from './pages/FinalProductPage';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import { GoogleOAuthProvider } from '@react-oauth/google';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <div className='h-auto w-100 font-[roboto]'>
      <RecoilRoot>
      <GoogleOAuthProvider clientId='1860517147-ccon33i8ck5dh9jvq6ge157ig38kv8hh.apps.googleusercontent.com'>
          <BrowserRouter>
          
          <Routes>
            
              <Route path='/' element={<Home/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/signup' element={<Signup/>}/>
              <Route path='/cart' element={<CartPage/>}/>
              <Route path='/admin' element={<Admin/>}/>
              
              <Route path='/terms&conditions' element={<Terms/>}/>
              <Route path='/privacypolicy' element={<Privacy/>}/>
              <Route path='/contactus' element={<ContactUs/>}/>
              <Route path='/product/:id' element={<FinalProductPage/>}/>


          </Routes>
          </BrowserRouter>
      </GoogleOAuthProvider>
      </RecoilRoot>
    </div>
  )
}

export default App