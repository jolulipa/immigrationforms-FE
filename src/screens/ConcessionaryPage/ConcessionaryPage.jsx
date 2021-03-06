import { Table, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { colors } from "../../ui-config/colors";
import { readUsers } from "../../api/auth";
import { checkIntake, readAllFormsAdm } from "../../api/formsAccess";
import { AUTH_TOKEN, CLIENT_DATA } from "../../constants/storageKeys";
import { useAppContext } from "../../context/Provider";
import { BiEdit, BiTrash } from "react-icons/bi";

const ConcessionaryPage = () => {
  const [results, setResults] = useState([]);
  const history = useHistory();
  const { state } = useAppContext();
  const { updateForms } = useAppContext();
  const token = localStorage.getItem(AUTH_TOKEN) || "";

  const navigateToUser = async (id, email, role, feName) => {
    console.log("Check Intake:", token ? "token ok-" : "no token-", id);
    const response = await checkIntake(id, token);
    if (!response || (response?.status > 399 && response?.status < 500)) {
      history.push("/forms/Intake");
    } else {
      const forms = await readAllFormsAdm(id, token);
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
      <tr key={el.id}>
        <td>{el?.email}</td>
        <td>
          <BiEdit style={{ fontSize: 18 }} />
          <Button
            className="btn btn-light"
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
            Forms
          </Button>
        </td>
        <td>{el?.createdAt.split("T")[0]}</td>
        <td>
          <BiTrash style={{ fontSize: 18 }} />
          <Button
            className="btn btn-light btn-sm "
            onClick={() => {
              deleteUser(el.id);
            }}
          >
            Delete
          </Button>
        </td>
      </tr>
    ));

  const renderTable = (results) => (
    <Table striped className="table-hover" style={styles.table}>
      <thead key={results[0]?.id} className="thead-light">
        <tr key={results[0]?.id}>
          <th colSpan="6" style={styles.trans}>
            Transacciones del Concesionario{" "}
            <span>{state?.intake?.fullName}</span>
          </th>
        </tr>
        <tr>
          <th>User email</th>
          <th>View Forms</th>
          <th>Created on</th>
          <th>Delete Acc:</th>
        </tr>
      </thead>
      <tbody>{renderResults(results)}</tbody>
    </Table>
  );

  // La responsabilidad de esto es cargar la data
  useEffect(() => {
    if (state.intake.role !== "con") {
      alert(`You're not an concessionary`);
      navigateToUser(
        state.intake.userId,
        state.intake.email,
        state.intake.role,
        state.intake.fullName
      );
    }
    (async () => {
      const { results } = await readUsers();
      const newResults = results.filter(function (el) {
        return el.role === "reg" && state.intake.userId === el.concessionary;
      });
      setResults(newResults);
      console.log(results[0].id);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log("ConcessionaryPage 124");

  return (
    <div
      className="container-fluid"
      style={{ marginBottom: "10px", background: "	#f1f1f1" }}
    >
      <h2 style={styles.title}>
        ADMINISTRACI??N DE LA APP DE THE IMMIGRATION TIME
      </h2>
      <h4 style={{ marginTop: 0, textAlign: "center" }}>
        CLIENTES DEL CONCESIONARIO:{" "}
        <span style={styles.name}>{state?.intake?.fullName}</span>
      </h4>
      <div className="row">
        <div>
          <p style={styles.paragraph}>
            Esta es la herramenta de <strong>administraci??n</strong> para
            CONCESIONARIOS de la app. Aqui el concesionario podr?? borrar y/o
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
    fontWeight: "600",
    textAlign: "center",
    color: colors.brown,
    paddingTop: 10,
  },
  paragraph: {
    textAlign: "left",
    fontSize: 15,
    paddingLeft: 0,
    margin: 0,
  },
  variable: {
    fontWeight: "800",
    padding: 15,
    color: colors.blue,
  },
  name: {
    fontWeight: "600",
    fontSize: 18,
    color: colors.red,
  },
  table: {
    border: "1px solid lightgrey",
    marginLeft: 0,
    marginTop: 10,
    width: "95%",
  },
  trans: {
    background: "#f56c42",
    color: "white",
    border: "1px solid lightgrey",
  },
};
export default ConcessionaryPage;
