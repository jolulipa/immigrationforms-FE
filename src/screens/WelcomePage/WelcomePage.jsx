import { Link, useHistory } from "react-router-dom";
import { colors } from "../../ui-config/colors";
import Footer from "../../components/Footer";
import { useAppContext } from "../../context/Provider";

const WelcomePage = () => {
  const history = useHistory();
  const { state: context } = useAppContext();

  if (context.intake.role === "adm") {
    history.push("/screens/AdminPage");
  }

  return (
    <div className="container">
      <h2 style={styles.title}>BIENVENIDO A THE IMMIGRATION TIME</h2>
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
      </div>
      <div className="row d-flex justify-content-center">
        <Link
          to="/screens/Registration"
          className="badge badge-pill badge-danger align-items-between"
          style={styles.navigate}
        >
          REGISTRARSE
        </Link>

        <Link
          to="/screens/UsersPage"
          className="badge badge-pill badge-info"
          style={styles.navigate}
        >
          Bandeja de Usuario
        </Link>
      </div>
      <div className="card">
        <Footer />
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

  navigate: {
    fontSize: 14,
    padding: 7,
    marginLeft: 25,
    margin: 30,
    width: 180,
    height: 30,
  },
  navigate2: {
    verticalAlign: 10,
    fontSize: 12,
    paddingBottom: 15,
    paddingTop: 2,
    width: 80,
    height: 25,
  },
};
export default WelcomePage;
