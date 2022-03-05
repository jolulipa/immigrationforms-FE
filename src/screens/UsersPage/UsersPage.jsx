import { useState, useEffect } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { colors } from "../../ui-config/colors";
import { readAllForms, readAllFormsAdm } from "../../api/formsAccess";
import { useAppContext } from "../../context/Provider";
import RenderForms from "../../components/RenderForms";
import { AUTH_TOKEN, CLIENT_DATA } from "../../constants/storageKeys";
import {
  AiOutlineArrowLeft,
  AiOutlinePhone,
  AiOutlineUser,
} from "react-icons/ai";

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
    console.log("UsersPage 26");
    if (context.intake.role === "adm") {
      alert(`Admin cannot access a concessionary client's data`);
      history.push("/screens/AdminPage");
    }

    (async () => {
      const userToken = localStorage.getItem(AUTH_TOKEN);
      const forms = await (context.intake.role === "con"
        ? await readAllFormsAdm(navData.id, userToken)
        : await readAllForms(userToken));

      if (!forms || (forms.status > 399 && forms.status < 501)) {
        alert(`You must fill the Intake form to continue`);
        history.push("/forms/Intake");
      }
      await updateForms(forms);
    })();
    setResults(context.forms);
  }, []);

  const { cliName } = JSON.parse(localStorage?.getItem(CLIENT_DATA)) || "";

  return (
    <div
      className="container-fluid"
      style={{ marginBottom: "10px", background: "	#f1f1f1" }}
    >
      <h3 style={styles.title}>
        {<span style={{ color: "red", fontWeight: "600" }}>|</span>}Formularios
        sometidos por usuario{" "}
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

        <div className="d-flex" style={styles.name}>
          <span style={{ marginTop: 20, fontSize: 18 }}>
            <AiOutlineUser style={{ color: "red" }} />
            {navData?.role === "con" ? context.intake.fullName : cliName}{" "}
            <AiOutlinePhone style={{ color: "red" }} />
            {context.intake.phone}
          </span>
          {context.intake.role !== "con" ? (
            <span style={{ marginTop: 20, fontSize: 14, color: "green" }}>
              {" "}
              &nbsp;&nbsp;*User Mode
            </span>
          ) : (
            <Link
              to="/screens/ConcessionaryPage"
              className="btn-danger btn-sm"
              style={styles.link}
            >
              <AiOutlineArrowLeft />
              &nbsp;Back to admin page
            </Link>
          )}
        </div>
      </div>
      <div>
        <RenderForms forms={results} />
      </div>
    </div>
  );
};

const styles = {
  title: {
    fontFamily: "Roboto",
    textAlign: "left",
    color: colors.blue,
    paddingTop: 20,
    paddingBottom: 0,
    paddingLeft: 20,
  },
  paragraph: {
    textAlign: "left",
    fontSize: 15,
    padding: 10,
    margin: 0,
    color: colors.brown,
    paddingLeft: 20,
  },
  name: {
    paddingLeft: 20,
    fontSize: 18,
    fontWeight: "100",
    color: colors.blue,
  },
  variable: {
    fontStyle: "italic",
    padding: 15,
    color: colors.red,
  },
  link: {
    marginTop: 20,
    textDecoration: "none",
    marginLeft: 25,
    fontSize: 16,
  },
};
export default UsersPage;
