import React, { useState } from "react";
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
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [user, setUser] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
    setUser(true);
  };
  const handleLogout = (e) => {
    e.preventDefault();
    setUser(false);
  };
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/forms/Intake" component={Intake} />
        <Route path="/screens/LoginPage" component={LoginPage} />
        <Route path="/screens/Registration" component={Registration} />
        <Route path="/screens/LandingPage" component={LandingPage} />
        <Route path="/screens/Contact" component={Contact} />
        <Route path="/forms/i130" component={I130} />
        <Route path="/forms/i130A" component={I130A} />
        <Route path="/forms/n400" component={N400} />
        <Route path="/unauthorized" component={Unauthorized} />
        <ProtectedRoute
          path="/screens/AdminPage"
          user={user}
          handleLogout={handleLogout}
          component={AdminPage}
        />
        <Route
          path="/"
          handleLogin={handleLogin}
          render={(props) => (
            <WelcomePage
              {...props}
              user={user.toString()}
              handleLogin={handleLogin}
            />
          )}
        />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
