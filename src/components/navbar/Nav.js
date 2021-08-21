import React from "react"
import { Link } from "react-router-dom"

import "./nav.css"


function Nav() {

    function scrollToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return (
        <nav className="header">
            <div className="headerContainer">
                <section id="left">
                    <Link to={'/'} onClick={scrollToTop}>
                        <h1 id="alphaq"><span id="a">Bashar Daseh</span><span id="b">B D</span></h1>
                    </Link>
                </section>
                <section id="right">
                    <Link to={'/projects'} onClick={scrollToTop}> <i className="fab fa-connectdevelop"> </i><p>
                        Projects</p></Link>
                    <Link to={'/about'} onClick={scrollToTop}><i className="far fa-user-circle"></i><p>About</p></Link>

                    <Link to={'/contact'} onClick={scrollToTop}> <i className="fas fa-id-card-alt"> </i> <p> Contact</p>
                    </Link>

                </section>
            </div>
        </nav>
    )
}

export default Nav