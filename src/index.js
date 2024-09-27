import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import Home from './Views/Home/Home';
import 'remixicon/fonts/remixicon.css'
import Signup from './Views/Signup/Signup';
import Login from './Views/Login/Login';
import Search from './Views/Search/Search';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/signup' element={<Signup/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/search' element={<Search/>}/>
      </Routes>
  </BrowserRouter>
);

