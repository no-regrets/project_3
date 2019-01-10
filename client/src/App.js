// import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Nav from "./components/Nav";
// import Users from "./pages/Users/Users";
// import Sessions from "./pages/Sessions/Sessions";
// import Drinks from "./pages/Drinks/Drinks";

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
import './App.css';

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

    
// // var lock = new Auth0Lock('BNboUTXnoHw0YR7BC-zR2r7gEjU3sJJ0', 'wkruger.auth0.com', {
//   var options = {
//     auth: {
//     redirectUrl: 'http://localhost:3000/callback',
//     responseType: 'code',
//     params: {
//       scope: 'openid email' // Learn about scopes: https://auth0.com/docs/scopes
//     }
//   },
//   additionalSignUpFields: [
//     {
//       name: "sex",
//       placeholder: "your sex"
//     },
//     {
//       name: "weight",
//       placeholder: "your weight in lbs",
//       validator: function (weight) {
//         return {
//           valid: weight = Number,
//           hint: "Please enter a number"
//         }
//       }
//     }]
//   }

// // var lock = new Auth0Lock('BNboUTXnoHw0YR7BC-zR2r7gEjU3sJJ0', 'wkruger.auth0.com', options);
// var lock = new Auth0Lock('pVTfYsTtf95n63QjfX3EfJMUBi1RCN2t', 'wkruger.auth0.com', options);
// lock.on("authenticated", function (authResult) {
//   lock.getUserInfo(authResult.accessToken, function (error, profile) {
//     if (error) {
//       console.log("error hit: " + error);
//       return;
//     }
//     console.log("access token retrieved");
//     document.getElementById('nick').textContent = profile.nickname;

//     localStorage.setItem('accessToken', authResult.accessToken);
//     localStorage.setItem('profile', JSON.stringify(profile));
//   })
// })

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
      </div>

    );
  }
}

export default App;