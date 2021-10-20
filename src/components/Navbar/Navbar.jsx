import { Link, NavLink, useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useAppContext } from "../../context/Provider";
import "./styles.css";
import { AUTH_TOKEN, CLIENT_DATA } from "../../constants/storageKeys";
import { readConOffice } from "../../api/conAccess";

const Navbar = () => {
  const {
    state: context,
    updateIntake,
    updateForms,
    updateConcessionary,
  } = useAppContext();
  const history = useHistory();

  const navigateToWelcome = () => {
    history.push(`/${context.concessionary.concessionary}`);
    // window.location.href  url de la pagina actual
  };

  const handleLogout = () => {
    localStorage.removeItem(AUTH_TOKEN);
    localStorage.removeItem(CLIENT_DATA);
    updateIntake("");
    updateForms("");
    console.log("Local Storage Was Reset because of logout");
    alert(`You have logged out of the system`);
    navigateToWelcome();
  };

  useEffect(() => {
    (async () => {
      const officeData = await readConOffice(
        context.concessionary.concessionary
      );
      if (officeData.error) {
        officeData.officeName = "No Name Immigration";
        officeData.concessionary = context.concessionary.concessionary;
      }
      updateConcessionary(officeData);
    })();
  }, []);

  return (
    <div className="super-root">
      <div className="line-container">
        <div className="col-6">{context?.concessionary?.officeName}</div>
        <div className="col d-none d-md-block d-xl-block">
          <Link to="/screens/ConcessionaryPage">ADMIN</Link>
          <div>
            <Link to="/screens/UsersPage">Clients</Link>
          </div>
        </div>
        <div className="col d-none d-md-block d-xl-block status">
          {!!context.intake.email && `Bienvenido ${context?.intake?.email}`}
          <button
            className="badge badge-pill badge-danger font-weight-light"
            type="button"
            onClick={handleLogout}
          >
            {context.intake.email ? `Logout` : "No User"}
          </button>
        </div>
      </div>
      <div className="row navbar">
        <NavLink
          to={`/?concessionaryId=${context?.concessionary?.concessionary}`}
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
