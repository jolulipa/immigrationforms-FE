import { Link } from "react-router-dom";
import "./styles.css";

const Footer = () => {
  return (
    <div className="footer fixed-bottom">
      <div
        style={{
          paddingTop: "10px",
          paddingBottom: "15px",
          borderBottom: ".5px solid rgb(107, 153, 245)",
        }}
      >
        <Link
          style={{
            textDecoration: "none",
            color: "rgb(5, 252, 66)",
          }}
          to="/screens/contact"
        >
          Contactenos
        </Link>
      </div>
      <div className="" style={{ paddingTop: "10px" }}>
        Copyright &copy; The Immigration Times, 2021. Síguenos en las Redes
        Sociales
      </div>
    </div>
  );
};

export default Footer;
