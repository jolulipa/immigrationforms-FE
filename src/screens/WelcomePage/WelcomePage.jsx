import { Link } from "react-router-dom";
import { colors } from "../../ui-config/colors";
import { AUTH_TOKEN, APP_STORE_NAME } from "../../constants/storageKeys";
import {useUpdateAppContext} from "../../AppContextProvider";

const WelcomePage = () => {
  const updater = useUpdateAppContext();

  const handleLogout = () => {
    localStorage.removeItem(AUTH_TOKEN);
    localStorage.removeItem(APP_STORE_NAME);
    updater({email: ''});
    alert(`You're out`);
  };
  return (
    <div className="container">
      <h2 style={styles.title}>BIENVENIDO A THE IMMIGRATION TIME</h2>
      <div className="d-flex align-items-center justify-content-center">
        <button className="btn btn-danger" type="button" onClick={handleLogout}>
          Log out
        </button>
      </div>
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
        <div className="d-flex">
          <div className="p-2 col-10">
            <Link
              to="/screens/Registration"
              className="badge badge-pill badge-info"
            >
              REGISTRARSE
            </Link>
          </div>
          <div className="p-2 col-10">
            <Link
              to="/screens/UsersPage"
              className="badge badge-pill badge-info"
            >
              Bandeja de Usuario
            </Link>
          </div>
        </div>
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
