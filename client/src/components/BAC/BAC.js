import React, {Component} from "react";
import "./BAC.css";
import { Container, Row } from "react-materialize";

class BAC extends Component {
    render(){
        return(
            <Container className="BAC">
                <Row>
                    <label>CurrentBAC:</label>
                    <span> BAC # </span>
                </Row>
                <Row>
                    <label>Estimated time until sober:</label>
                    <span>00:00</span>
                </Row>
            </Container>
        )
    }
}

export default BAC;