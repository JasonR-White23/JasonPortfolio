import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <>
        <div className="about-wrapper">
          <h1 className="about-title">
            About Me
          </h1>
          <hr/>

          <div className="about-content">
            <p>
              My name is Jason White, I am an only child born in a small town in Alberta, Canada.
            </p>
            <p>
              I spend majority of my free time expanding my knowledge on many different topics, like math and
              programming. With the remainder of my spare time I spend time with my beautiful fiance and
              our two wonderful dogs, play video games, and read books. My favorite author would have to be 
              Stephen King, I appreciate how he can write in so many different perspectives, intertwining each 
              perspective with each other perfectly. My favorite book from Stephen King is "<a href='https://en.wikipedia.org/wiki/The_Institute_(King_novel)'>The Institute</a>". 
            </p> 
            <blockquote>
              "The scariest moment is always just before you start" - Stephen King
            </blockquote>
          </div>
        </div>


    </>
  )
}

export default AboutMe