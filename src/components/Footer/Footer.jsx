import { Link } from "react-router-dom";
import { colors } from "../../ui-config/colors";

const Footer = () => {
  return (
    <footer className="container bg-light">
      <p style={styles.paragraph}>
        {" "}
        Copyright &copy; The Immigration Times, 2021. Síguenos en las Redes
        Sociales
      </p>
      <Link to="/screens/contact" className="row d-flex justify-content-center">
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
