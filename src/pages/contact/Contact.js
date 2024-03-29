import React, { useState } from "react"

import "./contact.scss"



function Contact() {

    let [contact, setContact] = useState({
        name: "",
        lName: "",
        email: "",
        message: ""
    })

    const onNameChange = event => {
        setContact({ ...contact, name: event.target.value })

    }
    const onlNameChange = event => {
        setContact({ ...contact, lName: event.target.value })

    }

    const onEmailChange = (event) => {
        setContact({ ...contact, email: event.target.value })
    }

    const onMessageChange = (event) => {
        setContact({ ...contact, message: event.target.value })
    }

    return (
        <div className="contact-container" id="top">
            <div style={{ textAlign: 'center' }}>
                <h2><b>Contact Me</b></h2>
                <p>Get in contact with me, leave me a message and I will get back to you.</p>
            </div>
            <div className="column">
                <form id="contact-form"  >
                    <label htmlFor="fname" >First Name</label>
                    <input className="form-control" value={contact.name} onChange={onNameChange.bind(this)}
                        type="text" id="fname" name="firstname" placeholder="First Name" required />
                    <label htmlFor="lname">Last Name</label>
                    <input type="text" id="lname" value={contact.lName} onChange={onlNameChange.bind(this)}
                        name="lastname" placeholder="Last Name" className="form-control" />
                    <label htmlFor="email-address" >Email address</label>
                    <input className="form-control" value={contact.email} onChange={onEmailChange.bind(this)}
                        type="email" id="email-address" name="emailaddress" placeholder=" Enter your email" required />
                    <label htmlFor="message" >Message</label>
                    <textarea className="form-control" value={contact.message} onChange={onMessageChange.bind(this)}
                        id="message" name="message" placeholder="Write a message"
                        style={{ height: '160px' }} required></textarea>
                    <div id="formSub">
                        <input id="contactSub" onClick={null} type="submit" name="submit" value="submit" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact