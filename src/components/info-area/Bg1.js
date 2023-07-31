import React from "react"
import {ReactComponent as Wave } from "../../assets/wavy.svg"
import "./bg.css"
import {ReactComponent as Waved} from "../../assets/wavedown.svg"
import TextAni from "./TextAni"


function Bg1(props) {
    return (
        <div className={props.c1} id={props.c4}>
            <div className={props.c2}>
            {props.animate ?
              <TextAni text={props.text}/>  : <span className={props.c3}>{props.text}</span>
                }
            </div>

            {
                props.c1.includes("wave") ?
                    <div className="wave-line">
                       <Wave />
                       
                    </div> :
                    null}
                    {
                props.c1.includes("down") ?
                   <Waved fill={"white"}/> :
                    null}
                    
        </div>
    )
}

export default Bg1