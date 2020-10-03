import React, { useState, useEffect } from "react"
import "../components/stylesheets/contact.css"
import axios from "axios"

function Contact(props) {

    let [contact, setContact] = useState({
        name: "",
        email: "",
        message: ""
    })
    

const resetForm = () => {
    setContact({
        name: "",
        email: "",
        message: ""
    })
}

  const  handleSubmit = async (event) => {
    event.preventDefault();
const form = await axios.post("/api/form", {contact})

    }

    const onNameChange = event => {
       setContact({...contact, name: event.target.value})
      
      }
    
     const onEmailChange = (event) => {
      setContact({...contact, email: event.target.value})
      }
    
      const onMessageChange = (event) => {
       setContact({...contact, message: event.target.value})
      }
  


    return (
        <div className="back">
            <div className="containerC" id="top">
                <div style={{ textAlign: 'center' }}>
                    <h2><b>Contact Me</b></h2>
                    <p>Get in contact with me, leave me a message and I will get back to you.</p>
                </div>
                <div className="row">
                    <div className="column pic">

                    </div>
                    <div className="column">
                        <form id="contact-form" onSubmit={handleSubmit.bind(this)} method="POST">
                            <label for="fname" >First Name</label>
                            <input className="form-control" value={contact.name}  onChange={onNameChange.bind(this)} type="text" id="fname" name="firstname" placeholder="Your name..." required />
                             <label for="lname">Last Name</label>
                            <input type="text" id="lname" name="lastname" placeholder="your last name..." className="form-control" /> 
                            <label for="email-address" >Email address</label>
                            <input className="form-control" value={contact.email} onChange={onEmailChange.bind(this)} type="email" id="email-address" name="emailaddress" placeholder=" enter your email" required />
                            <label for="message" >message</label>
                            <textarea className="form-control" value={contact.message} onChange={onMessageChange.bind(this)} id="message" name="message" placeholder="leave a message"
                                style={{ height: '160px' }} required></textarea>
                            <div id="formSub">
                            <input id="contactSub" type="submit" name="submit" value="submit" /></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact