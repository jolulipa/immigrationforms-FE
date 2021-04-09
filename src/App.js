import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import I130 from "./forms/I130";
import I130A from "./forms/I130A";
import LandingPage from "./screens/LandingPage";
import LoginPage from "./screens/LoginPage";
import N400 from "./forms/N400";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/screens/LoginPage">
          <LoginPage />
        </Route>
        <Route path="/forms/i130">
          <I130 />
        </Route>
        <Route path="/forms/i130A">
          <I130A />
        </Route>
        <Route path="/forms/n400">
          <N400 />
        </Route>
        <Route path="/about">
          <div>Aqui va el componente about</div>
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
