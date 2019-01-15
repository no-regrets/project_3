import React, {Component} from "react";
import "./BAC.css";

class BAC extends Component {
    render(){
        return(
            <div className="container border">
                <div className="row">
                    <label>CurrentBAC:</label>
                    <span> BAC # </span>
                </div>
                <div className="row">
                    <label>Estimated time until sober:</label>
                    <span>00:00</span>
                </div>
            </div>
        )
    }
}

export default BAC;