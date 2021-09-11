import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useHistory, Link, useLocation } from "react-router-dom";
import { colors } from "../../ui-config/colors";
import { USER_DATA } from "../../constants/storageKeys";
import { readAllForms, readAllFormsAdm, print } from "../../api/formsAccess";
import { baseUrl } from "../../api/configuration";
import globalVariables from "../../constants/globalVariables";

globalVariables.userData = {};
globalVariables.cliName = "generic";
// Object.freeze(globalVariables);

const UsersPage = () => {
  const [results, setResults] = useState([]);
  const history = useHistory();
  const location = useLocation();
  const navData = location.state;
  const navigateToForm = (id, formId) => {
    history.push(`/forms/${formId}/${id}`);
  };

  const printForm = async (id) => {
    const response = await print(id);
    const { downloadKey } = await response?.json();
    const url = `${baseUrl}/documents/${id}.pdf?downloadKey=${downloadKey}`;
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.setAttribute("download", `${id}.pdf`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  function decriptData(el) {
    const elData = JSON.parse(el.data);
    const elP1 = elData.p1;
    const elMail = elP1.email;
    const elPhone = elP1.phone;
    const todo = [elMail, "-", elPhone];
    return todo;
  }

  const renderResults = () =>
    results.map((el) => (
      <tr key={el.id}>
        <td>{decriptData(el)}</td>
        <td>{el.formStatus}</td>
        <td>{el.formId}</td>
        <td>{el.createdAt.split("T")[0]}</td>
        <td>{el.updatedAt.split("T")[0]}</td>
        <td>
          <Button
            className="btn-Primary btn-sm"
            onClick={() => {
              navigateToForm(el.id, el.formId);
            }}
          >
            Select
          </Button>
        </td>
        <td>
          <Button
            className="btn-success btn-sm"
            onClick={async () => {
              await printForm(el.id);
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
          <th>User -------------- Phone</th>
          <th>Form Status</th>
          <th>Form Name</th>
          <th>Created on</th>
          <th>Modified on</th>
          <th>EDIT Form</th>
          <th>PRINT Form</th>
        </tr>
      </thead>
      <tbody>{renderResults()}</tbody>
    </table>
  );

  useEffect(() => {
    const { from } = location.state;
    const { localRole, email } = JSON.parse(localStorage.getItem(USER_DATA));
    globalVariables.cliName = email;
    console.log(
      "Vengo de:",
      from,
      "navData:",
      navData,
      globalVariables.cliName
    );
    if (localRole === "adm" && !navData?.id) return;

    (async () => {
      if (!localRole) return;
      const forms =
        localRole === "adm"
          ? await readAllFormsAdm(navData.id)
          : await readAllForms();
      if (!forms || forms.length === 0) {
        if (localRole === "adm") {
          alert(`Selected client ${globalVariables.cliName} has no forms`);
          history.push("/screens/AdminPage");
          return;
        } else {
          alert(`You must fill the Intake form to continue`);
          history.push(`/forms/Intake`);
          return;
        }
      }
      const intakeForm = await forms.find((el) => el.formId === "Intake");
      const intakeData = JSON.parse(intakeForm?.data);
      const userEmail = intakeData?.p1?.email;
      globalVariables.cliName = intakeData?.p1?.petFullName;
      if (navData) {
        globalVariables.userData = navData.id;
      } else {
        globalVariables.userData = intakeData?.userId;
      }
      const name = globalVariables.cliName;
      const userCli = globalVariables.userData;
      const localData = JSON.parse(localStorage.getItem(USER_DATA));
      localStorage.setItem(
        USER_DATA,
        JSON.stringify({ ...localData, userEmail, name, userCli })
      );
      setResults(forms);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container ">
      <h3 style={styles.title}>
        FORMULARIOS SOMETIDOS por{" "}
        <span style={styles.name}>{globalVariables.cliName}</span>
      </h3>
      <div>
        <div>
          <p style={styles.paragraph}>
            Esta es su bandeja de usuario. Aqui podrá crear y llenar nuevos
            formularios y modificar formularios previamente creados. El primer
            formulario a crear es el Intake y luego los formularios relevantes a
            los servicios que desea de The Immigration Time.
            <span style={styles.variable}>
              (para crear un nuevo formulario de click al botón
            </span>
            "ADD NEW FORM")
          </p>
        </div>
        <div className="row d-flex justify-content-center">
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
    paddingTop: 20,
    paddingbottom: 0,
  },
  paragraph: {
    textAlign: "left",
    fontSize: 18,
    padding: 15,
    margin: 0,
    color: colors.brown,
  },
  name: {
    fontWeight: "600",
    color: colors.red,
  },
  variable: {
    fontWeight: "100",
    fontStyle: "italic",
    padding: 15,
    color: colors.red,
  },
};
export default UsersPage;
