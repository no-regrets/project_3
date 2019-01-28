import React from "react";
import "./EndBtn.css";
import endBtn from "../../assets/images/endBtn.png"

// import { Button } from "react-materialize";


function EndBtn(props) {
        return(
            <div className="end center" alt="End Session" onClick={props.onClick}>
                <img src={endBtn} alt=""/>
            </div>
        )}


export default EndBtn;