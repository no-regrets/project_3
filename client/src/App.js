import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Users from "./pages/Users"
import Sessions from "./pages/Sessions"
import Drinks from "./pages/Drinks";


function App() {
  return (
    <div>
      <Nav />
      <Users />
      <Sessions />
      <Drinks />
      {/*CASEY - GIVE SOMETHING LIKE THE BELOW A SHOT FOR YOUR PAGES*/}
      {/* <Switch>
          <Route exact path="/" component={Users} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/sessions/:id" component={Sessions} />
          <Route component={Drink} />
      </Switch> */}
    </div>
  );
}

export default App;
