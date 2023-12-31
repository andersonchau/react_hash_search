import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MaintainHash from './pages/MaintainHash.tsx';
import Home from './pages/Home.tsx';
import Authentication from './pages/Authentication';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />}>
        <Route path="authentication" element={<Authentication />} />
        <Route path="hashMain" element={<MaintainHash />} />
        <Route path="home" element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  </React.StrictMode>
  
)
