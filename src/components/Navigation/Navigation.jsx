import React from "react";
import {Link} from "react-router-dom";
import "./styles.css";

const Navigation = () => (
    <div className="super-root">
        <div className="line">Texto de prueba</div>
        <div className="root">
            <div>Un texto cualquiera</div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    </div>
);

export default Navigation;
