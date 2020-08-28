import React, { useState, useEffect } from "react"
import "../components/stylesheets/contact.css"
import "./contactform.php"


function Contact(props) {

    let [name, setName] = useState("")
    let [fromEmail, setFromEmail] = useState("")
    let [message, setMessage] = useState("")

 let handleSubmit = (event) => {
     event.preventDefault()
     console.log(name)
     fetch('contactform.php',{
        method: "POST",
        body: name,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }).then(
    	(response) => (response.json())
       ).then((response)=>{
      if (response.status === 'success'){
        alert("Message Sent."); 
        this.resetForm()
      }else if(response.status === 'fail'){
        alert("Message failed to send.")
      }
    })

}
  
let nameChange = (event) => {
    setName(event.target.value)
}
let emailChange = (event) => {
    setFromEmail(event.target.value)
}
let messageChange = (event) => {
    setMessage(event.target.value)
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
                        <form onSubmit={handleSubmit}  method="POST">
                            <label for="fname" >First Name</label>
                            <input onChange={nameChange}  type="text" id="fname" name="firstname" placeholder="Your name..." required />
                            <label for="lname">Last Name</label>
                            <input type="text" id="lname" name="lastname" placeholder="your last name..." />
                            <label for="email-address" >Email address</label>
                            <input onChange={emailChange} type="text" id="email-address" name="emailaddress" placeholder=" enter your email" required />
                            <label for="message" >message</label>
                            <textarea onChange={messageChange} id="message" name="message" placeholder="leave a message"
                                style={{ height: '160px' }} required></textarea>
                            <input type="submit" name=" submit" value="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact