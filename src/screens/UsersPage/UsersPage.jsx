import { useEffect } from "react";
import { useHistory, Link, useLocation } from "react-router-dom";
import { colors } from "../../ui-config/colors";
import {
  checkIntake,
  readAllForms,
  readAllFormsAdm,
} from "../../api/formsAccess";
import { useAppContext } from "../../context/Provider";
import RenderForms from "../../components/RenderForms";

const UsersPage = () => {
  const history = useHistory();
  const { state: context } = useAppContext();
  const { updateForms } = useAppContext();
  // const [results, setResults] = useState(context.forms);
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

  useEffect(() => {
    const intakeExist = checkIntake(context.intake.userId);
    if (
      !intakeExist ||
      (intakeExist?.status > 399 && intakeExist?.status < 500)
    ) {
      // Intake not found
      history.push("/forms/Intake");
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
      const datos = await (context.intake.role === "adm" ||
      context.intake.role === "con"
        ? await readAllFormsAdm(navData.id)
        : await readAllForms());

      const forms = await datos.json();
      console.log("forms con/sin json:", datos, forms, datos.status);

      if (!context.intake.userId) {
        if (datos.status > 399 && datos.status < 500) {
          alert(`You must fill the Intake form to continue`);
          history.push(`/forms/Intake`);
        }
      }

      // updateForms(forms.results);
      // clientForms = forms.results;
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
        <RenderForms forms={context.forms} />
        {/* {clientForms !== [] ? (
          <RenderForms forms={context.forms} />
        ) : (
          history.push("/forms/Intake")
        )} */}
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
