import React from "react";
import "./End.css";
import { Link } from "react-router-dom";

import BAC from "../../components/BAC/BAC";
import SessionBtn from "../../components/SessionBtn/SessionBtn"

function End() {
    return (
        <div className="container">
            <div className="row">
                <h1>No Regrets Logo</h1>
            </div>
            <div className="row">
                <BAC />
            </div>
            <div>
                Session Drink History
            </div>
            <div className="row">
                <Link to="/drinkory"
                    className={
                        window.location.pathname === "/drinkory"
                            ? "nav-link active" : "nav-link"
                    }>
                    Drinkory
                  </Link>
            </div>
            <div className="row">
                <Link to="/start" className={window.location.pathname === "/start"
                    ? "nav-link active" : "nav=link"}>
                    <SessionBtn/>
                    </Link>
            </div>
        </div>
    )
}

export default End;
