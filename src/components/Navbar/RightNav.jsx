import { Link } from "react-router-dom";
import styled from "styled-components";

const Menu = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: column nowrap;

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #154c79;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 40vh;
    width: 20vh;
    padding-top: 8vh;
    border: 0.5vh;
    border-style: solid;
    border-color: #2c5e86;
    border-radius: 25px;

    transition: transform 0.3s ease-in-out;
  }
`;

const RightNav = ({ open, onClose }) => {
  return (
    <Menu open={open} className="d-md-none d-lg-none d-xl-none">
      <Link
        to="/"
        className="h5"
        onClick={onClose}
        style={{
          paddingBottom: "2.5vh",
          decorations: "none",
          color: "white",
        }}
      >
        HOME
      </Link>

      <Link
        to="/screens/LandingPage"
        className="h5"
        onClick={onClose}
        style={{
          paddingBottom: "2.5vh",
          decorations: "none",
          color: "white",
        }}
      >
        SERVICES
      </Link>
      <Link
        to="/screens/ContactPage"
        className="h5"
        onClick={onClose}
        style={{
          paddingBottom: "2.5vh",
          decorations: "none",
          color: "white",
        }}
      >
        CONTACT
      </Link>
      <Link
        to="/screens/LoginPage"
        className="h5"
        onClick={onClose}
        style={{
          paddingBottom: "2.5vh",
          decorations: "none",
          color: "white",
        }}
      >
        LOGIN
      </Link>
      <Link
        to="/screens/AdminPage"
        className="h5"
        onClick={onClose}
        style={{
          paddingBottom: "2.5vh",
          decorations: "none",
          color: "white",
        }}
      >
        ADMIN
      </Link>
    </Menu>
  );
};
export default RightNav;
