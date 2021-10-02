import { Table } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useHistory, Link, useLocation } from "react-router-dom";
import { colors } from "../../ui-config/colors";
import {
  checkIntake,
  readAllForms,
  readAllFormsAdm,
  print,
} from "../../api/formsAccess";
import { baseUrl } from "../../api/configuration";
import { useAppContext } from "../../context/Provider";

const UsersPage = () => {
  const history = useHistory();
  const { state: context } = useAppContext();
  const { updateForms } = useAppContext();
  const [results, setResults] = useState(context.forms);
  const location = useLocation();
  const navData = location?.state || {
    role: "reg",
    feName: context?.intake?.fullName,
  };
  let clientForms;
  clientForms = context?.forms || [];

  console.log("-------------------NEW RENDER--------------------");
  console.log("navDATA:", navData);
  console.log("CONTEXTO Intake:", context.intake);
  console.log("CONTEXTO Forms:", context.forms);

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
    const todo = [elData.p1.email, "-", elData.p1.phone];
    return todo;
  }

  const renderResults = () =>
    clientForms.map((el) => (
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
    <Table striped className="table-hover">
      <thead>
        <tr key={"header"}>
          <th>User -------------- Phone</th>
          <th>Form Status</th>
          <th>Form Name</th>
          <th>Created on:</th>
          <th>Modified on:</th>
          <th>EDIT Form</th>
          <th>PRINT Form</th>
        </tr>
      </thead>
      <tbody>{renderResults()}</tbody>
    </Table>
  );

  useEffect(() => {
    const intakeExist = checkIntake(context.intake.userId);
    if (
      !intakeExist ||
      (intakeExist?.status > 399 && intakeExist?.status < 500)
    ) {
      // Intake not found
      history.push("/screens/Intake");
    }

    if (context.intake.role === "adm") {
      alert(`Admin cannot access a concessionary client's data`);
      history.push("/screens/AdminPage");
    }

    if (
      !navData?.id &&
      (context.intake.role === "adm" || context.intake.role === "con")
    ) {
      alert(`Cannot access an Administrator or concessionary's data`);
      history.push("/screens/AdminPage");
    }

    (async () => {
      const { allForms } =
        context.intake.role === "adm" || context.intake.role === "con"
          ? await readAllFormsAdm(navData.id)
          : await readAllForms();
      updateForms(allForms);
      setResults(context.forms);
      clientForms = results;
    })();
  }, []);

  return (
    <div className="container ">
      <h3 style={styles.title}>
        FORMULARIOS SOMETIDOS por{" "}
        <span style={styles.name}>
          {navData?.role === "con" ? context.intake.fullName : navData?.feName}
        </span>
      </h3>
      <h4 style={styles.title}>
        <span>{context.intake.phone}</span>
      </h4>
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
          {context.intake.role !== "con" ? (
            <div>Servicios Solicitados </div>
          ) : (
            <Link
              to="/screens/ConcessionaryPage"
              className="badge badge-pill badge-danger"
            >
              Back to admin page
            </Link>
          )}
        </div>
      </div>
      <div>
        {clientForms !== [] ? renderTable() : history.push("/screens/Intake")}
      </div>

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
