import React from "react"
import {ReactComponent as Wave } from "../../assets/wavy.svg"
import "./bg.css"



function Bg1(props) {
    return (
        <div className={props.c1} id={props.c4}>
            <div className={props.c2}>
                <span className={props.c3}>{props.text}</span>
            </div>

            {
                props.c1.includes("wave") ?
                    <div className="wave-line">
                       <Wave />
                    </div> :
                    ""}
        </div>
    )
}

export default Bg1