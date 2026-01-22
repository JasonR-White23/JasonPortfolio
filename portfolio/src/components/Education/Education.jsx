import React from 'react'
import './Education.css'

const Education = () => {
  return (
    <>
      <div className="education-wrapper">

          <h1 className="education-title">
            My Education
            <hr/>
          </h1>

          <h3 className="education-content-title">
              Diplomas:
              <hr/>
          </h3>

          <div className="education-content">
            <ul>
              <li className="program">
                High School Diploma
                <p>
                  Sunrise School - 2017
                </p>
              </li>
              <li className="program">
                Full Stack Web Development
                <p>
                  Robertson College - 2023
                </p>
                <div className="course-list-container">
                  <ul className="list">
                    <li className="course">
                      ~ Introduction to IT
                    </li>
                    <li className="course">
                      ~ Web Development Basics
                    </li>
                    <li className="course">
                      ~ Structured Programming in Java
                    </li>
                    <li className="course">
                      ~ Object Oriented Programming
                    </li>
                    <li className="course">
                      ~ Inheritance and Pilymorphism
                    </li>
                    <li className="course">
                      ~ Relational Databases and SQL
                    </li>
                  </ul>
                  <ul className="list">
                    <li className="course">
                      ~ Version Control with Git and GitHub
                    </li>
                    <li className="course">
                      ~ C# Programming
                    </li>
                    <li className="course">
                      ~ .NET Core 2.0
                    </li>
                    <li className="course">
                      ~ ASP .NET Core
                    </li>
                    <li className="course">
                      ~ Front End Framework
                    </li>
                    <li className="course">
                      ~ Software Testing and Quality Assurance
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>

            <h3 className="education-content-title">
              Cerificates:
              <hr/>
            </h3>

            
          <div className="education-content">
            <ul>
              <li>
                <a href='/assets/images/certificates/IntroductiontoHTML.png' target='_blank'>
                  Introduction to HTML
                </a>
                <p>
                  sololearn - 2023
                </p>
              </li>
              <li>
                <a href='/assets/images/certificates/IntroductiontoSQL.png' target='_blank'>
                  Introduction to SQL
                </a>
                <p>
                  sololearn - 2023
                </p>
              </li>
              <li>
                <a href='/assets/images/certificates/SQLIntermediate.png' target='_blank'>
                  SQL Intermediate 
                </a>
                <p>
                  sololearn - 2023
                </p>
              </li>
              <li>
                <a href='/assets/images/certificates/ResponsiveWebDesign.png' target='_blank'>
                  Responsive Web Design
                </a>
                <p>
                  freeCodeCamp - 2024
                </p>
              </li>
              <li>
                <a href='/assets/images/certificates/IntroductiontoJava.jpg' target='_blank'>
                  Introduction to Java
                </a>
                <p>
                  sololearn - 2025
                </p>
              </li>
              <li>
                <a href='/assets/images/certificates/IntroductionToC.jpg' target='_blank'>
                  Introduction to C#
                </a>
                <p>
                  sololearn - 2026
                </p>
              </li>
            </ul>
          </div>
      </div>
    </>
  )
}

export default Education