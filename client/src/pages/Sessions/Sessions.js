import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./Sessions.css";

import Nav from "../../components/Nav/Nav";
import BAC from "../../components/BAC/BAC";
import DrinkSession from "../../components/DrinkSession/DrinkSession"
import DrinkBtn from "../../components/DrinkBtn/DrinkBtn";
import EndBtn from "../../components/EndBtn/EndBtn";

class Sessions extends Component {

  render() {
    return (
      <div>
        <Nav />
        <div className="container">
        <div className="row">
            <Link to="/profile" className={window.location.pathname === "/profile"
                ? "nav-link active" : "nav-link"
            }>Profile
            </Link>
          </div>
          <div className="row">
            <BAC />
          </div>
          <div className="row">
            <DrinkSession />
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
            }><EndBtn />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Sessions;
