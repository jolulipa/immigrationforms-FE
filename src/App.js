import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Intake from "./forms/Intake";
import I130 from "./forms/I130";
import I130A from "./forms/I130A";
import N400 from "./forms/N400";
import WelcomePage from "./screens/WelcomePage";
import LandingPage from "./screens/LandingPage";
import LoginPage from "./screens/LoginPage";
import AdminPage from "./screens/AdminPage";
import Contact from "./screens/Contact";
import Registration from "./screens/Registration";
import Unauthorized from "./components/Unauthorized";
import PrivateRoute from "./components/PrivateRoute";
import UsersPage from "./screens/UsersPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/forms/Intake" component={Intake} />
        <Route path="/screens/LoginPage" component={LoginPage} />
        <Route path="/screens/Registration" component={Registration} />
        <Route path="/screens/LandingPage" component={LandingPage} />
        <Route path="/screens/Contact" component={Contact} />
        <PrivateRoute path="/forms/i130" component={I130} />
        <PrivateRoute path="/forms/i130A" component={I130A} />
        <PrivateRoute path="/forms/n400" component={N400} />
        <Route path="/unauthorized" component={Unauthorized} />
        <PrivateRoute path="/screens/AdminPage" component={AdminPage} />
        <Route path="/screens/UsersPage" component={UsersPage} />
        <Route path="/" component={WelcomePage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
