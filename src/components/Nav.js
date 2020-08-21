import React from "react"

import "./stylesheets/nav.css"


function Nav() {
    return (
        <nav className="header">
            <div className="headerContainer">
                <section id="left">
                    <a href="index.html">
                        <h1 id="alphaq"><span id="a">Bashar Daseh</span><span id="b">B D</span></h1>
                    </a>
                </section>

                <section id="right">
                    <a href="myprojects.html">
                        <i class="fab fa-connectdevelop"> </i><p>My
        projects</p>

                    </a>
                    <a href="about.html">

                        <i className="far fa-user-circle"></i><p>About</p> </a>


                    <a href="contacts.html">
                        <i class="fas fa-id-card-alt"> </i> <p> Contact</p>
                    </a>

                </section>
            </div>
        </nav>

    )
}

export default Nav