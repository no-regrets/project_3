import React from 'react';
import { Redirect, Route, Router } from 'react-router-dom';
import App from './App';
import Home from './Home/Home';
import Profile from './Profile/Profile';
import Sessions from './pages/Sessions/Sessions';
import Callback from './Callback/Callback';
import LoginPage from './pages/LoginPage/LoginPage'
import Auth from './Auth/Auth';
import history from './history';

const auth = new Auth();

const handleAuthentication = ({location}) => {
  console.log(location);
  if (/access_token|id_token|error/.test(location.hash)) {
    console.log('i am in the hashing area');
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
    <Router history={history}>
        <div>
          {/* <Route path="/" render={(props) => <LoginPage auth={auth} {...props} />} /> */}
          <Route path="/" render={(props) => (
            !auth.isAuthenticated() ? (
              <Redirect to="/login"/>
            ) : (
              <Sessions auth={auth} {...props} />
            )
          )} />
          <Route path="/home" render={(props) => <App auth={auth} {...props} />} />
          <Route path="/login" render={(props) => <LoginPage auth={auth} {...props} />} />
          <Route path="/profile" render={(props) => (
            !auth.isAuthenticated() ? (
              <Redirect to="/login"/>
            ) : (
              <Profile auth={auth} {...props} />
            )
          )} />
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} /> 
          }}/>        
        </div>
      </Router>
  );
}
