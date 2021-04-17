import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Menu = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #c2daf1;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 250px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  }
`;

const RightNav = ({ open }) => {
  return (
    <Menu open={open} className="d-md-none d-lg-none d-xl-none">
      <Link to="/" className="h5">
        HOME
      </Link>
      <Link to="/about" className="h5">
        ABOUT
      </Link>
      <Link to="/screens/LandingPage" className="h5">
        SERVICES
      </Link>
      <Link to="/contact" className="h5">
        CONTACT
      </Link>
      <Link to="/screens/LoginPage" className="h5">
        LOGIN
      </Link>
    </Menu>
  );
};
export default RightNav;
