import React, { useEffect } from 'react'
import "./totop.css"
import { BiUpArrowCircle } from "react-icons/bi"
import IconLink from "../icon-templates/IconLink"


function Totop() {

  const scrollFunction = () => {
    var myButton = document.querySelector("#up")

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
    scrollFunction()
    window.addEventListener("scroll", scrollFunction)
  }, [])

  return (
    <div id="up" onClick={toTopFunction}>
      <IconLink Icon={BiUpArrowCircle} fontSize={20} color='white' />
    </div>
  )
}

export default Totop