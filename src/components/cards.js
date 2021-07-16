import React from "react"

class Card extends React.Component {

constructor(props){
    super(props)

    console.log(props)
}



    render(){


        return(
            <div className="box ">
                <div className="a2" style={{ backgroundImage: `url()` }}>
                  <div className="captions ">
                    <a rel="noopener noreferrer" target="_blank" className="ap">

                      <span>{}</span>
                    </a>
                  </div>
                </div>
                <div className="tooltips"><p className="tool-text">{}</p></div>
              </div>
        )
    }
}

export default Card