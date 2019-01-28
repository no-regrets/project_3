import React from "react";
import "./SessionBtn.css";
// import { Button } from "react-materialize";
import startBtn from "../../images/startBtn.png"

function SessionBtn(props) {
    
    return (
        <div onClick={props.onClick} className="start center"><img alt="Start Session" src={startBtn}/></div>
    )
}

export default SessionBtn;