import { useState, useEffect } from "react";
import { colors } from "../../ui-config/colors";
import { readAllForms } from "../../api/formsAccess";
import { useHistory } from "react-router-dom";
import { USER_DATA } from "../../constants/storageKeys";
import { Button } from "react-bootstrap";

const UsersPage = (props) => {
  const [results, setResults] = useState([]);
  const [userData, setUserData] = useState({});
  const history = useHistory();

  const navigateToForm = (id, formId) => {
    history.push(`/forms/${formId}`);
  };

  const renderResults = () =>
    results.map((el) => (
      <tr>
        <td>{el?.formId}</td>
        <td>{el?.createdAt.split("T")[0]}</td>
        <td>{el?.updatedAt.split("T")[0]}</td>
        <td>
          <Button
            onClick={() => {
              navigateToForm(el.id, el.formId);
            }}
          >
            Select form
          </Button>
        </td>
      </tr>
    ));

  const renderTable = () => (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Form name</th>
          <th>Created on</th>
          <th>Modified on</th>
          <th>#</th>
        </tr>
      </thead>
      <tbody>{renderResults()}</tbody>
    </table>
  );

  // La responsabilidad de esto es cargar la data
  useEffect(() => {
    (async () => {
      const { results, userId } = await readAllForms();
      const intakeForm = results.find((el) => el.formId === "Intake");
      const intakeData = JSON.parse(intakeForm?.data);
      const userEmail = intakeData?.p1?.email;
      const fullName = intakeData?.p1?.petFullName;
      const phone = intakeData?.p1?.phone;
      setUserData({ userEmail, fullName, phone });
      localStorage.setItem(USER_DATA, userData); //VER ESTO
      setResults(results);
    })();
  }, []);

  return (
    <div className="container ">
      <h2 style={styles.title}>
        {`BIENVENIDO SR. ${userData?.fullName?.toUpperCase()} A THE IMMIGRATION TIME`}
      </h2>
      <div className="row">
        <button className="col-md-4 offset-md-4" onClick={props.handleLogout}>
          Log Out
        </button>
        <p style={styles.paragraph}>
          Esta es su bandeja de usuario. Aqui podrá crear y llenar formularios
          de servicios, borrar y/o modificar formuilarios y servicios.
        </p>
      </div>
      <div>{renderTable()}</div>
    </div>
  );
};
const styles = {
  title: {
    fontWeight: "800",
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
};
export default UsersPage;
