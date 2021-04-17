import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
// import Navigation from "./components/Navigation";
import Navbar from "./components/Navbar";
import Intake from "./forms/Intake";
import I130 from "./forms/I130";
import I130A from "./forms/I130A";
import N400 from "./forms/N400";
import WelcomePage from "./screens/WelcomePage";
import LandingPage from "./screens/LandingPage";
import LoginPage from "./screens/LoginPage";
import AboutPage from "./screens/AboutPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/forms/Intake">
          <Intake />
        </Route>
        <Route path="/screens/LoginPage">
          <LoginPage />
        </Route>
        <Route path="/screens/LandingPage">
          <LandingPage />
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
          <AboutPage />
        </Route>
        <Route path="/">
          <WelcomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
