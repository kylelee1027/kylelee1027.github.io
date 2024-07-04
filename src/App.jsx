import React from 'react';
import { NavBar } from './components/NavBar.jsx';
import {Route, Routes} from "react-router-dom";
import { Home } from './components/Home.jsx';
import { Footer } from './components/Footer.jsx';
export default function App() {
  return (
    <>
    <div className='h-full border-x-8'>
      <NavBar/>
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </div>
    </div>
    <Footer/>

    </>

  )
}