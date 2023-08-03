/** @jsxImportSource @emotion/react */
import "./text.css";

function TextAni(props) {
  return (
      <svg>
        <text x="50%" y="50%" dy=".35em" text-anchor="middle">
          {props.text}
        </text>
      </svg>
  );
}

export default TextAni;
