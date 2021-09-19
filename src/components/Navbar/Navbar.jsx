import { Link, NavLink, useHistory } from "react-router-dom";
// import Burger from "./Burger";
import { AUTH_TOKEN, CLIENT_DATA } from "../../constants/storageKeys";
import { INTAKE_TYPE } from "../../context/types";
import { useAppContext } from "../../context/Provider";
import "./styles.css";

const Navbar = () => {
  const { state } = useAppContext();
  const { email } = state.intake;
  const history = useHistory();

  const navigateToWelcome = () => {
    history.push("/screens/Welcome");
  };

  const handleLogout = () => {
    localStorage.removeItem(AUTH_TOKEN);
    localStorage.removeItem(CLIENT_DATA);
    localStorage.removeItem(INTAKE_TYPE);
    // localStorage.removeItem(EMAIL_TYPE);
    // updateEmail("");
    console.log("Local Storage Was Reset-logout");
    alert(`You have logged out of the system`);
    navigateToWelcome();
  };
  return (
    <div className="super-root">
      <div className="line-container">
        <div className="col-6">The Immigration Time</div>
        <div className="col">
          Servicios 24/7
          <div>Envíe email</div>
        </div>
        <div className="col d-none d-md-block d-xl-block">
          <Link to="/screens/ConcessionaryPage">ADMIN</Link>
          <div>
            <Link to="/screens/UsersPage">Clients</Link>
          </div>
        </div>
        <div className="col d-none d-md-block d-xl-block status">
          {!!email && `Bienvenido ${email}`}
          <button
            className="badge badge-pill badge-danger font-weight-light"
            type="button"
            onClick={handleLogout}
          >
            {email ? `Logout` : "No User"}
          </button>
        </div>
      </div>
      <div className="row navbar">
        <NavLink
          to="/"
          className="col-1  d-none d-md-block d-lg-block d-xl-block"
        >
          HOME
        </NavLink>
        <NavLink
          to="/screens/LandingPage"
          className="col-1 d-none d-md-block d-lg-block d-xl-block"
        >
          SERVICES
        </NavLink>
        <NavLink
          to="/screens/Contact"
          className="col-1 d-none d-md-block d-lg-block d-xl-block"
        >
          CONTACT
        </NavLink>
        <NavLink
          to="/screens/LoginPage"
          className="col-1 d-none d-md-block d-lg-block d-xl-block"
        >
          LOGIN
        </NavLink>
        {/* <NavLink
          to="/screens/AdminPage"
          className="col-1 d-none d-md-block d-lg-block d-xl-block"
        >
          ADMIN
        </NavLink>
        <Burger className="d-md-none d-lg-none d-xl-block" /> */}
      </div>
    </div>
  );
};

export default Navbar;
