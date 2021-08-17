import React, { useEffect } from 'react'
import "./totop.css"


function Totop() {

  const scrollFunction = () => {
    var myButton = document.querySelector("#goup")

    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      myButton.style.opacity = 1;
      myButton.style.cursor = "pointer"
    } else {
      myButton.style.cursor = "context-menu"
      myButton.style.opacity = 0;
    }
  }
  function toTopFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  useEffect(() => {

    window.addEventListener("scroll", scrollFunction)
  }, [])

  return (
    <div id="goup" onClick={toTopFunction}>
      <span className="totop"  >
        <i className="far fa-arrow-alt-circle-up"></i>
      </span></div>
  )
}

export default Totop