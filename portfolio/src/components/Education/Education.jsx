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
              <li>
                Full Stack Web Development
                <p>
                  Robertson College - 2023
                </p>
              </li>
              <li>
                High School Diploma
                <p>
                  Sunrise School - 2017
                </p>
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
            </ul>
          </div>
      </div>
    </>
  )
}

export default Education