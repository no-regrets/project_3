import React from "react";
import { Container, Row, Col, Card, CardTitle } from "react-materialize";
import "./About.css"
import logo from "../../images/gremlin-face.png"

import Nav from "../../components/Nav/Nav";
import { pink } from "react-materialize";
import Header from "../../components/Header/Header";
import Foot from "../../components/Foot/Foot";

function About() {
    return (
        <div className="">
            <Header />
            <div className="body">
                
                <Container className="margin">
                    <Row>
                        <Card className='small card'
                            header={<CardTitle image={logo}>Gremlin</CardTitle>}
                            actions={[<a className="link" href='#'>This is a Link</a>]}>
                            I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
                        </Card>
                    </Row>
                </Container>
            </div>
            <Foot />
        </div>
    )
}

export default About;   