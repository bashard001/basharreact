import { useState } from "react";

const IconLink = ({ Icon, href, color = "black", fontSize = 260 }) => {
    const [isHover, setIsHover] = useState(false);

    const iconStyles = {
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: isHover ? `${fontSize * 1.2}px` : `${fontSize}px`,
        padding: "10px",
        margin: "25px",
        transition: "font-size 0.2s ease",
        color: color,
    };

    return (
        <a href={href} target="_blank" rel="noopener noreferrer" style={{ display: "flex", justifyContent: "center", padding: "25px" }}>
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

export default IconLink;