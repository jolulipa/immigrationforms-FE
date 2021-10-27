import { useState, useEffect } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { colors } from "../../ui-config/colors";
import { readAllForms, readAllFormsAdm } from "../../api/formsAccess";
import { useAppContext } from "../../context/Provider";
import RenderForms from "../../components/RenderForms";
import { AUTH_TOKEN } from "../../constants/storageKeys";

const UsersPage = () => {
  const { state: context } = useAppContext();
  const { updateForms } = useAppContext();
  const [results, setResults] = useState(context.forms);
  const location = useLocation();
  const navData = location?.state || {
    role: "reg",
    feName: context?.intake?.fullName,
  };
  const history = useHistory();

  useEffect(() => {
    if (context.intake.role === "adm") {
      alert(`Admin cannot access a concessionary client's data`);
      history.push("/screens/AdminPage");
    }

    (async () => {
      const userToken = localStorage.getItem(AUTH_TOKEN);
      const forms = await (context.intake.role === "con"
        ? await readAllFormsAdm(navData.id)
        : await readAllForms(userToken));

      if (!forms || (forms.status > 399 && forms.status < 501)) {
        alert(`You must fill the Intake form to continue`);
        history.push("/forms/Intake");
      }
      await updateForms(forms);
    })();
    setResults(context.forms);

    console.log("navDATA:", navData);
    console.log("CONTEXT Intake/Forms/Concessionary:", context);
  }, []);

  console.log("-------------------NEW RENDER UsersPage--------------------");
  return (
    <div className="container" style={{ marginBottom: "10px" }}>
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
        <RenderForms forms={results} />
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
