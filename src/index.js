import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import Home from './Views/Home/Home';
import 'remixicon/fonts/remixicon.css'
import Signup from './Views/Signup/Signup';
import Login from './Views/Login/Login';
import Search from './Views/Search/Search';
import { Toaster } from 'react-hot-toast';
import Profile from './Views/Profile/Profile';
import Setting from './Views/Setting/Setting';
import Apply from './Views/Apply/Apply';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Toaster/>
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/signup' element={<Signup/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/search' element={<Search/>}/>
         <Route path='/profile' element={<Profile/>}/>
         <Route path='/setting' element={<Setting/>}/>
         <Route path='/apply/:id' element={<Apply/>}/>
      </Routes> 
  </BrowserRouter>
);

