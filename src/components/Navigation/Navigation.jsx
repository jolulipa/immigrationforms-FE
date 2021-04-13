import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Navigation = () => (
  <div className="super-root">
    <div className="line-container">
      <div className="col-6">The Immigration Time</div>
      <div className="col">
        Servicios 24/7
        <div>Envíe email</div>
      </div>
      <div className="col">
        E-mail
        <div>john@gmail.com</div>
      </div>
      <div className="col">
        Estámos
        <div>En todo el mundo</div>
      </div>
    </div>
    <div className="row navbar">
      <div className="col-1">Bienvenido</div>
      <Link to="/" className="col-1">
        HOME
      </Link>
      <Link to="/about" className="col-1">
        ABOUT
      </Link>
      <Link to="/screens/LandingPage" className="col-1">
        SERVICES
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
