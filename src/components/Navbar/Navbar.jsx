import { Link, NavLink, useHistory } from "react-router-dom";
import { useAppContext } from "../../context/Provider";
import "./styles.css";

const Navbar = () => {
  const { state, updateIntake, updateForms } = useAppContext();
  const history = useHistory();

  const navigateToWelcome = () => {
    history.push("/screens/Welcome");
  };

  const handleLogout = () => {
    localStorage.clear();
    updateIntake("");
    updateForms("");

    console.log("Local Storage Was Reset because of logout");
    alert(`You have logged out of the system`);
    navigateToWelcome();
  };
  return (
    <div className="super-root">
      <div className="line-container">
        <div className="col-6">The Immigration Time ADMIN</div>
        <div className="col d-none d-md-block d-xl-block">
          <Link to="/screens/ConcessionaryPage">ADMIN</Link>
          <div>
            <Link to="/screens/UsersPage">Clients</Link>
          </div>
        </div>
        <div className="col d-none d-md-block d-xl-block status">
          {!!state.intake.email && `Bienvenido ${state.intake.email}`}
          <button
            className="badge badge-pill badge-danger font-weight-light"
            type="button"
            onClick={handleLogout}
          >
            {state.intake.email ? `Logout` : "No User"}
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
