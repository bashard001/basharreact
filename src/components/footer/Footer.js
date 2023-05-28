import React from "react"
import "./footer.css"
import IconLink from "../icon-templates/IconLink"
import { FaGithub } from "react-icons/fa";
import { BsInstagram, BsLinkedin } from "react-icons/bs";

function Footer() {
    return (
        <footer>
            <div className="footerC">
                <div>
                    <IconLink Icon={BsLinkedin} href="https://www.linkedin.com/in/bashar-daseh-hamed/" fontSize={19} color="white" />
                    <IconLink Icon={FaGithub} href="https://github.com/bashard001" fontSize={19} color="white" />
                    <IconLink Icon={BsInstagram} href="https://www.instagram.com/beau_daseh/" fontSize={19} color="white" />
                </div>
                <p>copyrights &copy;</p>
            </div>
        </footer>
    )
}

export default Footer