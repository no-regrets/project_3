import React, { Component } from 'react';
import { Panel, ControlLabel, Glyphicon } from 'react-bootstrap';
import './Profile.css';
import API from "../utils/API"
import { Button } from "react-materialize";

class Profile extends Component {

  state = {
    profile: {},
    sessionID: ""
  }

  componentWillMount() {
    this.setState({ profile: {} });
    const { userProfile, getUserInfo } = this.props.auth;
    if (!userProfile) {
      getUserInfo((err, profile) => {
        this.setState({ profile }, () => {API.saveUser({
          sub: this.state.profile.sub,
        })
          .then(res => this.loadUsers())
          .catch(err => console.log(err));});
      });
    } else {
      this.setState({ profile: userProfile }) ;
    }
  }

  startSession = event => {
    event.preventDefault();
      API.saveSession({
        drinkGoal: this.state.drinkGoal,
        maxBAC: this.state.maxBAC,
        budget: this.state.budget,
        sub: this.state.profile.sub,
      })
      .then(res => this.setState({sessionID: res.data._id}))
      .catch(err => console.log(err));
  };
  
  addDrink = event => {
    event.preventDefault();
      API.saveDrink({
        sessionid: this.state.sessionID
      })
      // .then(res => this.loadSessions())
      .catch(err => console.log(err));
  };


  render() {
    const { profile } = this.state;
    return (
      <div className="container">
        <div className="profile-area">
          <h1>{profile.name}</h1>
          <Panel header="Profile">
            <img src={profile.picture} alt="profile" />
            <div>
              <ControlLabel><Glyphicon glyph="user" /> Nickname</ControlLabel>
              <h3>{profile.nickname}</h3>
            </div>
            <pre>{JSON.stringify(profile, null, 2)}</pre>
          </Panel>
          <Button onClick={this.startSession}>Session</Button>
          <Button onClick={this.addDrink}>Drink</Button>
          <Button >Logout</Button>
        </div>
      </div>
    );
  }
}

export default Profile;
