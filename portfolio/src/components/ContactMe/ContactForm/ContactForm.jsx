import React from 'react'
import './ContactForm.css'

const ContactForm = () => {
  return (
    <>
        <div className="contact-form-content">
            <form method="POST" action="https://formsubmit.co/bec470a684df5801c279737fb4149800">
                <div className="name-container">
                    <input type="text" name="firstname" placeholder="First Name" required/>
                    <input type="text" name="lastname" placeholder="Last Name" required/>
                </div>
                <input type="text" name="company" placeholder="Company" />
                <input type="text" name="email" placeholder="Email" required/>
                <textarea type="text" name="message" placeholder="Message" rows={3} required/>
                <button type="submit">SEND</button>
            </form>
        </div>
    </>
  )
}

export default ContactForm