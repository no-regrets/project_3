import React, { Component } from "react";
import "./Drinkory.css";
import { Link } from "react-router-dom";

import Nav from "../../components/Nav/Nav";
import BAC from "../../components/BAC/BAC";
import SessionBtn from "../../components/SessionBtn/SessionBtn";

import API from "../../utils/API";


class Drinkory extends Component {
  render() {
    return(
      <div>
        <Nav/>
        <div className="container">
          <div className="row">
            <BAC />
          </div>
          <div className="row">
            Drinkory Info
          </div>
          <div className="row">
            <Link to="/start" className={window.location.pathname === "/start"
                ? "nav-link active" : "nav-link"
            }><SessionBtn />
            </Link>
            or 
            <Link to="/end" className={window.location.pathname === "/end"
                ? "nav-link active" : "nav-link"
            }>End
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Drinkory;
