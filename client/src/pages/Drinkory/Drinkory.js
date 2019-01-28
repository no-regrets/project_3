import React, { Component } from "react";
import "./Drinkory.css";
import { Link } from "react-router-dom";
import Header from '../../components/Header/Header';
import Nav from "../../components/Nav/Nav";
import BAC from "../../components/BAC/BAC";
import SessionBtn from "../../components/SessionBtn/SessionBtn";

import API from "../../utils/API";


class Drinkory extends Component {

  state = {
		profile: {},
	};

    componentWillMount() {
		if (this.props.auth.isAuthenticated()) {
			let oldToken = localStorage.getItem('access_token');
			let newProfile;
			this.props.auth.lock.getUserInfo(oldToken, (err, profile) => {
				newProfile = profile;
				this.setState({ profile: newProfile, sub: newProfile.sub.split('|').pop() });
			});
		} 
	}
  render() {
    const { profile } = this.state;
   
    return(
      <div>
         <Header props={profile} />
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
