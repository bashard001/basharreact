import React, { useEffect, useRef } from "react"
import { Link } from "react-router-dom"

import "./nav.scss"


function Nav() {

    let timeOut = useRef("")
  


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

    const handleHover = (e) => {
        clearTimeout(timeOut.current)
        
        let el = e.target.querySelector(".underline")
        
        if (el) {
            el.style.transform = "translateX(-101%)"
            el.style.opacity = "1"
            el.style.transform = "translateX(0)"
        }
    }
    
    const hoverOut = (e) => {
        let el = e.target.querySelector(".underline")
        if (el) {
            el.style.transform = "translateX(101%)"
            timeOut.current = setTimeout(() => {
                el.style.opacity = "0"
                el.style.transform = "translateX(-101%)"
            }, 380)
        }
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
                <Link to={'/projects'} onMouseOver={handleHover} onMouseLeave={hoverOut} onClick={scrollToTop} >
                    <div className="navlink"  ><i className="fab fa-connectdevelop"> </i>
                        <div className="navlink_contain">
                            <p>Projects</p>
                            <div style={{transform: "translateX(-101%)"}} className="underline"></div>
                        </div>
                    </div>
                </Link>
                <Link to={'/about'} onMouseOver={handleHover} onMouseLeave={hoverOut} onClick={scrollToTop}>
                    <div className="navlink">
                        <i className="far fa-user-circle"></i>
                        <div className="navlink_contain">
                            <p>About</p>
                            <div className="underline"></div>
                        </div>
                    </div>
                </Link>

                <Link to={'/contact'} onMouseOver={handleHover} onMouseLeave={hoverOut} onClick={scrollToTop}><div className="navlink">
                    <i className="fas fa-id-card-alt"> </i>
                    <div className="navlink_contain">
                        <p>Contact</p>
                        <div className="underline"></div>
                    </div>
                </div>
                </Link>

            </section>

        </nav>
    )
}

export default Nav