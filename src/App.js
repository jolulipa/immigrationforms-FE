import React from "react";
import AppContextProvider from "./context/Provider";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Registration from "./screens/Registration";
import LoginPage from "./screens/LoginPage";
import Intake from "./forms/Intake";
import Concessionary from "./forms/Concessionary";
import Concessionaries from "./concessionaries/Concessionaries";
import I130 from "./forms/I130";
import I130A from "./forms/I130A";
import N400 from "./forms/N400";
import I485 from "./forms/I485";
import I90 from "./forms/I90";
import I765 from "./forms/I765";
import WelcomePage from "./screens/WelcomePage";
import LandingPage from "./screens/LandingPage";
import AdminPage from "./screens/AdminPage";
import ConcessionaryPage from "./screens/ConcessionaryPage";
import UsersPage from "./screens/UsersPage";
import Contact from "./screens/Contact";
import ContactPage from "./screens/ContactPage";
// import Unauthorized from "./components/Unauthorized";
import PrivateRoute from "./components/PrivateRoute";
import Jpeg1 from "./images/american-passports-and-flag.png";

function App() {
  return (
    <div
      className="bg"
      style={{
        backgroundImage: `url(${Jpeg1})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        resize: "both",
        overflow: "auto",
        minWidth: "100%",
        minHeight: "100vh",
      }}
    >
      <Router>
        <Navbar />
        <Switch>
          <Route path="/screens/LoginPage" component={LoginPage} />
          <Route path="/screens/Registration" component={Registration} />
          <Route path="/screens/LandingPage" component={LandingPage} />
          <Route path="/screens/ContactPage" component={ContactPage} />
          <Route path="/screens/Contact" component={Contact} />
          <Route path="/screens/Contact/:id" component={Contact} />
          <Route path="/concessionaries" component={Concessionaries} />
          {/* <Route path="/unauthorized" component={Unauthorized} />{" "} */}
          <PrivateRoute path="/forms/Intake/:id" component={Intake} />
          <PrivateRoute path="/forms/Intake" component={Intake} />
          <PrivateRoute path="/forms/i130/:id" component={I130} />
          <PrivateRoute path="/forms/i130" component={I130} />
          <PrivateRoute path="/forms/i130A/:id" component={I130A} />
          <PrivateRoute path="/forms/i130A" component={I130A} />
          <PrivateRoute path="/forms/i90/:id" component={I90} />
          <PrivateRoute path="/forms/i90" component={I90} />
          <PrivateRoute path="/forms/i485/:id" component={I485} />
          <PrivateRoute path="/forms/i485" component={I485} />
          <PrivateRoute path="/forms/i765/:id" component={I765} />
          <PrivateRoute path="/forms/i765" component={I765} />
          <PrivateRoute path="/forms/n400/:id" component={N400} />
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
          <Route path="*" component={WelcomePage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

const MyApp = () => (
  <AppContextProvider>
    <ToastContainer />
    <App />
  </AppContextProvider>
);

export default MyApp;
