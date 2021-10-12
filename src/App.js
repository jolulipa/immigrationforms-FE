import React from "react";
import AppContextProvider from "./context/Provider";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Registration from "./screens/Registration";
import LoginPage from "./screens/LoginPage";
import Intake from "./forms/Intake";
import Concessionary from "./forms/Concessionary";
import I130A from "./forms/I130A";
import N400 from "./forms/N400";
import WelcomePage from "./screens/WelcomePage";
import LandingPage from "./screens/LandingPage";
import AdminPage from "./screens/AdminPage";
import ConcessionaryPage from "./screens/ConcessionaryPage";
import UsersPage from "./screens/UsersPage";
import Contact from "./screens/Contact";
import Unauthorized from "./components/Unauthorized";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/screens/LoginPage" component={LoginPage} />
        <Route path="/screens/Registration" component={Registration} />
        <Route path="/screens/LandingPage" component={LandingPage} />
        <Route path="/screens/Contact" component={Contact} />
        <Route path="/concessionaries" component={Concessionary} />
        <Route path="/unauthorized" component={Unauthorized} />
        <PrivateRoute path="/forms/Intake/:id" component={Intake} />
        <PrivateRoute path="/forms/Intake" component={Intake} />
        <PrivateRoute path="/forms/i130A" component={I130A} />
        <PrivateRoute path="/forms/n400" component={N400} />
        <PrivateRoute
          path="/forms/Concessionary/:id"
          component={Concessionary}
        />
        <PrivateRoute path="/forms/Concessionary" component={Concessionary} />
        <PrivateRoute path="/screens/AdminPage" component={AdminPage} />
        <PrivateRoute
          path="/screens/ConcessionaryPage"
          component={ConcessionaryPage}
        />
        <PrivateRoute path="/screens/UsersPage" component={UsersPage} />
        <Route path="/:concessionaryId" component={WelcomePage} />
        <Route path="/" component={WelcomePage} />
      </Switch>
    </Router>
  );
}

const MyApp = () => (
  <AppContextProvider>
    <ToastContainer />
    <App />
  </AppContextProvider>
);

export default MyApp;
