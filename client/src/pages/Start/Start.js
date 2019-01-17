import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row } from "react-materialize";

import SessionBtn from "../../components/SessionBtn/SessionBtn";

class Start extends Component {

  render() {
    return (
      <Container>
        <Row>
          <h1> No Regrets (logo placement) </h1>
        </Row>
        <Row>
          <label className="col-6">
          Max amount of drinks you plan to have (optional):
          </label>
          <input className="col-6" type="number" min="1" max="30"/>
        </Row>
        <Row>
        <Link to="/sessions"
                  className={
                  window.location.pathname === "/sessions"
                      ? "nav-link active" : "nav-link"
                  }>
                  <SessionBtn />
                  </Link>
                  <Link to="/drinkory"
                  className={
                  window.location.pathname === "/drinkory"
                      ? "nav-link active" : "nav-link"
                  }>
                  Drinkory
                  </Link>
        </Row>
      </Container>
    )
  }
}


export default Start;
