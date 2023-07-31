import "./contact.scss";
import {BsInstagram, BsLinkedin} from "react-icons/bs";
import {FaGithub} from "react-icons/fa";
import IconLink from "../../components/icon-templates/IconLink";
import TextAni from "../../components/info-area/TextAni";


const ContactNew = () => {
    return (
        <div className="contact-container" id="top">
            <div className="contact-options">
                <IconLink Icon={BsLinkedin} href="https://www.linkedin.com/in/bashar-daseh-hamed/" color= "#0a66c2" shouldHover={true}/>
                <IconLink Icon={FaGithub} href="https://github.com/bashard001" color="black" shouldHover={true}/>
                <IconLink Icon={BsInstagram} href="https://www.instagram.com/beau_daseh/" color="purple" shouldHover={true}/>
<TextAni />
            </div>
        </div>
    )
}

export default ContactNew;
