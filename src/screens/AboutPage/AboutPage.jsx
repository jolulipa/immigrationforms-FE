import React from "react";
import { Link } from "react-router-dom";
import { colors } from "../../ui-config/colors";
const AboutPage = () => {
  return (
    <div className="container">
      <h2 style={styles.title}>
        THE IMMIGRATION TIME es un servicio de trámites de migración en los
        Estados Unidos
      </h2>
      <div className="row">
        <p style={styles.paragraph}>
          The Immigration Time es un servicio en linea que facilita a los
          hispanos los trámites migratorios en los Estados Unidos de
          Norteamerica. Nuestros servicios son siempre entregados con
          responsabilidad, a tiempo y a precios asequibles para nuestra
          comunidad.
        </p>
        <Link to="/forms/Intake" className="col-10">
          REGISTRARSE
        </Link>
      </div>
    </div>
  );
};
const styles = {
  title: {
    fontWeight: "500",
    textAlign: "center",
    color: colors.brown,
    padding: 15,
  },

  paragraph: {
    textAlign: "justify",
    fontSize: 18,
    padding: 15,
    margin: 0,
    color: colors.brown,
  },
};
export default AboutPage;
