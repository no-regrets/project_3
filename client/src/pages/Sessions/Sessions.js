import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./Sessions.css";

import Nav from "../../components/Nav/Nav";
import BAC from "../../components/BAC/BAC";
import DrinkBtn from "../../components/DrinkBtn/DrinkBtn";
import SessionBtn from "../../components/SessionBtn/SessionBtn";

import API from "../../utils/API";


class Sessions extends Component {

  render() {
    return (
      <div>
        <Nav />
        <div className="container">
          <div className="row">
            <BAC />
          </div>
          <div className="row">
            {/* <DrinkSummary /> */}
          </div>
          <div className="row">
            <DrinkBtn/>
            <DrinkBtn/>
            <DrinkBtn/>
            <DrinkBtn/>
          </div>
          <div className="row">
            <Link to="/end" className={window.location.pathname === "/end"
                ? "nav-link active" : "nav-link"
            }>End
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Sessions;
