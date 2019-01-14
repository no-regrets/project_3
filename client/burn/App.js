import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Users from "./pages/Users/Users";
import Sessions from "./pages/Sessions/Sessions";
import Drinks from "./pages/Drinks/Drinks";

function App() {
  return (
    <Router>
    <div>
      <Nav />
      {/* <Nav />
      <Users />
      <Sessions />
      <Drinks /> */}
      {/*CASEY - GIVE SOMETHING LIKE THE BELOW A SHOT FOR YOUR PAGES*/}
      <Switch>
          <Route exact path="/" component={Users} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/users/:id" component={Sessions} />
          <Route exact path="/sessions/" component={Sessions} />
          {/* <Route exact path="/sessions/:id" component={Sessions} /> */}
          <Route exact path="/drinks" component={Drinks} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
