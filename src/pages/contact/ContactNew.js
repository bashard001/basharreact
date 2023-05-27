import "./contact.scss";


const ContactNew = () => {

    return (
        <div className="contact-container" id="top">
            <div className="contact-options">
                <a href="https://www.linkedin.com/in/bashar-daseh-hamed/" target="_blank" rel="noopener noreferrer" style={{padding: "25px"}}>
                    <i className="fab fa-linkedin icon-hover" style={{ color: "#0a66c2", margin: "0px 5px" }}></i>
                </a>
                <a href="https://github.com/bashard001" rel="noopener noreferrer" target="_blank" style={{padding: "25px"}}><i className="fab fa-github icon-hover" style={{ color: "black", margin: "0px 5px" }}></i></a>
                <a href="https://www.instagram.com/beau_daseh/" rel="noopener noreferrer" target="_blank" style={{padding: "25px"}}><i className="fab fa-instagram icon-hover" style={{ color: 'linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D)',  margin: "0px 5px" }}></i></a>
            </div>
        </div>
    )
}

export default ContactNew;