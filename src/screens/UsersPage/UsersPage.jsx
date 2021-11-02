import { useState, useEffect } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { colors } from "../../ui-config/colors";
import { readAllForms, readAllFormsAdm } from "../../api/formsAccess";
import { useAppContext } from "../../context/Provider";
import RenderForms from "../../components/RenderForms";
import { AUTH_TOKEN } from "../../constants/storageKeys";
import { AiFillPlusCircle } from "react-icons/ai";

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
    <div
      className="container-fluid"
      style={{ marginBottom: "10px", background: "	#f1f1f1" }}
    >
      <h3 style={styles.title}>Formularios sometidos por usuario </h3>
      <h4>
        <span style={{ paddingLeft: 20 }}>{context.intake.phone}</span>
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
            <span style={styles.name}>
              {navData?.role === "con"
                ? context.intake.fullName
                : navData?.feName}
            </span>
          ) : (
            <Link
              to="/screens/ConcessionaryPage"
              className="btn-danger btn-sm"
              style={{
                textDecoration: "none",
              }}
            >
              Back to admin page
            </Link>
          )}
        </div>
      </div>
      <div>
        <RenderForms forms={results} />
      </div>

      <div className="d-flex justify-content-center">
        <Link
          to="/screens/LandingPage"
          className="btn-success btn-sm"
          style={{
            textDecoration: "none",
          }}
        >
          <AiFillPlusCircle /> ADD NEW FORM
        </Link>
      </div>
    </div>
  );
};

const styles = {
  title: {
    fontWeight: "700",
    textAlign: "left",
    color: colors.blue,
    paddingTop: 20,
    paddingBottom: 0,
    paddingLeft: 20,
  },
  paragraph: {
    textAlign: "left",
    fontSize: 18,
    padding: 15,
    margin: 0,
    color: colors.brown,
    paddingLeft: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: "100",
    color: colors.blue,
  },
  variable: {
    fontWeight: "100",
    fontStyle: "italic",
    padding: 15,
    color: colors.red,
  },
};
export default UsersPage;
