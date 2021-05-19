import { Link } from "react-router-dom";
import { colors } from "../../ui-config/colors";
import { AUTH_TOKEN } from "../../constants/storageKeys";

const WelcomePage = () => {
  const handleLogout = () => {
    localStorage.removeItem(AUTH_TOKEN);
    alert(`You're out`);
  };
  return (
    <div className="container">
      <h2 style={styles.title}>BIENVENIDO A THE IMMIGRATION TIME</h2>
      <button type="button" onClick={handleLogout}>
        Log out
      </button>
      <div className="row">
        <p style={styles.paragraph}>
          THE IMMIGRATION TIME es un servicio de trámites de migración en los
          Estados Unidos. Es un servicio en linea que facilita a los hispanos
          los trámites migratorios en los Estados Unidos de Norteamerica.
          Nuestros servicios son siempre entregados con responsabilidad, a
          tiempo y a precios asequibles para nuestra comunidad.
        </p>
        <p style={styles.paragraph}>
          The Immigration Time ofrece cualquier servicio de immigración para
          migrantes a los Estados Unidos de America. Para iniciar el proceso con
          The Immigration Time, es necesario registrarse, llenando un
          formulario. Este formulario es el primer paso para iniciar los
          procedimientos necesarios para ayudarle a conseguir sus objetivos
          migratorios.
        </p>
        <Link
          to="/screens/Registration"
          className="col-md-4 offset-md-4 badge badge-pill badge-info"
        >
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
