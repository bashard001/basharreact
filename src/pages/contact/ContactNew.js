import { useState } from "react";
import "./contact.scss";
import {BsInstagram, BsLinkedin} from "react-icons/bs";
import {FaGithub} from "react-icons/fa";

const IconLink = ({ Icon, href, color = "black" }) => {
    const [isHover, setIsHover] = useState(false);

    const iconStyles = {
        display: "inline-flex",  
        justifyContent: "center",  
        alignItems: "center",  
        fontSize: isHover ? "300px" : "250px",   
        padding: "10px",   
        transition: "font-size 0.2s ease", 
        color: color,
    };

    return (
        <a href={href} target="_blank" rel="noopener noreferrer" style={{display: "grid", padding: "25px"}}>
            <div 
                onMouseEnter={() => setIsHover(true)} 
                onMouseLeave={() => setIsHover(false)} 
                style={iconStyles}
            >
                <Icon />
            </div>
        </a>
    );
}

const ContactNew = () => {
    return (
        <div className="contact-container" id="top">
            <div className="contact-options">
                <IconLink Icon={BsLinkedin} href="https://www.linkedin.com/in/bashar-daseh-hamed/" color= "#0a66c2"/>
                <IconLink Icon={FaGithub} href="https://github.com/bashard001" color="black" />
                <IconLink Icon={BsInstagram} href="https://www.instagram.com/beau_daseh/" color="purple"/>
            </div>
        </div>
    )
}

export default ContactNew;
