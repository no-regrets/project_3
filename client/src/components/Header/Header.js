import React from "react";
import { Container, Row, Col } from "react-materialize";
import "./Header.css"

import Nav from "../Nav/Nav";

function Header() {
    return (
        <header className="header">
            <div className="background">
                <Container className="noMargin">
                    <Row className="noMargin">
                        <Col s={2}>
                            <Nav />
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