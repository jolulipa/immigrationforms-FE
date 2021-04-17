import React from "react";
import { Link } from "react-router-dom";
import { colors } from "../../ui-config/colors";
const WelcomePage = () => {
  return (
    <div className="container">
      <h2 style={styles.title}>BIENVENIDO A THE IMMIGRATION TIME</h2>
      <div className="row">
        <p style={styles.paragraph}>
          The Immigration Time ofrece cualquier servicio de immigración para
          migrantes a los Estados Unidos de America. Para iniciar el proceso con
          The Immigration Time, es necesario registrarse, llenando un
          formulario. Este formulario es el primer paso para iniciar los
          procedimientos necesarios para ayudarle a conseguir sus objetivos
          migratorios.
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
    paddingTop: 20,
    fontWeight: "500",
    textAlign: "center",
    color: colors.brown,
  },

  paragraph: {
    textAlign: "justify",
    fontSize: 18,
    padding: 15,
    margin: 0,
    color: colors.brown,
  },
};
export default WelcomePage;
