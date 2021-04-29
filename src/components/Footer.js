import React from "react"
import "./stylesheets/footer.css"

function Footer() {
    return (
        <footer class="dynamicfooter">
<div className="footerC">


            <div>
                <a href="https://www.linkedin.com/in/bashar-daseh-hamed/" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-linkedin" style={{color:"white", fontSize:"19px", margin:"0px 5px"}}></i>

                </a>

                <a href="https://github.com/bashard001" rel="noopener noreferrer" target="_blank"><i class="fab fa-github" style={{color:"white", fontSize:"19px", margin:"0px 5px"}}></i></a>
                <a href="https://www.instagram.com/beau_daseh/" rel="noopener noreferrer" target="_blank"><i class="fab fa-instagram" style={{color:"white", fontSize:"19px", margin:"0px 5px"}}></i></a>

            </div>
            <p>copyrights &copy;</p></div>

        </footer>
    )
}

export default Footer