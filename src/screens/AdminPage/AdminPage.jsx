import { Link } from "react-router-dom";
import { colors } from "../../ui-config/colors";
const AdminPage = () => {
  return (
    <div className="container">
      <h2 style={styles.title}>
        ADMINISTRACIÓN DE LA APP DE THE IMMIGRATION TIME
      </h2>
      <div className="row">
        <p style={styles.paragraph}>
          Esta es la herramenta de <strong>administración</strong> de la app.
          Aqui el administrador podrá borrar y/o modificar usuarios y
          formularios.
        </p>
        <Link
          to="/forms/Intake"
          className="col-md-4 offset-md-4 badge badge-pill badge-info"
        >
          ENTRAR
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
export default AdminPage;
