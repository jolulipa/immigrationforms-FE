import React from "react";
import { Link } from "react-router-dom";
import { colors } from "../../ui-config/colors";

const Footer = () => {
  return (
    <footer className="container bg-light">
      <p style={styles.paragraph}>
        {" "}
        Síguenos en las Redes Sociales ___-___ Copyright &copy; The Immigration
        Times, 2021
      </p>
      <Link to="/screens/contact" className="col-md-4 offset-md-4">
        contactenos
      </Link>
    </footer>
  );
};

const styles = {
  paragraph: {
    textAlign: "center",
    fontSize: 14,
    paddingTop: 40,
    margin: 0,
    color: colors.brown,
  },
};

export default Footer;
