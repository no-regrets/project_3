import React, {Component} from "react";
import "./BAC.css";
import { Container, Row } from "react-materialize";
import { userInfo } from "os";

class BAC extends Component {
    render(){
        return(
            <Container className="BAC">
                <Row>
                    <label>CurrentBAC: {this.props.bac}</label>
                    <span> BAC # </span>
                </Row>
                <Row>
                    <label>Estimated time until sober: {this.props.tts}</label>
                    <span>00:00</span>
                </Row>
            </Container>
        )
    }
}

export default BAC;