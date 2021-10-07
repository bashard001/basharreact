import React, {useEffect} from "react"
import Bg1 from "../../components/info-area/Bg1"
import List from "../../components/list/List"
import Area from "../../components/info-area/Area"
import { Link } from "react-router-dom"
import "./main.css"

function Main() {
    function scrolltoTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    useEffect(()=>{
        console.log(navigator)
    })
    return (
        <div>
            <Bg1 c1="bg1 wave" c2="caption firstcaption" c3="firstbox" c4="top" text="Full Stack Web Engineer" />
           
            <List />
            <Bg1 c1="bg2 down" c2="caption" c3="box" text="Apply Animations" />
            <Area text="Scroll up and down to really get the feeling of Parallax Scrolling Animation" />
            <Bg1 c1="bg3" c2="caption" c3="box" text="SCROLL" />
            <Area text="Scroll up and down to really get the feeling of how Parallax Scrolling works." />
            <Bg1 c1="bg4" c2="caption" c3="box lastBox" text={<Link to={'/projects'} onClick={scrolltoTop} className="projects"><span className="largeC">Checkout my projects</span><span className="smallC">My projects</span></Link>} />
        </div>
    )
}

export default Main