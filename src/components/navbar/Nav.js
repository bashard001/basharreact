import React, { useEffect } from "react"
import { Link } from "react-router-dom"

import "./nav.scss"


function Nav() {

    function scrollToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    function scroll() {
        window.addEventListener("scroll", function () {
            var header = document.querySelector(".header")
            console.log(window.scrollY)
            header.classList.toggle("sticky", window.scrollY > 0)
        })
    }


    useEffect(() => {
        scroll()
    })
    return (
        <nav className="header">

            <section id="left">
                <Link to={'/'} onClick={scrollToTop}>
                    <span id="a">Bashar Daseh</span><span id="b">B D</span>
                </Link>
            </section>
            <section id="right">
                <Link to={'/projects'} onClick={scrollToTop}> <div className="navlink"><i className="fab fa-connectdevelop"> </i>
                <div className="navlink_contain">
                    <p>Projects</p>
                    <div className="underline"></div>
                    </div>
                    
                </div>
                   
                </Link>
                <Link to={'/about'} onClick={scrollToTop}><div className="navlink"><i className="far fa-user-circle"></i><p>About</p></div></Link>

                <Link to={'/contact'} onClick={scrollToTop}><div className="navlink"> <i className="fas fa-id-card-alt"> </i> <p> Contact</p></div>
                </Link>

            </section>

        </nav>
    )
}

export default Nav