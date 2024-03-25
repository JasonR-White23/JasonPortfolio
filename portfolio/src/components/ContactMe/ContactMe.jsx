import React from 'react'
import './ContactMe.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'

const ContactMe = () => {
  return (
    <>
        <div className="contact-wrapper">
            <section className="contact-container">
                <h3>
                    Contact Me
                </h3>
                <div className="contact-content">
                    <div style={{ flex: 1 }}>
                        <ContactInfoCard
                            iconUrl="/assets/images/email-icon.png"
                            text="jasonshane1998@gmail.com"
                        />
                        
                        <ContactInfoCard
                            iconUrl="/assets/images/linkedin-icon.png"
                            text="https://www.linkedin.com/in/jason-white23"
                        />
                    </div>
                    <div style={{ flex: 1 }}>
                        
                    </div>
                </div>
            </section>
        </div>
    </>
  )
}

export default ContactMe