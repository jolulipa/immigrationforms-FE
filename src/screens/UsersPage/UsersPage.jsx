import {useState, useEffect} from "react";
import {colors} from "../../ui-config/colors";
import {Link} from "react-router-dom";
import {readAllForms} from "../../api/formsAccess";
import {useHistory} from "react-router-dom";
import ServiceBox from "../../components/ServiceBox";

const UsersPage = (props) => {
    const [results, setResults] = useState([]);
    const history = useHistory();
    const navigate = (formId) => {
        history.push(`/forms/${formId}`);
    };

    const renderResults = () =>
        results.map((el) => (
            <div className="col-sm-4">
                <ServiceBox
                    key={el.formId}
                    formName={el.formId}
                    description={el.id + el.userId + el.createdAt}
                    onClick={() => navigate(el.formId)}
                />
            </div>
        ));

    // La responsabilidad de esto es cargar la data
    useEffect(() => {
        (async () => {
            const {results} = await readAllForms();
            setResults(results);
        })();
    }, []);

    return (
        <div className="container">
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
                <ul>
                    <li>
                        <Link to="/forms/Intake" className="badge badge-pill badge-info">
                            Formulario de Intake
                        </Link>
                    </li>
                    <li>Otros formularios</li>
                </ul>
                <div className="row">{renderResults()}</div>
            </div>
        </div>
    );
};
const styles = {
    title: {
        fontWeight: "500",
        textAlign: "center",
        color: colors.brown,
        padding: 15,
    },

    paragraph: {
        textAlign: "justify",
        fontSize: 18,
        padding: 15,
        margin: 0,
        color: colors.brown,
    },
};
export default UsersPage;
