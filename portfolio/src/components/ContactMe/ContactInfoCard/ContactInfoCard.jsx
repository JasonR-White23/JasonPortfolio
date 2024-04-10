import React from 'react'
import './ContactInfoCard.css'

const ContactInfoCard = ({ iconUrl, text }) => {
  return (
    <div className="contact-details-card">
        <div className="icon">
            <img src={iconUrl} alt={text} ></img>
        </div>

        <a href={text}>
            {text}
        </a>
    </div>
  )
}

export default ContactInfoCard