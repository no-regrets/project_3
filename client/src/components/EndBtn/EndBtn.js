import React, {Component} from "react";
import "./EndBtn.css";
import endBtn from "../../images/endBtn.png"

// import { Button } from "react-materialize";


class EndBtn extends Component {
    render(){
        return(
            <div className="end center" alt="End Session" onClick={this.props.End}>
                <img src={endBtn} alt=""/>
            </div>
        )}}


export default EndBtn;