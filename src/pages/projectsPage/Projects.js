import React from "react"
import "./project.css"
import projectsData from "./project.data"
import Card from "../../components/cards";


function Project() {



  return (
    <div className="maincontainers">
      <div className="pagetitle">
        <h2 id="projectH2">My Projects</h2>
        <p id="projectP">(Web applications)</p>
      </div>
      <div className="containers">
        {
          
          projectsData.map(project => {

            return (
              
                <Card key={project.id} project={project}/>
              // <div className="box ">
              //   <div className="a2" style={{ backgroundImage: `url(${image})` }}>
              //     <div className="captions ">
              //       <a href={project.pUrl} rel="noopener noreferrer" target="_blank" className="ap">

              //         <span>{project.pName}</span>
              //       </a>
              //     </div>
              //   </div>
              //   <div className="tooltips"><p className="tool-text">{project.pDisc}</p></div>
              // </div>
            )
          })
        }
        

      </div>

    </div>
  )
}

export default Project