import { colors } from "../../ui-config/colors";
import { Link } from "react-router-dom";

const UsersPage = (props) => {
  return (
    <div className="container">
      <h2 style={styles.title}>
        BIENVENIDO Sr. Usuario A THE IMMIGRATION TIME
      </h2>
      <div className="row">
        <button className="col-md-4 offset-md-4" onClick={props.handleLogout}>
          Log Out
        </button>
        <p style={styles.paragraph}>
          Esta es su bandeja de usuario. Aqui podrá crear y llenar formularios
          de servicios, borrar y/o modificar formuilarios y servicios.
        </p>
        <ul>
          <li>
            <Link to="/forms/Intake" className="badge badge-pill badge-info">
              Formulario de Intake
            </Link>
          </li>
          <li>Otros formularios</li>
        </ul>
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
export default UsersPage;
