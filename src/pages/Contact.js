import React, { useState } from "react"
import "../components/stylesheets/contact.css"



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
      
        await fetch("https://us-central1-bashard.cloudfunctions.net/helloWorld").then((res)=>{
            console.log(res.json())
        })
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
        setContact({ ...contact, message: event.target.value })
    }


    return (
        <div className="back">
            <div className="containerC" id="top">
                <div style={{ textAlign: 'center' }}>
                    <h2><b>Contact Me</b></h2>
                    <p>Get in contact with me, leave me a message and I will get back to you.</p>
                </div>
                <div className="row">
                    <div className="column">
                        <form id="contact-form"  >
                            <label htmlFor="fname" >First Name</label>
                            <input className="form-control" value={contact.name} onChange={onNameChange.bind(this)} type="text" id="fname" name="firstname" placeholder="Your name..." required />
                            <label htmlFor="lname">Last Name</label>
                            <input type="text" id="lname" value={contact.lName} onChange={onlNameChange.bind(this)} name="lastname" placeholder="your last name..." className="form-control" />
                            <label htmlFor="email-address" >Email address</label>
                            <input className="form-control" value={contact.email} onChange={onEmailChange.bind(this)} type="email" id="email-address" name="emailaddress" placeholder=" enter your email" required />
                            <label htmlFor="message" >message</label>
                            <textarea className="form-control" value={contact.message} onChange={onMessageChange.bind(this)} id="message" name="message" placeholder="leave a message"
                                style={{ height: '160px' }} required></textarea>
                            <div id="formSub">
                                <input id="contactSub" onClick={handleSubmit.bind(this)} type="submit" name="submit" value="submit" /></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      
    )
}

export default Contact