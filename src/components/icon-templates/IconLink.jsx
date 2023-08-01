/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { css } from "@emotion/react";

const IconLink = ({
  Icon,
  href,
  color = "black",
  fontSize = 250,
  shouldHover = false,
}) => {
  const [isHover, setIsHover] = useState(false);

  const iconStyles = css`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: ${isHover ? fontSize * 1.2 + "px" : fontSize + "px"};
    transition: font-size 0.2s ease;
    color: ${color};
  `;

  return (
    <a
      href={href}
      target="_blank"
      rel="social media noreferrer"
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 4px 4px 4px 4px;
      `}
    >
      <div
        onMouseEnter={() => (shouldHover ? setIsHover(true) : null)}
        onMouseLeave={() => (shouldHover ? setIsHover(false) : null)}
        css={iconStyles}
      >
        <Icon />
      </div>
    </a>
  );
};

export default IconLink;
