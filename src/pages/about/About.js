import React from 'react'
import "./about.css"


function About() {
  const skills = ["JAVA", "AWS and Firebase", "Javascript", "HTML, CSS and SCSS", "JSON, jQuery and AJAX.", "React, React Native and Redux", "GIT version control",
    "springMVC", "MySQL and MongoDB", "Scrach", "MERN Stack (MongoDB, Express.js, React.js, Node.js).", "Bootstrap and Material-ui", "Babel, Webpack, NPM", "Stripe payment system"]



  return (
    <div className="maincontainer" id="top">
      <div className="mainbox card">
        <h2 className="pagetitleA">About Me</h2>
        <div className="cardcontent">
          <div className="aitem">
            <div className="imgab"></div>
            <h3 style={{ fontFamily: 'Charmonman', fontSize: "18px", color: "red" }}>Full Stack Web Engineer
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
              <li className="aboutlist">University of San Diego California (UCSD). 2018-2020</li>
              <p> Bachelor's Degree in Computer Science</p>
              <li className="aboutlist"> San diego Mesa College. 2017-2018</li>
              <p>Computer Science Education</p>
              <li className="aboutlist">San Diego Mesa College. 2012-2016</li>
              <p> Associate of Science in Biology & Allied health</p>
            </ul>
          </div>

          <div className="aitem4">
            <h3>About: </h3>
            <p className="text">
              I am a self-motivated and goal-oriented Full Stack Web Engineer with experience working on multiple
              web applications, backend development and data engineering that meet the highest standards for user
              experience, web design, usability, and speed. proven experience developing consumer-focused web applications
              for desktop and mobile using MERN, HTML, CSS, JQuery, SQL, JavaScript and node.js.</p>
            <p className="text">
              Proven experience developing scalable consumer-focused web applications from startup to enterprise; utilizing cloud services like AWS and Firebase
              , build databases, deploy and manage websites and Apps on a secure reliable network. Building a strong website/Apps
              infrastructure applications for desktop, and mobile devices that runs more efficient and secure.</p>

            <p className="text">Solution-driven professional excelling in highly collaborative work environment, finding
              solutions to challenges and focused on customer satisfaction. Solution-driven professional excelling in
              highly collaborative work environment, finding solutions to challenges and focused on customer satisfaction.
              development (including creating servers, processing data,
              source control, issue tracking, functional feedback, etc...). I have advanced skills in Javascript and Java
              for programing various applications (mobile apps, desktop apps, games, and more) </p>
          </div>
          <div className="aitem5">
            <h4 >Business & Finance: </h4>
            <p >
              Working in the financial markets as a technical analyst and web Developer for about four years, generating
              HTML, PDF files using node js and MySQL to Analyze, draft create edit and prepare financial plans and data
              files, worked on developing chart indicators, creating databases and managing multiple portfolios with close
              attention and continual analysis of economic trends to determine appropriate asset allocation according to
              strict standards.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About