import React, {Component} from "react";
import "./EndBtn.css";

import { Button } from "react-materialize";


class EndBtn extends Component {
    render(){
        return(
            <Button onClick={this.props.End}>End Btn</Button>
        )}}


export default EndBtn;