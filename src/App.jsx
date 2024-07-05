import React from 'react';
import { NavBar } from './components/NavBar.jsx';
import {Route, Routes} from "react-router-dom";
import { Home } from './components/Home.jsx';
import { About } from './components/About.jsx';
import { Projects } from './components/Projects.jsx';
import { Contacts } from './components/Contacts.jsx';
import { Footer } from './components/Footer.jsx';
export default function App() {
  return (
    <div className=''>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact" element={<Contacts/>} />
        </Routes>
    </div>

  )
}