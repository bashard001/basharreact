import { useState } from "react";

const IconLink = ({ Icon, href, color = "black", fontSize = 260, margin = 4, shouldHover = false }) => {
    const [isHover, setIsHover] = useState(false);

    const iconStyles = {
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: isHover ? `${fontSize * 1.2}px` : `${fontSize}px`,
        transition: "font-size 0.2s ease",
        color: color,
    };

    return (
        <a href={href} target="_blank" rel="noopener noreferrer" style={{ display: "flex", justifyContent: "center", margin: `${margin}px`}}>
            <div
                onMouseEnter={() => shouldHover ? setIsHover(true) : null}
                onMouseLeave={() => shouldHover ? setIsHover(false) : null}
                style={iconStyles}
            >
                <Icon />
            </div>
        </a>
    );
}

export default IconLink;