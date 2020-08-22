import React from "react"
import "../components/stylesheets/projects.css"


function project (){
    return(
<div className="maincontainer">
    <div className="containers">
      <div className="pagetitle">
        <h2 >My Projects</h2>
        <p>(Web applications)</p>
      </div>

      <a href="https://bashard001.github.io/AstronomyQuiz" target="_blank" class="boxA a2" data-toggle="tooltip"
        data-html="true" data-placement="bottom" data-animation="true"
        title="This application is built using 95% JavaScript <br/> highest score is save to localstorage">
        <div className="captions">
          <span className="box">Sample Quiz</span>
        </div>
      </a>
      <a href="https://bashard001.github.io/weather-dashboard" target="_blank" class="boxA a3" data-toggle="tooltip"
        data-html="true" data-placement="bottom" data-animation="true"
        title="For this app I used JQuery, bootstrap, Weather api<br/>and localstorage to save search history">
        <div className="captions">
          <span class="box">Check the Weather</span>
        </div>
      </a>
      <a href="https://bashard001.github.io/Day-Planner" target="_blank" class="boxA a4" data-toggle="tooltip"
        data-html="true" data-placement="bottom" data-animation="true"
        title="This app shows my ability to build an application <br /> with the least amount of code to save size">
        <div className="captions">
          <span class="box">Day Calender</span>
        </div>
      </a>
      <a href="https://jilienecircelli.github.io/sports-scene" target="_blank" class="boxA a5" data-toggle="tooltip"
        data-html="true" data-placement="bottom" data-animation="true"
        title="Using multiple APIs to find local sporting events <br/> and the ability to buy a ticket">
        <div class="captions">
          <span class="box">Sports Events</span>
        </div>
      </a>
      <a href="https://bashard001.github.io/Password-Generator" target="_blank" class="boxA a1" data-toggle="tooltip"
        data-html="true" data-placement="bottom" data-animation="true"
        title="writing complex algorithm <br/> to generate a Password">
        <div class="captions">
          <span class="box">Password Generator</span>
        </div>
      </a>
      <a href="https://employeedirectory360.herokuapp.com/" target="_blank" class="boxA a6" data-toggle="tooltip"
        data-html="true" data-placement="bottom" data-animation="true" title="React application">
        <div className="captions">
          <span className="box">Employee Directory</span>
        </div>
      </a>
      <a href="#" target="" class="boxA a7 " data-toggle="tooltip" data-html="true" data-placement="bottom"
        data-animation="true" title="React News and Polling APP">
        <div className="captions">
          <span className="box">Snake Game</span>
        </div>
      </a>
    </div>

  </div>
    )
}

export default project