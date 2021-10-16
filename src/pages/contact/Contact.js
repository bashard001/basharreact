import React, { useState } from "react"
import { testingF } from "../../firebase/firebase"
import sgMail from "@sendgrid/mail"

import "./contact.scss"
// import * as corsModule from "cors"



function Contact() {


    let [contact, setContact] = useState({
        name: "",
        lName: "",
        email: "",
        message: ""
    })
    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     const form = await fetch("https://us-central1-bashard.cloudfunctions.net/emailSender", {
    //         method: "POST",
    //         body: contact,
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //         .then((res) => {
    //             console.log(res.status)
    //             if (res.status == 200) {
    //                 alert("Message Sent.");
    //                 resetForm()
    //             } else {
    //                 console.log(res)
    //                 alert("Message failed to send.")
    //             }
    //         }
    //         )
    // }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // await fetch("https://us-central1-bashard.cloudfunctions.net/helloWorld",{method: "POST",
        //     body: contact}).then((res) => {
        //     console.log(res)
        // })
        sgMail.setApiKey("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");
const msg = {
  to: 'bdaseh@gmail.com',
  from: 'bdaseh@gmail.com', // Use the email address or domain you verified above
  subject: 'Sending with Twilio SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
//ES6
sgMail
  .send(msg)
  .then((res) => {console.log(res)}, error => {
    console.error(error);

    if (error.response) {
      console.error(error.response.body)
    }
  });
  

    }

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
        console.log(this)
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
                        <input id="contactSub" onClick={handleSubmit.bind(this)} type="submit" name="submit" value="submit" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact