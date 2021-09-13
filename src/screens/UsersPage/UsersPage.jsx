import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useHistory, Link, useLocation } from "react-router-dom";
import { colors } from "../../ui-config/colors";
import { USER_DATA } from "../../constants/storageKeys";
import { readAllForms, readAllFormsAdm, print } from "../../api/formsAccess";
import { baseUrl } from "../../api/configuration";
import { useAppContext } from "../../context/Provider";

const UsersPage = () => {
  const [results, setResults] = useState([]);
  const history = useHistory();
  const location = useLocation();
  const { state: context } = useAppContext();
  const navData = location.state || {
    role: "reg",
    feName: context.intake.fullName,
  };
  console.log("navData:", navData);
  console.log("CONTEXTO:", context);

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
    const { localRole } = JSON.parse(localStorage.getItem(USER_DATA));
    if (!navData?.id && (localRole === "adm" || localRole === "con")) return;

    (async () => {
      if (!localRole) return;
      const forms =
        localRole === "adm" || localRole === "con"
          ? await readAllFormsAdm(navData.id)
          : await readAllForms();
      if (!forms || forms.length === 0) {
        if (localRole === "adm") {
          history.push("/screens/AdminPage");
          return;
        } else if (localRole === "con") {
          history.push("/screens/ConcessionaryPage");
          return;
        } else {
          alert(`You must fill the Intake form to continue`);
          history.push(`/forms/Intake`);
          return;
        }
      }
      setResults(forms);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container ">
      <h3 style={styles.title}>
        FORMULARIOS SOMETIDOS por{" "}
        <span style={styles.name}>
          {navData?.role === "con" ? context.intake.fullName : navData?.feName}
        </span>
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
