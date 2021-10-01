import React from "react"
import "./project.css"
import projectsData from "./project.data"
import Card from "../../components/cards/cards";


function Project() {
  return (
    <div className="maincontainers">
      <div className="pagetitle">
        <h2 id="projectH2">My Projects</h2>
        <p id="projectP">(Web applications)</p>
      </div>
      <div className="containers">
        {
          // mapping project cards
          projectsData.map((project, index) => (
             <Card key={index} project={project}/>
             ))
        }

      </div>
    </div>
  )
}

export default Project