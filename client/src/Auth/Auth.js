import auth0 from 'auth0-js';
import {
  AUTH_CONFIG
} from './auth0-variables';
import history from '../history';

export default class Auth {
  accessToken;
  idToken;
  expiresAt;
  userProfile;

  auth0 = new auth0.WebAuth({
    domain: AUTH_CONFIG.domain,
    clientID: AUTH_CONFIG.clientId,
    redirectUri: "http://localhost:3000/callback",//"http://noregrets-project3.herokuapp.com/callback",
    responseType: 'token id_token',
    scope: 'openid profile'
  });

  // auth0.signup({
  //   connection: 'CONNECTION',
  //   email: 'EMAIL',
  //   password: 'PASSWORD',
  //   user_metadata: {
  //     plan: 'silver',
  //     team_id: 'a111'
  //   }
  // }, function (err) {
  //   if (err) return alert('Something went wrong: ' + err.message);
  //   return alert('success signup without login!')
  // });

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getAccessToken = this.getAccessToken.bind(this);
    this.getIdToken = this.getIdToken.bind(this);
    this.renewSession = this.renewSession.bind(this);
    this.getUserInfo = this.getUserInfo.bind(this);
  }

  login() {
    this.auth0.authorize();
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      console.log('authresult is: ' + authResult);
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
      } else if (err) {
        history.replace('/login');
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
      } else {
        console.log('no err but no authresult');
      }
    });
  }

  getAccessToken() {
    return this.accessToken;
  }

  getIdToken() {
    return this.idToken;
  }

  setSession(authResult) {
    // Set isLoggedIn flag in localStorage
    localStorage.setItem('isLoggedIn', 'true');
   

    // Set the time that the access token will expire at
    let expiresAt = (authResult.expiresIn * 1000) + new Date().getTime();
    this.accessToken = authResult.accessToken;
    this.idToken = authResult.idToken;
    this.expiresAt = expiresAt;

    // navigate to the profile route
    history.replace('/profile');
  }

  renewSession() {
    this.auth0.checkSession({}, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
      } else if (err) {
        this.logout();
        console.log(err);
        alert(`Could not get a new token (${err.error}: ${err.error_description}).`);
      }
    });
  }

  getUserInfo(cb) {
    this.auth0.client.userInfo(this.accessToken, (err, profile) => {
      if (profile) {
        this.userProfile = profile;
      }
      cb(err, profile);
    });
  }

  logout() {
    // Remove tokens and expiry time
    this.accessToken = null;
    this.idToken = null;
    this.expiresAt = 0;

    // Remove user profile
    this.userProfile = null;

    // Remove isLoggedIn flag from localStorage
    localStorage.removeItem('isLoggedIn');

    // navigate to the login route
    history.replace('/login');
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = this.expiresAt;
    return new Date().getTime() < expiresAt;
  }
}


// // GET THE USER INFORMATION
// // Gets the user information from Auth0 and dispatches it to the store.
// export const getUserInfo = () =>
//     console.log('This ran');
//       const webAuth = new auth0.WebAuth({
//         domain: AUTH_CONFIG.domain,
//         clientID: AUTH_CONFIG.clientId,
//       });

//       webAuth.client.userInfo(
//         this.accessToken,
//         (err, userData) => {
//           if (err) {
//             console.log(err);
//           }
//           const userInfo = {
//             email: userData.email,
//             sex: userData.user_metadata.sex,
//             weight: userData.user_metadata.weight,
//           };

//         },
//       );
