import React from "react"
import "../components/stylesheets/contact.css"


function contact (){
    return(
<div className="back">
<div className="containerC" id="top">
        <div style={{textAlign: 'center'}}>
            <h2><b>Contact Me</b></h2>
            <p>Get in contact with me, leave me a message and I will get back to you.</p>
        </div>
        <div className="row">
            <div className="column pic">
             
            </div>
            <div className="column">
                <form action="/" method="POST">
                    <label for="fname" >First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name..."required/>
                    <label for="lname">Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="your last name..."/>
                    <label for="email-address" >Email address</label>
                    <input type="text" id="email-address" name="emailaddress" placeholder=" enter your email"required/>
                    <label for="message" >message</label>
                    <textarea id="message" name="message" placeholder="leave a message"
                        style={{height: '160px'}} required></textarea>
                    <input type="submit" value="submit"/>
                </form>
            </div>
        </div>
    </div>
    </div>
    )
}

export default contact