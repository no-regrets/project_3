// import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import End from "./pages/End/End";
import Drinkory from "./pages/Drinkory/Drinkory";
import Sessions from "./pages/Sessions/Sessions";
import Start from "./pages/Start/Start";

// function App() {
//   return (
//     <Router>
//     <div>
//       <Nav />
//       {/* <Nav />
//       <Users />
//       <Sessions />
//       <Drinks /> */}
//       {/*CASEY - GIVE SOMETHING LIKE THE BELOW A SHOT FOR YOUR PAGES*/}
//       <Switch>
//           <Route exact path="/" component={Users} />
//           <Route exact path="/users" component={Users} />
//           <Route exact path="/sessions/" component={Sessions} />
//           {/* <Route exact path="/sessions/:id" component={Sessions} /> */}
//           <Route exact path="/drinks" component={Drinks} />
//       </Switch>
//     </div>
//     </Router>
//   );
// }

// export default App;


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
      <div>
        <Navbar fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Auth0 - React</a>
            </Navbar.Brand>
            <Button
              bsStyle="primary"
              className="btn-margin"
              onClick={this.goTo.bind(this, 'home')}
            >
              Home
            </Button>
            {
              !isAuthenticated() && (
                  <Button
                    id="qsLoginBtn"
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.login.bind(this)}
                  >
                    Log In
                  </Button>
                )
            }
            {
              isAuthenticated() && (
                  <Button
                    id="qsLogoutBtn"
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </Button>
                )
            }
          </Navbar.Header>
        </Navbar>
        {/* <Button onClick={this.lock.show()}>Lock Login</Button> */}
        <Router>
    <div>
      {/* <Nav />
      <Users />
      <Sessions />
      <Drinks /> */}
      {/*CASEY - GIVE SOMETHING LIKE THE BELOW A SHOT FOR YOUR PAGES*/}
      <Switch>
          <Route exact path="/" component={Start} />
          <Route exact path="/start" component={Start} />
          <Route exact path="/drinkory" component={Drinkory} />
          <Route exact path="/sessions/" component={Sessions} />
          <Route exact path="/end/" component={End} />

          {/* <Route exact path="/sessions/:id" component={Sessions} /> */}
      </Switch>
    </div>
    </Router>
      </div>

    );
  }
}

export default App;