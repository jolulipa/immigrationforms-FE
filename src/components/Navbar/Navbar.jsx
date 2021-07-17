import { NavLink, useHistory } from "react-router-dom";
import "./styles.css";
import Burger from "./Burger";
import { AUTH_TOKEN, APP_STORE_NAME } from "../../constants/storageKeys";
import { useAppContext, useUpdateAppContext } from "../../AppContextProvider";

const Navbar = () => {
  const { email } = useAppContext();
  let eMailx = email;
  console.log("eMailx Inicio=", eMailx);
  const updater = useUpdateAppContext();
  const history = useHistory();
  const globalUpdate = useUpdateAppContext();

  const navigateToWelcome = () => {
    history.push("/screens/Welcome");
  };

  const handleLogout = () => {
    localStorage.removeItem(AUTH_TOKEN);
    localStorage.removeItem(APP_STORE_NAME);
    updater({ email: "" });
    // globalUpdate();
    eMailx = "";
    console.log("eMailx logout=", eMailx);
    console.log("Updater=", updater);
    console.log("email=", email);
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
          {eMailx ? `Bienvenido ${eMailx}` : ""}
          <button
            className="badge badge-pill badge-danger font-weight-light"
            type="button"
            onClick={handleLogout}
          >
            {eMailx ? `Logout` : "No User"}
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
