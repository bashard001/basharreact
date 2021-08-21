import React from "react"




function Area(props) {
  return (
    <div>
      <div style={{ color: 'white', backgroundColor: 'gray', textAlign: 'center', padding: "50px 80px" }}>
        <p>{props.text}</p>
      </div>
    </div>
  )
}

export default Area