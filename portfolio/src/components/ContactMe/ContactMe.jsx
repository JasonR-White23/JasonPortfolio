import React from 'react'
import './ContactMe.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import ContactForm from './ContactForm/ContactForm'


const ContactMe = () => {
  return (
    <>
        <div className="contact-wrapper">
            <section className="contact-container">
                <h2>
                    Contact Me
                    <hr />
                </h2>
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
                        <ContactInfoCard 
                            iconUrl="/assets/images/github-icon.png"
                            text="https://github.com/JasonR-White23"
                        />
                    </div>
                </div>
                <div style={{ flex: 1 }} className="contact-form">
                    <ContactForm />
                </div>
            </section>
            
        </div>
    </>
  )
}

export default ContactMe