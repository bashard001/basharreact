import React, { useState, useEffect } from "react"
import "../components/stylesheets/contact.css"
import "./contactform.php"


function Contact(props) {

    let [contact, setContact] = useState({
        name: "",
        email: "",
        message: ""
    })
    



  const  handleSubmit = event => {
    event.preventDefault();
    fetch('http://localhost:3001/contactform.php', {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then(
    (response) => (response.json())
      ).then((response)=> {
    if (response.status === 'success') {
      alert("Message Sent."); 
      this.resetForm()
    } else if(response.status === 'fail') {
      alert("Message failed to send.")
    }
  })
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
                            {/* <label for="lname">Last Name</label>
                            <input type="text" id="lname" name="lastname" placeholder="your last name..." className="form-control" /> */}
                            <label for="email-address" >Email address</label>
                            <input className="form-control" value={contact.email} onChange={onEmailChange.bind(this)} type="email" id="email-address" name="emailaddress" placeholder=" enter your email" required />
                            <label for="message" >message</label>
                            <textarea className="form-control" value={contact.message} onChange={onMessageChange.bind(this)} id="message" name="message" placeholder="leave a message"
                                style={{ height: '160px' }} required></textarea>
                            <input type="submit" name="submit" value="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact