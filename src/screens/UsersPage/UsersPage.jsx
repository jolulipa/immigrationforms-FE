import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";
import { colors } from "../../ui-config/colors";
import { USER_DATA } from "../../constants/storageKeys";
import { readAllForms, print } from "../../api/formsAccess";

const UsersPage = (props) => {
  const [results, setResults] = useState([]);
  const [userData, setUserData] = useState({});
  const history = useHistory();

  const navigateToForm = (id, formId) => {
    history.push(`/forms/${formId}/${id}`);
  };

  const printForm = async (id) => {
    const response = await print(id);
    const data = await response.json();
    console.log(data);
  }

  const renderResults = () =>
    results.map((el) => (
      <tr key={el.id}>
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
        <td>
          <Button
              onClick={() => {
                printForm(el.id);
              }}
          >
            Print
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
          <th>#</th>
        </tr>
      </thead>
      <tbody>{renderResults()}</tbody>
    </table>
  );

  // La responsabilidad de esto es cargar la data
  useEffect(() => {
    (async () => {
      const { results } = await readAllForms();
      const intakeForm = results.find((el) => el.formId === "Intake");
      const intakeData = JSON.parse(intakeForm?.data);
      const userEmail = intakeData?.p1?.email;
      const fullName = intakeData?.p1?.petFullName;
      const phone = intakeData?.p1?.phone;
      setUserData({ userEmail, fullName, phone });
      localStorage.setItem(USER_DATA, userEmail, fullName, phone);
      setResults(results);
    })();
  }, []);

  return (
    <div className="container ">
      <h3>
        <span style={styles.title}>BIENVENIDO</span>
        <span style={styles.variable}>{userData?.fullName?.toUpperCase()}</span>
        <span style={styles.title}>A THE IMMIGRATION TIME</span>
      </h3>
      <div className="row d-flex justify-content-center">
        <div>
          <p style={styles.paragraph}>
            Esta es su bandeja de usuario. Aqui podrá crear y llenar formularios
            de servicios, borrar y/o modificar formuilarios y servicios.
          </p>
        </div>
        <div>
          <Link
            to="/screens/LandingPage"
            className="badge badge-pill badge-info"
          >
            ADD NEW FORM
          </Link>
        </div>
      </div>
      <div>{renderTable()}</div>
      <div className="row d-flex justify-content-center">
        <Link to="/screens/LandingPage" className="badge badge-pill badge-info">
          ADD NEW FORM
        </Link>
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
export default UsersPage;
