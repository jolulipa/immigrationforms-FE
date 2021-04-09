import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Navigation = () => (
  <div className="super-root">
    <div className="line-container">
      <div className="col-6">The Immigration Time</div>
      <div className="col">
        Nuestro Tel. 24/7
        <div>+1-212-787-8777</div>
      </div>
      <div className="col">
        E-mail
        <div>john@gmail.com</div>
      </div>
      <div className="col">
        Location
        <div>New York, USA</div>
      </div>
    </div>
    <div className="row">
      <div className="col-1">Bienvenido</div>
      <Link to="/" className="col-1">
        HOME
      </Link>
      <Link to="/about" className="col-1">
        ABOUT
      </Link>
      <Link to="/team" className="col-1">
        TEAM
      </Link>
      <Link to="/contact" className="col-1">
        CONTACT
      </Link>
      <Link to="/screens/LoginPage" className="col-1">
        LOGIN
      </Link>
    </div>
  </div>
);

export default Navigation;
