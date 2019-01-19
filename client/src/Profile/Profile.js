import React, { Component } from 'react';
import { Panel, ControlLabel, Glyphicon } from 'react-bootstrap';
import './Profile.css';
import API from "../utils/API"
import { Button } from "react-materialize";
import SessionBtn from "../components/SessionBtn/SessionBtn"

class Profile extends Component {

  state = {
    profile: {}
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

  startSession = () => { 
   let sub = (this.state.profile.sub);
   API.saveSession({
    // drinkGoal: this.state.drinkGoal,
    // maxBAC: this.state.maxBAC,
    // budget: this.state.budget,
    sub: sub,
  }).then(res => this.loadSessions())
    .catch(err => console.log(err))
    // API.getUser({sub: subID}).then(console.log("I got a thing"))
  }

  startSession = event => {
    event.preventDefault();
      API.saveSession({
        drinkGoal: this.state.drinkGoal,
        maxBAC: this.state.maxBAC,
        budget: this.state.budget,
        sub: this.state.profile.sub,
      }).then(res => this.loadSessions())
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
          <Button >Logout</Button>
        </div>
      </div>
    );
  }
}

export default Profile;
