import React from "react"
import "./project.css"
import projectsData from "./project.data"
import { Images } from "../../assets/img";


function Project() {

  var projectD = projectsData

  return (
    <div className="maincontainers">
      <div className="pagetitle">
        <h2 id="projectH2">My Projects</h2>
        <p id="projectP">(Web applications)</p>
      </div>
      <div className="containers">
        {
          
          projectD.map(project => {
            
              var image = Images
            switch (project.pImage) {
              case "clothing": console.log(Images.clothing)
                
                break;
                case "password": image = Images.password
            
              default:
                break;
            }

            return (
              

              <div className="box ">
                <div className="a2" style={{ backgroundImage: `url(${image})` }}>
                  <div className="captions ">
                    <a href={project.pUrl} rel="noopener noreferrer" target="_blank" className="ap">

                      <span>{project.pName}</span>
                    </a>
                  </div>
                </div>
                <div className="tooltips"><p className="tool-text">{project.pDisc}</p></div>
              </div>
            )
          })
        }
        <div className="box ">
          <div className="a7">
            <div className="captions ">
              <a href="https://clothing-ecommerce-843a2.web.app/" rel="noopener noreferrer" target="_blank" className="ap">

                <span>Shop For Clothes</span>
              </a>
            </div>
          </div>
          <div className="tooltips"><p className="tool-text">React E-commerce site, utilizes google Auth and Strip for a payment system</p></div>
        </div>

        <div className="box ">
          <div className="a2">
            <div className="captions ">
              <a href="https://bashard001.github.io/AstronomyQuiz" rel="noopener noreferrer" target="_blank" className="ap">

                <span>Sample Quiz</span>
              </a>
            </div>
          </div>
          <div className="tooltips"><p className="tool-text"> This application is built using 95% JavaScript <br /> highest score is save to localstorage</p></div>
        </div>


        <div className="box " >
          <div className="a3">
            <div className="captions">
              <a href="https://bashard001.github.io/weather-dashboard" rel="noopener noreferrer" target="_blank" className="ap">

                <span>Check the Weather</span>
              </a>
            </div>
          </div>
          <div className="tooltips"><p className="tool-text"> For this app I used JQuery, bootstrap, Weather api<br />and localstorage to save search history</p></div>

        </div>

        <div className="box ">
          <div className="a4">
            <div className="captions ">
              <a href="https://bashard001.github.io/Day-Planner" rel="noopener noreferrer" target="_blank" className="ap">

                <span>Day Calender</span>
              </a>
            </div>
          </div>
          <div className="tooltips"><p className="tool-text"> This app shows my ability to build an application <br /> with the least amount of code to save size</p></div>
        </div>

        <div className="box ">
          <div className="a5">
            <div className="captions ">
              <a href="https://jilienecircelli.github.io/sports-scene" rel="noopener noreferrer" target="_blank" className="ap">

                <span>Sports Events</span>
              </a>
            </div>
          </div>
          <div className="tooltips"><p className="tool-text"> Using multiple APIs to find local sporting events <br /> and the ability to buy a ticket</p></div>
        </div>

        <div className="box ">
          <div className="a1">
            <div className="captions ">
              <a href="https://bashard001.github.io/Password-Generator" rel="noopener noreferrer" target="_blank" className="ap">

                <span>Password Generator</span>
              </a>
            </div>
          </div>
          <div className="tooltips"><p className="tool-text"> writing complex algorithm <br /> to generate a Password</p></div>
        </div>

        <div className="box ">
          <div className="a6">
            <div className="captions ">
              <a href="https://employeedirectory360.herokuapp.com/" rel="noopener noreferrer" target="_blank" className="ap">

                <span>Employee Directory</span>
              </a>
            </div>
          </div>
          <div className="tooltips"><p className="tool-text"> React application</p></div>
        </div>


      </div>

    </div>
  )
}

export default Project