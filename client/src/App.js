import React, { Component } from 'react';
import { Button } from "react-materialize";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import End from "./pages/End/End";
// import Drinkory from "./pages/Drinkory/Drinkory";
// import Sessions from "./pages/Sessions/Sessions";
// import Start from "./pages/Start/Start";
// import LoginPage from './pages/LoginPage';
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

  // componentDidMount() {
  //   const { renewSession } = this.props.auth;

  //   if (localStorage.getItem('isLoggedIn') === 'true') {
  //     renewSession();
  //   }
  // }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      // <div>
      //   <Router>
    <div>
            <div>
            <Button
              bsstyle="primary"
              className="btn-margin"
              onClick={this.goTo.bind(this, 'profile')}
            >
              Profile
            </Button>
            {
              !isAuthenticated() && (
                  <Button
                    id="qsLoginBtn"
                    bsstyle="primary"
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
                    bsstyle="primary"
                    className="btn-margin"
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </Button>
                )
            }

        {/* <Button onClick={this.lock.show()}>Lock Login</Button> */}
      </div>
      {/* <LoginPage auth={this.props.auth} /> */}
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