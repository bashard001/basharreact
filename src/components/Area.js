import React from "react"
import "./stylesheets/bg.css"



function area(props) {
    return (
        <div style={{position:'relative'}}>
        <div style={{color:'#ddd', backgroundColor:'#282E34', textAlign:'center', padding:"50px 80px", textAlign: 'justify'}}>
          <p>{props.text}</p>
        </div>
      </div>
    )
}

export default area