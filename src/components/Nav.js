import React from "react"
import { Link } from "react-router-dom"

import "./stylesheets/nav.css"


function Nav() {
    return (
        <nav className="header">
            <div className="headerContainer">
                <section id="left">
                   <Link to={'/'}>
                        <h1 id="alphaq"><span id="a">Bashar Daseh</span><span id="b">B D</span></h1>
                </Link>
                </section>

                <section id="right">
                 <Link to={'/projects'}> <i class="fab fa-connectdevelop"> </i><p>My
        projects</p></Link>
                       

                  
                  <Link to={'/about'}><i className="far fa-user-circle"></i><p>About</p></Link>

                     


                    <Link to={'/contact'}> <i class="fas fa-id-card-alt"> </i> <p> Contact</p>
                   </Link>
                       

                </section>
            </div>
        </nav>

    )
}

export default Nav