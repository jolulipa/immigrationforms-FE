import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { colors } from "../../ui-config/colors";
import { readUsers } from "../../api/auth";

const AdminPage = () => {
  const [results, setResults] = useState([]);

  const deleteUser = (id) => {
    console.log(id);
  };

  const renderResults = () =>
    results.map((el) => (
      <tr>
        <td>{el?.email}</td>
        <td>{el?.createdAt.split("T")[0]}</td>
        <td>{el?.updatedAt.split("T")[0]}</td>
        <td>
          <Button
            className="btn btn-danger"
            onClick={() => {
              deleteUser(el.id);
            }}
          >
            Delete User
          </Button>
        </td>
        <td>
          <Button
            onClick={() => {
              console.log("ir a la pagina de este usuario");
            }}
          >
            User Forms
          </Button>
        </td>
      </tr>
    ));

  const renderTable = (results) => (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>User email</th>
          <th>Created on</th>
          <th>Modified on</th>
          <th></th>
          <th className="d-flex justify-content-center">Go To:</th>
        </tr>
      </thead>
      <tbody>{renderResults(results)}</tbody>
    </table>
  );

  // La responsabilidad de esto es cargar la data
  useEffect(() => {
    (async () => {
      const { results } = await readUsers();
      setResults(results);
    })();
  }, []);

  return (
    <div className="container ">
      <h2 style={styles.title}>
        ADMINISTRACIÓN DE LA APP DE THE IMMIGRATION TIME
      </h2>
      <div className="row d-flex justify-content-center">
        <div>
          <p style={styles.paragraph}>
            Esta es la herramenta de <strong>administración</strong> de la app.
            Aqui el administrador podrá borrar y/o modificar usuarios y
            formularios.
          </p>
        </div>
        <div>{renderTable(results)}</div>
      </div>
    </div>
  );
};
const styles = {
  title: {
    fontWeight: "700",
    textAlign: "center",
    color: colors.brown,
    padding: 15,
  },

  paragraph: {
    textAlign: "left",
    fontSize: 18,
    padding: 15,
    margin: 0,
    color: colors.brown,
  },
  variable: {
    fontWeight: "800",
    padding: 15,
    color: colors.blue,
  },
};
export default AdminPage;
