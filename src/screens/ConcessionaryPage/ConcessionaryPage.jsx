import { Table } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import { colors } from "../../ui-config/colors";
import { readUsers } from "../../api/auth";
import { CLIENT_DATA } from "../../constants/storageKeys";
import { useAppContext } from "../../context/Provider";
localStorage.removeItem(CLIENT_DATA);

const ConcessionaryPage = () => {
  const [results, setResults] = useState([]);
  const history = useHistory();
  const { state: context } = useAppContext();

  const navigateToUser = (id, email, role, feName) => {
    history.push({
      pathname: "/screens/UsersPage",
      state: {
        id,
        feName,
        email,
        role,
      },
    });
  };

  const deleteUser = (id) => {
    console.log(id);
  };

  const renderResults = () =>
    results.map((el) => (
      <>
        {el.role !== "adm" && (
          <tr key={el.id} className="text-white">
            <td>{el?.email}</td>
            <td>
              <Button
                className="btn btn-danger btn-sm "
                onClick={() => {
                  deleteUser(el.id);
                }}
              >
                Delete
              </Button>
            </td>
            <td className="	">{el?.role}</td>
            <td className="	">{el?.createdAt.split("T")[0]}</td>
            <td className="	">{el?.updatedAt.split("T")[0]}</td>
            <td>
              <Button
                className="btn-primary btn-sm"
                onClick={() => {
                  const cliEmail = el.email;
                  const cliName = el.name;
                  const cliUser = el.id;
                  localStorage.setItem(
                    CLIENT_DATA,
                    JSON.stringify({ cliEmail, cliName, cliUser })
                  );
                  navigateToUser(el.id, el.email, el.role, el.name);
                }}
              >
                User Forms
              </Button>
            </td>
          </tr>
        )}
      </>
    ));

  const renderTable = (results) => (
    <Table striped variant="dark">
      <thead>
        <tr key={results.id}>
          <th>User email</th>
          <th className="	">Delete Acc</th>
          <th className="	">Role</th>
          <th className="	">Created on</th>
          <th className="	">Modified on</th>
          <th>Go To:</th>
        </tr>
      </thead>
      <tbody>{renderResults(results)}</tbody>
    </Table>
  );

  // La responsabilidad de esto es cargar la data
  useEffect(() => {
    if (context.intake.role !== "con") {
      alert(`You're not an concessionary`);
      navigateToUser(context.intake.userId, context.intake.role);
    }
    (async () => {
      const { results } = await readUsers();
      setResults(results);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container p-3 my-3 bg-dark text-white">
      <h2 style={styles.title}>
        CONCESIONARIO DE LA APP DE THE IMMIGRATION TIME
      </h2>
      <h4 style={styles.title}>
        CLIENTES DEL CONCESIONARIO:{" "}
        <span style={styles.name}>{context?.intake?.fullName}</span>
      </h4>
      <div className="row d-flex justify-content-center">
        <div>
          <p style={styles.paragraph}>
            Esta es la herramenta de <strong>administración</strong> para
            CONCESIONARIOS de la app. Aqui el concesionario podrá borrar y/o
            modificar perfiles y formularios de sus clientes.
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
    color: colors.gray,
  },
  variable: {
    fontWeight: "800",
    padding: 15,
    color: colors.blue,
  },
  name: {
    fontWeight: "600",
    color: colors.red,
  },
};
export default ConcessionaryPage;
