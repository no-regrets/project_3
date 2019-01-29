import React, {Component} from "react";
import "./BAC.css";
import { Container, Row, Col } from "react-materialize";
import { userInfo } from "os";

class BAC extends Component {
    render(){
        return(
            <div>
            <Container className="BAC">
                <Row>
                    <Col className="label">CurrentBAC:</Col>
                    <Col className="info">{this.props.bac}</Col>
                </Row>
                <Row>
                    <Col className="label">Estimated time when legally sober:</Col>
                    <Col className="info"> {this.props.tts} </Col>
                </Row>
                <Row>
                    <Col className="label">Estimated time when completely sober: </Col>
                    <Col className="label">{this.props.ttcs}</Col>
                </Row>
            </Container>
            {/* <Container className="time">
                <Row>
                    <Col clasName="label">Estimated time until sober:</Col>
                    <Col className="info"> {this.props.tts} </Col>
                </Row>
            </Container> */}
            </div>
        )
    }
}

export default BAC;