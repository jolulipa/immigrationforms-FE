import { NavLink, useHistory } from "react-router-dom";
import Burger from "./Burger";
import { AUTH_TOKEN } from "../../constants/storageKeys";
import { useAppContext } from "../../context/Provider";
import "./styles.css";

const Navbar = () => {
  const { state, updateEmail } = useAppContext();
  const { email } = state;
  const history = useHistory();

  const navigateToWelcome = () => {
    history.push("/screens/Welcome");
  };

  const handleLogout = () => {
    localStorage.removeItem(AUTH_TOKEN);
    updateEmail("");
    alert(`You're out`);
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
          E-mail
          <div>negocio@gmail.com</div>
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
        <NavLink
          to="/screens/AdminPage"
          className="col-1 d-none d-md-block d-lg-block d-xl-block"
        >
          ADMIN
        </NavLink>
        <Burger className="d-md-none d-lg-none d-xl-block" />
      </div>
    </div>
  );
};

export default Navbar;
