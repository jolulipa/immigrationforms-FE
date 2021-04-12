import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const WellcomePage = () => {
  return (
    <div className="container">
      <h2>BIENVENIDO A THE IMMIGRATION TIME</h2>
      <div className="row">
        <p>
          The Immigration Time ofrece cualquier servicio de immigración para los
          Estados Unidos de America. Para iniciar el proceso debe resitrarse al
          llenar un formulario que es el primer paso para iniciar los
          procedimientos necesarios para ayudarle a conseguir sus objetivos
          migratorios.
        </p>
        <Link to="/forms/Intake">REGISTRARSE</Link>
      </div>
    </div>
  );
};

export default WellcomePage;
