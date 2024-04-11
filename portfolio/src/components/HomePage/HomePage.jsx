import React from 'react'
import './HomePage.css'
import AboutMe from '../AboutMe/AboutMe'
import Education from '../Education/Education'
import Skills from '../Skills/Skills'
import ContactMe from '../ContactMe/ContactMe'

const HomePage = () => {
  return (
    <>
      <h1 className='portfolio-title'>
        Welcome to my Portfolio!
        <hr />
      </h1>
      <AboutMe />
      <Education />
      <Skills />
      <ContactMe />
    </>
  )
}

export default HomePage