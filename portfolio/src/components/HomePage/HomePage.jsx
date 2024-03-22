import React from 'react'
import Navbar from '../Navbar/Navbar'
import AboutMe from '../AboutMe/AboutMe'
import Education from '../Education/Education'
import Skills from '../Skills/Skills'
import ContactMe from '../ContactMe/ContactMe'


const HomePage = () => {
  return (
    <>
      <Navbar />
      <AboutMe />
      <Education />
      <Skills />
      <ContactMe />
    </>
  )
}

export default HomePage