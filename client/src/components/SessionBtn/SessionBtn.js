import React from "react";
import "./SessionBtn.css";
import { Button } from "react-materialize";
import startBtn from "../../images/startBtn.png"

function SessionBtn() {
    
    return (
        <div className="start center"><img alt="Start Session" src={startBtn}/></div>
    )
}

export default SessionBtn;