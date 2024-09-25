import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import Home from './Views/Home/Home';
import 'remixicon/fonts/remixicon.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
         <Route path='/' element={<Home/>}/>
      </Routes>
  </BrowserRouter>
);

