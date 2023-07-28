import React, { useEffect } from 'react'
import "./about.css"

function About() {
  function scroll() {
    if (window.location.pathname === "/about") {
      var header = document.querySelector(".header")
      header.classList.toggle("about", window.location.pathname === "/about")
      header.classList.remove("sticky")
    }
  }

  useEffect(() => {
    scroll()
  }, [])

  const skills = ["MERN Stack (MongoDB, Express.js, React.js, Node.js)", "JavaScript/TypeScript", "Redux", "AWS and Firebase", "JAVA", "HTML, CSS and SCSS/Sass", "AJAX, JSON", "GIT version control",
    "springMVC", "MySQL, MongoDB and GraphQL", "Python", "Bootstrap and Material-ui", "Babel, Webpack, NPM", "Stripe payment system"]



  return (
    <div className="maincontainer">
      <div className="mainbox card">
        <h2 className="pagetitleA" >About Me</h2>
        <div className="cardcontent">
          <div className="aitem">
            <div className="imgab skeleton" style={{ pointerEvents: "none", userSelect: "none", cursor: "not-allowed" }}></div>
            <h3 style={{ fontFamily: 'Charmonman', fontSize: "18px", color: "white" }}>Full Stack Software Engineer
            </h3><br />
            <strong>Bashar Daseh</strong>
            <br />
            <br />
            <i style={{ display: "inline" }} className="fa fa-phone"> &#32; </i>
            <a className="contactLink"
              href="tel:8587175630">858-717-5630</a><br />
            <i style={{ display: "inline" }} className="fa fa-envelope-o"> &#32; </i>
            <a className="contactLink"
              href="mailto:bdaseh@gmail">bdaseh@gmail.com</a><br />
            <i style={{ display: "inline", textDecoration: "none" }} className="fa fa-github"> &#32; </i><a
              className="contactLink" href="https://github.com/bashard001" rel="noopener noreferrer" target="_blank">
              github.com/bashard001</a>
          </div>

          <div className="aitem2"> <h3>Development Tools, Languages and Frameworks:</h3>
            <ul className="skillList 1">
              {
                skills.map((skill, index) => <li key={index} className="aboutlist">{skill}</li>)
              }
            </ul>
          </div>

          <div className="aitem3"><h3>Education:</h3>
            <ul >
              <li className="aboutlist">University of San Diego California (UCSD). 2016-2018</li>
              <p> Bachelor's Degree in Computer Science</p>
              <li className="aboutlist"> San diego Mesa College. 2015-2016</li>
              <p>Computer Science Education</p>
              <li className="aboutlist">San Diego Mesa College. 2012-2014</li>
              <p> Associate of Science in Biology & Allied health</p>
            </ul>
          </div>

          <div className="aitem4">
            <h3>About: </h3>
            <p className="text">
              I am a self-motivated and goal-oriented Full Stack Web Engineer with experience working on multiple web applications, backend development, and data engineering, meeting the highest standards for user experience, web design, usability, and speed. I have proven experience in developing consumer-focused web applications for desktop and mobile using MERN, HTML, CSS, JQuery, SQL, JavaScript, and Node.js.</p>
            <p className="text">
            I have proven experience in developing scalable, consumer-focused web applications, ranging from startups to enterprises. I utilize cloud services such as AWS and Firebase to build databases, deploy, and manage websites and apps on secure, reliable networks. I specialize in building robust website and app infrastructures for desktop and mobile devices, aiming to increase efficiency and security.</p>

            <p className="text">As a solution-driven professional, I excel in highly collaborative work environments, finding solutions to challenges, and focusing on customer satisfaction. My expertise spans various areas of development, including server creation, data processing, source control, issue tracking, and functional feedback. I possess advanced skills in JavaScript and Java for programming various applications, including mobile apps, desktop apps, games, and more.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About