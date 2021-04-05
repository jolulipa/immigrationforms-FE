import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Navigation = () => (
  <div className="super-root">
    <div className="line">Texto de prueba</div>
    <div className="root">
      <div>Un texto cualquiera</div>
      <Link to="/">Home</Link>
      <Link to="/forms/i130">I-130</Link>
      <Link to="/forms/i130A">I-130A</Link>
      <Link to="/forms/n400">N-400</Link>
    </div>
  </div>
);

export default Navigation;
