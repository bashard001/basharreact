import React from "react"
import Bg1 from "../../components/info-area/Bg1"
import List from "../../components/list/List"
import Area from "../../components/info-area/Area"
import { Link } from "react-router-dom"

function Main() {
    return (
        <div>

            <Bg1 c1="bg1" c2="firstcaption" c3="firstbox" c4="top" text="Full Stack Web Engineer" />
            <List />
            <Bg1 c1="bg2" c2="caption" c3="box" text="Apply Animations" />
            <Area text="Scroll up and down to really get the feeling of Parallax Scrolling Animation" />
            <Bg1 c1="bg3" c2="caption" c3="box" text="SCROLL" />
            <Area text="Scroll up and down to really get the feeling of how Parallax Scrolling works." />
            <Bg1 c1="bg4" c2="caption" c3="box lastBox" text={<Link to={'/projects'} className="projects"><span className="largeC">Checkout my projects</span><span className="smallC">My projects</span></Link>} />

        </div>
    )
}

export default Main