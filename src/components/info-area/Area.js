import React from "react"




function Area(props) {
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ color: '#ddd', backgroundColor: '#282E34', textAlign: 'center', padding: "50px 80px" }}>
        <p>{props.text}</p>
      </div>
    </div>
  )
}

export default Area