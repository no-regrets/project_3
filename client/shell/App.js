import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import End from "./pages/End/End";
import Drinkory from "./pages/Drinkory/Drinkory";
import Sessions from "./pages/Sessions/Sessions";
import Start from "./pages/Start/Start";

function App() {
  return (
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
  );
}

export default App;
