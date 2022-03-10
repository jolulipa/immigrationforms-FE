import { Link, NavLink, useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useAppContext } from "../../context/Provider";
import { readConOffice } from "../../api/conAccess";
import "./styles.css";
import { AiOutlineUser } from "react-icons/ai";
import Burger from "./Burger";
// import Logout from "../../components/Logout/Logout";
import { AUTH_TOKEN, CLIENT_DATA } from "../../constants/storageKeys";

const Navbar = () => {
  const url = new URL(window.location.href);
  const concessionaryId = url.searchParams.get("concessionaryId");
  const {
    state: context,
    updateConcessionary,
    updateIntake,
    updateForms,
  } = useAppContext();
  const history = useHistory();
  console.log(
    "Navbar - ConcessionaryID:",
    concessionaryId,
    "|",
    context.concessionary.concessionary
  );

  const navigateToWelcome = () => {
    if (concessionaryId) {
      history.push(`/${concessionaryId}`);
    } else {
      history.push(`/${context.concessionary.concessionary}`);
    }
  };

  const navigateToLogin = () => {
    history.push("/screens/LoginPage");
  };

  const handleLogout = () => {
    localStorage.removeItem(AUTH_TOKEN);
    localStorage.removeItem(CLIENT_DATA);
    updateIntake("");
    updateForms("");
    console.log("Local Storage Was Reset because of logout");
    alert(`You have logged out from the Immigration App`);
    navigateToWelcome();
  };

  useEffect(() => {
    (async () => {
      const officeData = await readConOffice(
        !context.concessionary.concessionary
          ? concessionaryId
          : context.concessionary.concessionary
      );
      if (officeData.error) {
        officeData.officeName = "No Concessionary Data";
        officeData.concessionary = context.concessionary.concessionary;
      }
      updateConcessionary(officeData);
    })();
  }, []);

  return (
    <>
      <div className="line-container navbar">
        <div className="col-6" style={styles.cia}>
          The Immigration Time
        </div>
        <div
          className="col d-none d-md-block d-xl-block"
          style={styles.rayaRoja}
        >
          <Link to="/screens/ConcessionaryPage" style={styles.link}>
            Admin
          </Link>
        </div>
        <div
          className="col d-none d-md-block d-xl-block"
          style={styles.rayaRoja}
        >
          <Link to="/screens/UsersPage" style={styles.link}>
            Clients
          </Link>
        </div>

        <div
          style={styles.user}
          className="d-none d-md-block d-xl-block text-light"
        >
          {!!context.intake.fullName && `${context.intake.fullName}`}
          {<AiOutlineUser style={styles} />}
        </div>
      </div>

      <div className="row navbar " style={styles.firstRow}>
        <div className="col-6 text-responsive" style={styles.rayita}>
          Oficina:&ensp;
          <span className="text-responsive" style={styles.secondRow}>
            {context?.concessionary?.officeName}
          </span>
        </div>
        <NavLink
          to={`/?concessionaryId=${context?.concessionary?.concessionary}`}
          className="col-1  d-none d-md-block d-lg-block d-xl-block red-input"
        >
          HOME
        </NavLink>
        <NavLink
          to="/screens/LandingPage"
          className="col-1 d-none d-md-block d-lg-block d-xl-block red-input"
        >
          SERVICES
        </NavLink>
        <NavLink
          to="/screens/ContactPage"
          className="col-1 d-none d-md-block d-lg-block d-xl-block red-input"
        >
          CONTACT
        </NavLink>
        <button
          style={styles.button}
          className="btn btn-danger font-weight-light d-none d-md-block d-lg-block d-xl-block"
          type="button"
          onClick={context.intake.email ? handleLogout : navigateToLogin}
        >
          {context.intake.email ? `LOG OUT` : "LOG IN"}
        </button>
      </div>
      <Burger className="d-md-none d-lg-none d-xl-block" />
    </>
  );
};
const styles = {
  cia: {
    marginLeft: "30px",
    borderLeft: "5px solid rgb(107, 153, 245)",
  },
  firstRow: {
    height: "9vh",
    borderBottom: "5px solid rgb(243, 243, 243)",
    fontSize: "18px",
  },
  secondRow: {
    fontWeight: 600,
    color: "rgb(36, 95, 128)",
    textShadow: "0 0 1px gray",
  },
  user: {
    marginLeft: 10,
    marginRight: 10,
    fontSize: 16,
  },
  button: {
    marginRight: "50px",
    maxWidth: "75px",
  },
  link: {
    textDecoration: "none",
    color: "#fff",
  },
  rayaRoja: {
    borderRight: "1px solid rgb(255, 17, 0)",
  },
  icon: {
    marginLeft: 10,
    fontSize: 18,
  },
  rayita: {
    marginLeft: 10,
    color: "red",
  },
};
export default Navbar;
