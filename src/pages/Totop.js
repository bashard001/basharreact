import React, { useState, useEffect } from 'react'
import "../components/stylesheets/totop.css"




function Totop (){
     



const scrollFunction = () => {
    var myButton = document.querySelector("#goup")

    if (document.body.scrollTop > 110 || document.documentElement.scrollTop > 110) {
        myButton.style.opacity = 1;
    } else {
       
        myButton.style.opacity = 0;
    }
  }
  function toTopFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  useEffect(()=>{
    
      window.addEventListener("scroll", scrollFunction)
  },[])

    return(
        <div id="goup" onClick={toTopFunction}> 
        <a class="totop"  >
       <i class="far fa-arrow-alt-circle-up"></i>
      </a></div>
    )
}

export default Totop