import React from "react"
import { Images } from "./img";
import Image from "next/image"
import "./cards.styles.scss"


function Card(props) {

  var image
  const { project } = props

  switch (project.pImage) {
    case "clothing": image = Images.clothing
      break;
    case "password": image = Images.password
      break
    case "quiz": image = Images.quiz
      break
    case "sports": image = Images.sports
      break
    case "calendar": image = Images.calender
      break
    case "weather": image = Images.weather
      break
    default:
      break;
  }

  return (
    <div className="box ">
      <Image src={"/quizAPP.jpg"} alt="pic" width={200} height={200}/>
      {/* <div className="a skeleton" style={{ backgroundImage: `url(${image})`, backgroundColor:"white" }}>
        <div className="captions ">
          <a href={project.pUrl} rel="noopener noreferrer" target="_blank" className="ap">

            {project.pName}
          </a>
        </div>
      </div>
      <div className="tooltips"><p className="tool-text">{project.pDisc}</p></div> */}
    </div>
  )

}

export default Card