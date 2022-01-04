import { Link, NavLink, useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useAppContext } from "../../context/Provider";
import { AUTH_TOKEN, CLIENT_DATA } from "../../constants/storageKeys";
import { readConOffice } from "../../api/conAccess";
import "./styles.css";
import { AiOutlineUser } from "react-icons/ai";
import Burger from "./Burger";

const Navbar = () => {
  const {
    state: context,
    updateIntake,
    updateForms,
    updateConcessionary,
  } = useAppContext();
  const history = useHistory();

  const navigateToWelcome = () => {
    history.push(`/${context?.concessionary?.concessionary}`);
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
    alert(`You have logged out of the system`);
    navigateToWelcome();
  };

  useEffect(() => {
    (async () => {
      const officeData = await readConOffice(
        context?.concessionary?.concessionary
      );
      if (officeData.error) {
        officeData.officeName = "No Name Immigration";
        officeData.concessionary = context.concessionary.concessionary;
      }
      updateConcessionary(officeData);
    })();
  }, []);

  return (
    <>
      <div className="line-container navbar">
        <div
          className="col-6"
          style={{
            marginLeft: "30px",
            borderLeft: "5px solid rgb(107, 153, 245)",
          }}
        >
          The Immigration Time
        </div>
        <div
          className="col d-none d-md-block d-xl-block"
          style={{
            borderRight: "1px solid rgb(255, 17, 0)",
          }}
        >
          <Link
            to="/screens/ConcessionaryPage"
            style={{
              textDecoration: "none",
              color: "#fff",
            }}
          >
            Admin
          </Link>
        </div>
        <div
          className="col d-none d-md-block d-xl-block"
          style={{
            borderRight: "1px solid rgb(255, 17, 0)",
          }}
        >
          <Link
            to="/screens/UsersPage"
            style={{
              textDecoration: "none",
              color: "#fff",
            }}
          >
            Clients
          </Link>
        </div>

        <div
          style={{
            marginLeft: 10,
            marginRight: 10,
            fontSize: 16,
          }}
          className="d-none d-md-block d-xl-block text-light"
        >
          {!!context.intake.fullName && `${context?.intake?.fullName}`}
          {
            <AiOutlineUser
              style={{
                marginLeft: 10,
                fontSize: 18,
              }}
            />
          }
        </div>
      </div>

      <div
        className="row navbar "
        style={{
          height: "9vh",
          borderBottom: "5px solid rgb(243, 243, 243)",
          fontSize: "18px",
        }}
      >
        <div
          className="col-6 text-responsive"
          style={{
            marginLeft: 10,
            color: "red",
            fontFamily: "cursive",
          }}
        >
          Oficina:&ensp;
          <span
            className="text-responsive"
            style={{
              fontWeight: 700,
              color: "rgb(36, 95, 128)",
              textShadow: "0 0 1px gray",
            }}
          >
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
          style={{
            marginRight: "50px",
            maxWidth: "75px",
          }}
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

export default Navbar;
