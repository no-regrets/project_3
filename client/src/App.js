import React from "react";
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
    </div>
  );
}

export default App;
