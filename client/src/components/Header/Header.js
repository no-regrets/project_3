import React from "react";
import { Container, Row, Col } from "react-materialize";
import "./Header.css"

import Nav from "../Nav/Nav";

function Header(props) {
    // console.log("header props: " + JSON.stringify(props))
    return (
        <header className="header">
            <div className="background">
                <Container className="noMargin">
                    <Row className="noMargin">
                        <Col s={2}>
                            <Nav props={props}/>
                        </Col>
                        <Col s={10}>
                            No Regrets
                </Col>

                    </Row>
                </Container>
            </div>
        </header>
    )
}

export default Header;