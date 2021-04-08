import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Navigation = () => (
  <div className="super-root">
    <div className="line-container">
      <div className="line-1">The Immigration Time</div>
      <div className="line-2">
        Nuestro Tel. 24/7
        <div>+1-212-787-8777</div>
      </div>
      <div className="line-2">
        E-mail
        <div>john@gmail.com</div>
      </div>
      <div className="line-2">
        Location
        <div>New York, USA</div>
      </div>
    </div>
    <div className="root">
      <div>Registrarse/Log in</div>
      <Link to="/">HOME</Link>
      <Link to="/about">ABOUT</Link>
      <Link to="/team">TEAM</Link>
      <Link to="/contact">CONTACT</Link>
      <Link to="/login">LOGIN</Link>
    </div>
  </div>
);

export default Navigation;
