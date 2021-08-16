import {useState, useEffect} from "react";
import {Button} from "react-bootstrap";
import {useHistory, Link, useLocation} from "react-router-dom";
import {colors} from "../../ui-config/colors";
import {USER_DATA} from "../../constants/storageKeys";
import {readAllForms, readAllFormsAdm, print} from "../../api/formsAccess";
import {baseUrl} from "../../api/configuration";

const UsersPage = () => {
    const [results, setResults] = useState([]);
    const [userData, setUserData] = useState({});
    const history = useHistory();
    const location = useLocation();

    const navData = location.state;

    const navigateToForm = (id, formId) => {
        history.push(`/forms/${formId}/${id}`);
    };

    const printForm = async (id) => {
        const response = await print(id);
        const {downloadKey} = await response.json();
        const url = `${baseUrl}/documents/${id}.pdf?downloadKey=${downloadKey}`;
        const link = document.createElement("a");
        link.href = url;
        link.target = "_blank";
        link.setAttribute("download", `${id}.pdf`);
        document.body.appendChild(link);
        link.click();
        link.remove();
    };

    const renderResults = () =>
        results.map((el) => (
            <tr key={el.id}>
                <td>{el?.formStatus}</td>
                <td>{el?.formId}</td>
                <td>{el?.createdAt.split("T")[0]}</td>
                <td>{el?.updatedAt.split("T")[0]}</td>
                <td>
                    <Button
                        onClick={() => {
                            navigateToForm(el.id, el.formId);
                        }}
                    >
                        Select
                    </Button>
                </td>
                <td>
                    <Button
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
                <th>Form Status</th>
                <th>Form name</th>
                <th>Created on</th>
                <th>Modified on</th>
                <th>EDIT: or</th>
                <th>PRINT form:</th>
            </tr>
            </thead>
            <tbody>{renderResults()}</tbody>
        </table>
    );

    const updateStoredValues = async (registers) => {
        const intakeForm = await registers.find((el) => el.formId === "Intake");
        const intakeData = JSON.parse(intakeForm?.data);
        const userEmail = intakeData?.p1?.email;
        const fullName = intakeData?.p1?.petFullName;
        const phone = intakeData?.p1?.phone;
        setUserData({userEmail, fullName, phone});
        const localData = JSON.parse(localStorage.getItem(USER_DATA));
        localStorage.setItem(USER_DATA, JSON.stringify({...localData, userEmail, fullName}));
        setResults(registers);
    };

    useEffect(() => {
        const storedUserData = localStorage.getItem(USER_DATA);
        const {localRole} = JSON.parse(storedUserData);

        if (localRole === 'adm' && !navData.id) return;

        (async () => {
            if (!storedUserData) return;
            const forms = localRole === 'adm' ? await readAllFormsAdm(navData.id) : await readAllForms();
            if (!forms || forms.length === 0) {
                if (localRole === 'adm') {
                    alert(`Selected client has no forms`);
                    history.push("/screens/AdminPage");
                    return;
                } else {
                    alert(`You must fill the Intake form to continue`);
                    history.push(`/forms/Intake`);
                    return;
                }
            }
            setResults(forms);
            await updateStoredValues(forms);
        })();
    }, []);

    return (
        <div className="container ">
            <h3>
                <span style={styles.title}>BIENVENIDO</span>
                <span style={styles.variable}>{userData?.fullName?.toUpperCase()}</span>
                <span style={styles.title}>A THE IMMIGRATION TIME</span>
            </h3>
            <div>
                <div>
                    <p style={styles.paragraph}>
                        Esta es su bandeja de usuario. Aqui podrá crear y llenar formularios
                        de servicios, borrar y/o modificar formuilarios y servicios.
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
