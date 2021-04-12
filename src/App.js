import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Intake from "./forms/Intake";
import I130 from "./forms/I130";
import I130A from "./forms/I130A";
import N400 from "./forms/N400";
import WellcomePage from "./screens/WellcomePage";
import LandingPage from "./screens/LandingPage";
import LoginPage from "./screens/LoginPage";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/screens/LoginPage">
          <LoginPage />
        </Route>
        <Route path="/forms/Intake">
          <Intake />
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
        <Route path="/screens/LandingPage">
          <LandingPage />
        </Route>
        <Route path="/about">
          <div>Pagina del About </div>
        </Route>
        <Route path="/">
          <WellcomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
