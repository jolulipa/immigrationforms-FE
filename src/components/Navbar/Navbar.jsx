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
        <div className="col d-none d-md-block d-xl-block">
          <Link
            style={{
              textDecoration: "none",
              color: "#fff",
            }}
            to="/screens/ConcessionaryPage"
          >
            Admin
          </Link>
        </div>
        <div className="col d-none d-md-block d-xl-block">
          <Link
            style={{
              textDecoration: "none",
              color: "#fff",
            }}
            to="/screens/UsersPage"
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
        <Burger className="d-md-none d-lg-none d-xl-block" />
      </div>
      <div
        className="row navbar sndLine"
        style={{
          background: "#fff",
        }}
      >
        <div
          className="col-6"
          style={{
            marginLeft: 10,
            fontSize: 25,
            color: "red",
            fontFamily: "cursive",
          }}
        >
          Oficina:&ensp;
          <span style={{ fontSize: 25, fontWeight: 700, color: "#011e4d" }}>
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
          onClick={
            context.intake.email ? (
              handleLogout
            ) : (
              <NavLink
                style={{
                  textDecoration: "none",
                  color: "#fff",
                }}
                to="/screens/LoginPage"
              >
                LOG IN
              </NavLink>
            )
          }
        >
          {context.intake.email ? (
            `LOG OUT`
          ) : (
            <NavLink
              style={{
                textDecoration: "none",
                color: "#fff",
              }}
              to="/screens/LoginPage"
            >
              LOG IN
            </NavLink>
          )}
        </button>
      </div>
    </>
  );
};

export default Navbar;
