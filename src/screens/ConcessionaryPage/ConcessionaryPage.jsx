import { Table, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { colors } from "../../ui-config/colors";
import { readUsers } from "../../api/auth";
import { checkIntake, readAllFormsAdm } from "../../api/formsAccess";
import { CLIENT_DATA } from "../../constants/storageKeys";
import { useAppContext } from "../../context/Provider";

const ConcessionaryPage = () => {
  const [results, setResults] = useState([]);
  const history = useHistory();
  const { state } = useAppContext();
  const { updateForms } = useAppContext();

  const navigateToUser = async (id, email, role, feName) => {
    const response = await checkIntake(id);
    if (!response || (response?.status > 399 && response?.status < 500)) {
      history.push("/forms/Intake");
    } else {
      const forms = await readAllFormsAdm(id);
      await updateForms(forms);
      history.push({
        pathname: "/screens/UsersPage",
        state: {
          id,
          feName,
          email,
          role,
        },
      });
    }
  };

  const deleteUser = (id) => {
    console.log("ID a Borrar", id);
  };

  const renderResults = () =>
    results.map((el) => (
      <>
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
          <td>{el?.role}</td>
          <td>{el?.createdAt.split("T")[0]}</td>
          <td>{el?.updatedAt.split("T")[0]}</td>
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
              Client Forms
            </Button>
          </td>
        </tr>
      </>
    ));

  const renderTable = (results) => (
    <Table striped variant="dark" className="table-hover">
      <thead key={"key0"} className="thead-light">
        <tr>
          <th>User email</th>
          <th>Delete Acc</th>
          <th>Role</th>
          <th>Created on</th>
          <th>Modified on</th>
          <th>Go To:</th>
        </tr>
      </thead>
      <tbody>{renderResults(results)}</tbody>
    </Table>
  );

  // La responsabilidad de esto es cargar la data
  useEffect(() => {
    if (state.intake.role !== "con") {
      alert(`You're not an concessionary`);
      navigateToUser(state.intake.userId, state.intake.role);
    }
    (async () => {
      const { results } = await readUsers();
      const newResults = results.filter(function (el) {
        return el.role === "reg" && state.intake.userId === el.concessionary;
      });
      setResults(newResults);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(
    "-------------------NEW RENDER ConcessionaryPage--------------------"
  );
  console.log("Displayed Clients:", results);
  return (
    <div className="container p-3 my-3 bg-dark text-white">
      <h2 style={styles.title}>
        ADMINISTRACIÓN DE LA APP DE THE IMMIGRATION TIME
      </h2>
      <h4 style={styles.title}>
        CLIENTES DEL CONCESIONARIO:{" "}
        <span style={styles.name}>{state?.intake?.fullName}</span>
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
