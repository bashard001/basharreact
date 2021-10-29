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
        e.stopPropagation()
        clearTimeout(timeOut.current)
        
        let el2 = e.target.querySelector(".newline")
        let el = e.target.querySelector(".underline")
        console.log(e.target)
        el2.style.width = "100%"
        el2.style.right = "0"
        //    el.style.transition= "transform .6s"
        // el.style.opacity = "1"
        // el.style.transform = "translateX(0)" 
       
    }

    

    const hoverOut = (e) => {
        e.stopPropagation()
        let el = e.target.querySelector(".underline")
        let el2 = e.target.querySelector(".newline")
        el2.style.right = "0"
        el2.style.left = ""
        el2.style.width = "0%"
        // console.log(el)
        // el.style.transform = "translateX(101%)"
        // timeOut.current = setTimeout(() => {
        //     el.style.transition= "transform 0s"
        //     el.style.opacity = "0"
        //     el.style.transform = "translateX(-101%)"
        // }, 380)

    }
    useEffect(()=>{
        document.querySelectorAll(".linkNav").forEach(el => el.addEventListener("mouseenter", handleHover))
        document.querySelectorAll(".linkNav").forEach(el => el.addEventListener("mouseleave", hoverOut))
    },[])

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
                <Link to={'/projects'} className="linkNav" onClick={scrollToTop} >
                    <div className="navlink"  ><i className="fab fa-connectdevelop"> </i>
                        <div className="navlink_contain">
                            <p>Projects</p>
                            <div style={{ transform: "translateX(-101%)" }} className="underline"></div>
                        </div>
                    </div>
                </Link>

                <Link to={'/about'} className="linkNav" onClick={scrollToTop}>
                    <div className="navlink">
                        <i className="far fa-user-circle"></i>
                        <div className="navlink_contain">
                            <p>About</p>
                            <div className="underline"></div>
                        </div>
                    </div>
                </Link>

                <Link to={'/contact'} className="linkNav" onClick={scrollToTop}>
                    <div className="navlink">
                        <i className="fas fa-id-card-alt"> </i>
                        <div className="navlink_contain">
                            <p>Contact</p>
                            <div className="newline"></div>
                            <div className="underline"></div>
                            
                        </div>
                    </div>
                </Link>
            </section>
        </nav>
    )
}

export default Nav