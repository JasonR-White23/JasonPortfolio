import React from 'react'
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage'
import AboutMe from './components/AboutMe/AboutMe';
import Education from './components/Education/Education';
import Navbar from './components/Navbar/Navbar';
import Skills from './components/Skills/Skills';
import ContactMe from './components/ContactMe/ContactMe';
import './App.css';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contactme" element={<ContactMe />} />
      </Routes>
    </>
  )
}

export default App
