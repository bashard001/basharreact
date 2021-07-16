import React from "react"
import { Images } from "../assets/img";

class Card extends React.Component {

constructor(props){
    super(props)

    this.state = props
}


    render(){
      
      var image
      const { project } = this.state
      console.log(project)
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

        return(
            <div className="box ">
                <div className="a2" style={{ backgroundImage: `url(${image})` }}>
                  <div className="captions ">
                    <a rel="noopener noreferrer" target="_blank" className="ap">

                      <span>{project.pName}</span>
                    </a>
                  </div>
                </div>
                <div className="tooltips"><p className="tool-text">{project.pDisc}</p></div>
              </div>
        )
    }
}

export default Card