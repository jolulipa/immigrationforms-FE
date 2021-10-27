import { Link } from "react-router-dom";
import styled from "styled-components";

const Menu = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #c3dffa;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 50vh;
    width: 250px;
    padding-top: 60px;

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
          paddingBottom: "20px",
        }}
      >
        HOME
      </Link>

      <Link
        to="/screens/LandingPage"
        className="h5"
        onClick={onClose}
        style={{
          paddingBottom: "20px",
        }}
      >
        SERVICES
      </Link>
      <Link
        to="/screens/contact"
        className="h5"
        onClick={onClose}
        style={{
          paddingBottom: "20px",
        }}
      >
        CONTACT
      </Link>
      <Link
        to="/screens/LoginPage"
        className="h5"
        onClick={onClose}
        style={{
          paddingBottom: "20px",
        }}
      >
        LOGIN
      </Link>
      <Link
        to="/screens/AdminPage"
        className="h5"
        onClick={onClose}
        style={{
          paddingBottom: "20px",
        }}
      >
        ADMIN
      </Link>
    </Menu>
  );
};
export default RightNav;
