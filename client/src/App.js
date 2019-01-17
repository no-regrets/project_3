// import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import End from "./pages/End/End";
import Drinkory from "./pages/Drinkory/Drinkory";
import Sessions from "./pages/Sessions/Sessions";
import Start from "./pages/Start/Start";
import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
// import './App.css';

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  componentDidMount() {
    const { renewSession } = this.props.auth;

    if (localStorage.getItem('isLoggedIn') === 'true') {
      renewSession();
    }
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      // <div>
      //   <Router>
    <div>
      {/* <Nav />
      <Users />
      <Sessions />
      <Drinks /> */}
      {/*CASEY - GIVE SOMETHING LIKE THE BELOW A SHOT FOR YOUR PAGES*/}
      {/* <Switch>
          <Route exact path="/" component={Start} />
          <Route exact path="/start" component={Start} />
          <Route exact path="/drinkory" component={Drinkory} />
          <Route exact path="/sessions/" component={Sessions} />
          <Route exact path="/end/" component={End} /> */}

          {/* <Route exact path="/sessions/:id" component={Sessions} /> */}
      {/* </Switch>
    </div>
    </Router> */}
      </div>

    );
  }
}

export default App;