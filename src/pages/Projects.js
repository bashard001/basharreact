import React, { useState, useEffect } from "react"
import "../components/stylesheets/projects.css"


function Project() {


  return (
    <div className="maincontainers">
      <div className="pagetitle">
        <h2 >My Projects</h2>
        <p>(Web applications)</p>
      </div>
      <div className="containers">
        <div className="box ">
          <div className="a2">
          <div className="captions ">
            <a href="https://bashard001.github.io/AstronomyQuiz" target="_blank" className="ap">

              <span>Sample Quiz</span>
            </a>
          </div>
          </div>
          <div className="tooltips"><p className="tool-text"> This application is built using 95% JavaScript <br /> highest score is save to localstorage</p></div>
        </div>


        <div className="box " >
          <div className="a3">
          <div className="captions">
            <a href="https://bashard001.github.io/weather-dashboard" target="_blank" className="ap">

              <span>Check the Weather</span>
            </a>
          </div>
          </div>
          <div className="tooltips"><p className="tool-text"> For this app I used JQuery, bootstrap, Weather api<br/>and localstorage to save search history</p></div>

        </div>
       
        <div className="box ">
          <div className="a4">
          <div className="captions ">
            <a href="https://bashard001.github.io/Day-Planner" target="_blank" className="ap">

              <span>Day Calender</span>
            </a>
          </div>
          </div>
          <div className="tooltips"><p className="tool-text"> This app shows my ability to build an application <br /> with the least amount of code to save size</p></div>
        </div>

        <div className="box ">
          <div className="a5">
          <div className="captions ">
            <a href="https://jilienecircelli.github.io/sports-scene" target="_blank" className="ap">

              <span>Sports Events</span>
            </a>
          </div>
          </div>
          <div className="tooltips"><p className="tool-text"> Using multiple APIs to find local sporting events <br/> and the ability to buy a ticket</p></div>
        </div>

        <div className="box ">
          <div className="a1">
          <div className="captions ">
            <a href="https://bashard001.github.io/Password-Generator" target="_blank" className="ap">

              <span>Password Generator</span>
            </a>
          </div>
          </div>
          <div className="tooltips"><p className="tool-text"> writing complex algorithm <br/> to generate a Password</p></div>
        </div>

        <div className="box ">
          <div className="a6">
          <div className="captions ">
            <a href="https://employeedirectory360.herokuapp.com/" target="_blank" className="ap">

              <span>Employee Directory</span>
            </a>
          </div>
          </div>
          <div className="tooltips"><p className="tool-text"> React application</p></div>
        </div>
        <div className="box ">
          <div className="">
          <div className="captions ">
            <a href="https://employeedirectory360.herokuapp.com/" target="_blank" className="ap">

              <span>Snake Game</span>
            </a>
          </div>
          </div>
          <div className="tooltips"><p className="tool-text">Snack Game Coming <br/> Soon</p></div>
        </div>

      </div>

    </div>
  )
}

export default Project