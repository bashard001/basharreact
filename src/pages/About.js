import React from 'react'
import "../components/stylesheets/about.css"




function about () {
  return(
    <div className="maincontainer" id="top">

    <div className="container">

      <div className="mainbox card">
        <h2 className="pagetitle">About Me</h2>

        <div className="cardcontent">

          <div className="imgdiv"><img class="imgab" src="stylesheets/images/bashar3.jpg" alt="my pic"/></div>
          <h3 style={{display: "inline", fontfFamily: 'Charmonman',fontSize: "20px", color: "red"}}>Full Stack Web Developer
          </h3><br/>
          <strong>Bashar Daseh</strong>
          <br/>
          <br/>
          <i style={{display: "inline"}} className="fa fa-phone"> &#32; </i>
          <a className="contactLink" 
            href="tel:8587175630">858-717-5630</a><br/>
          <i style={{display: "inline"}} className="fa fa-envelope-o"> &#32; </i>
          <a className="contactLink" 
            href="mailto:bdaseh@gmail">bdaseh@gmail.com</a><br/>
          <i style={{display: "inline", textDecoration: "none"}} className="fa fa-github"> &#32; </i><a
          class="contactLink" href="https://github.com/bashard001" target="_blank">
            github.com/bashard001</a>
          <h3>Development Tools, Languages and Frameworks:</h3>
          <ul class="skillList 1">
            <li>Java</li><li>Wordpress</li>
            <li>Javascript</li>
            <li>HTML, CSS and SCSS </li>
            <li>JSON, jQuery and AJAX.</li>
            <li>React, React Native</li>
            <li>GIT version control</li>
            <li>springMVC</li>
            <li>MySQL and MongoDB </li>
            <li>Scrach</li>
            <li>MERN Stack <br/>(MongoDB, Express.js, React.js, Node.js).</li>

          </ul>
          <h3>Education:</h3>
          <ul >
            <li>University of San Diego California (UCSD). 2018-2020</li>
            <p> BS in Computer Science</p>
            <li> San diego Mesa College. 2017-2018</li>
            <p>Computer Science Education</p>
            <li>San diego Mesa College. 2012-2016</li>
            <p> Associate of Science in Biology & Allied health</p>
          </ul>
        </div>





        <div class="box2 ">
          <h3>About: </h3>

          <p class="text">
            I am a self-motivated and goal-oriented Full Stack Web Developer with experience working on multiple
            web-based applications, backend development and data engineering that meet the highest standards for user
            experience, web design, usability, and speed. proven experience developing consumer-focused web applications
            for desktop and mobile using MERN, HTML, CSS, JQuery, SQL, JavaScript and node.js.</p>
     <p class="text">
            Proven experience developing consumer-focused web applications using HTML, CSS, JQuery, PHP , JavaScript,
            Node.js, MySQL and more... Building applications for desktop, and mobile devices that meet the highest
            standards for user experience, web design, usability, and speed.</p> 


      <p class="text">Solution-driven professional excelling in highly collaborative work environment, finding
            solutions to challenges and focused on customer satisfaction. Solution-driven professional excelling in
            highly collaborative work environment, finding solutions to challenges and focused on customer satisfaction.
            development (including creating servers, processing data,
            source control, issue tracking, functional feedback, etc...). I have advanced skills in Javascript and Java
            for programing various applications (mobile apps, desktop apps, games, and more) </p>

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

export default about