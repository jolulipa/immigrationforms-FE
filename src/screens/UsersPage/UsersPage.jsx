import { useState, useEffect } from "react";
import { colors } from "../../ui-config/colors";
import { readAllForms } from "../../api/formsAccess";
import { useHistory } from "react-router-dom";
// import ServiceBox2 from "../../components/ServiceBox";

const UsersPage = (props) => {
  const [results, setResults] = useState([]);
  const history = useHistory();
  const navigate = (formId) => {
    history.push(`/forms/${formId}`);
  };

  const renderResults = () =>
    results.map((el) => (
      <div style={styles.items} className="row col-md-auto">
        <div className="col-md-auto">{el.formId}</div>
        <div className="col-md-auto">{el.id}</div>
        <div className="col-md-auto">{el.data}</div>
        <div className="col-md-auto">{el.createdAt}</div>
        <div className="col-md-auto">{el.updatedAt}</div>
        {/* <ServiceBox2
          key={el.id}
          formID={el.formId}
          userId={el.userId}
          createdAt={el.createdAt}
          updatedAt={el.updatedAt}
          onClick={() => navigate(el.formId)}
        /> */}
      </div>
    ));

  // La responsabilidad de esto es cargar la data
  useEffect(() => {
    (async () => {
      const { results, userId } = await readAllForms();
      results.map((el) => (el.userId = userId));
      console.log(results);
      setResults(results);
    })();
  }, []);

  return (
    <div className="container ">
      <h2 style={styles.title}>
        BIENVENIDO Sr. Usuario A THE IMMIGRATION TIME
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
      <ul style={styles.line} className="d-inline-flex">
        <li className="p-3">Form Name:</li>
        <li className="p-3">Register Id:</li>
        <li className="p-3">User Id:</li>
        <li className="p-3">Created:</li>
        <li className="p-3">Updated:</li>
      </ul>
      <div>{renderResults()}</div>
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
  items: {
    textAlign: "left",
    fontSize: 12,
    padding: 5,
    margin: 0,
    color: colors.blue,
  },
  line: {
    listStyleType: "none",
    fontSize: 20,
    fontWeight: "500",
    textAlign: "justify",
    textJustify: "auto",
    color: colors.brown,
    padding: 10,
  },
};
export default UsersPage;
