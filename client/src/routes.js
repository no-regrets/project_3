import React from 'react';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import App from './App';
import Home from './Home/Home';
import Profile from './Profile/Profile';
import Sessions from './pages/Sessions/Sessions';
import Callback from './Callback/Callback';
import LoginPage from './pages/LoginPage/LoginPage'
import Auth from './Auth/Auth';
import history from './history';

const auth = new Auth();

const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
};
const NoMatch = () => <h3>No match</h3>;

export const makeMainRoutes = () => {
  return (
      <Router history={history}>
        <Switch>
          <Route
            exact
            path="/home"
            render={props => <App auth={auth} {...props} />}
          />
          <Route
            exact
            path="/"
            render={props => <App auth={auth} {...props} />}
          />
          <Route
            exact
            path="/profile"
            render={props => <Profile auth={auth} {...props} />}
          />
          <Route
            exact
            path="/callback"
            render={props => {
              handleAuthentication(props);
              return <Callback {...props} />;
            }}
          />

          <Route component={NoMatch} />
        </Switch>
      </Router>
  );
};
