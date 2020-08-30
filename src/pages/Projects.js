import React, { useState, useEffect } from "react"
import "../components/stylesheets/projects.css"


function Project (){

  let [toolHeight, setToolHeight] = useState(0)
  let [mouseIsOver, setMouseIsOver] = useState(false)

  const cardAni = function(){
    const toolTip = document.querySelector(".tooltips")
    let anima = setInterval(frame, 1)

    setMouseIsOver(false)
    function frame() {
      if (toolHeight == 0) {
        setToolHeight(0)
        clearInterval(anima);
      } else {
        
        toolHeight--; 
        toolTip.style.height = toolHeight + 'px'; 
      }
    }
  }

  const CardON = function(){
    const toolTip = document.querySelector(".tooltips")
    const boxff = document.querySelector(".boxA")
    
setMouseIsOver(true)
   
      let anima = setInterval(frame, 2)
    function frame() {
      if (toolHeight == 200) {
       
        clearInterval(anima);
      } else {
        toolHeight++; 
        toolTip.style.height = toolHeight + 'px'; 
      } 
    }


    useEffect(frame, [mouseIsOver])

  }

    return(
<div className="maincontainers">
    <div className="containers">
      <div className="pagetitle">
        <h2 >My Projects</h2>
        <p>(Web applications)</p>
      </div>
<div className="boxA " onMouseOver={CardON} onMouseLeave={cardAni}>
      <a href="https://bashard001.github.io/AstronomyQuiz" target="_blank" className="a2">
        <div className="captions" >
          <span className="box">Sample Quiz</span>
     
        </div><div className="tooltips"><p className="tool-text"> This application is built using 95% JavaScript <br/> highest score is save to localstorage</p></div>
      </a> </div>
      <a href="https://bashard001.github.io/weather-dashboard" target="_blank" class="boxA a3">
        <div className="captions">
          <span class="box">Check the Weather</span>
        </div>
      </a>
      <a href="https://bashard001.github.io/Day-Planner" target="_blank" class="boxA a4">
        <div className="captions">
          <span class="box">Day Calender</span>
        </div>
      </a>
      <a href="https://jilienecircelli.github.io/sports-scene" target="_blank" class="boxA a5" >
        <div class="captions">
          <span class="box">Sports Events</span>
        </div>
      </a>
      <a href="https://bashard001.github.io/Password-Generator" target="_blank" class="boxA a1" >
        <div class="captions">
          <span class="box">Password Generator</span>
        </div>
      </a>
      <a href="https://employeedirectory360.herokuapp.com/" target="_blank" class="boxA a6" >
        <div className="captions">
          <span className="box">Employee Directory</span>
        </div>
      </a>
      <a href="#" target="" class="boxA a7 ">
        <div className="captions">
          <span className="box">Snake Game</span>
        </div>
      </a>
    </div>

  </div>
    )
}

export default Project