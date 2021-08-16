import {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import {Button} from "react-bootstrap";
import {colors} from "../../ui-config/colors";
import {readUsers} from "../../api/auth";
import {USER_DATA} from "../../constants/storageKeys";

const AdminPage = () => {
    const [results, setResults] = useState([]);
    const history = useHistory();

    const navigateToUser = (id, email, role) => {
        console.log(id, email, role);
        history.push({
            pathname: '/screens/UsersPage',
            state: {
                id,
                email,
                role,
            }
        });
    };

    const deleteUser = (id) => {
        console.log(id);
    };

    const renderResults = () =>
        results.map((el) => (
            <tr key={el.id}>
                <td>{el?.email}</td>
                <td>{el?.createdAt.split("T")[0]}</td>
                <td>{el?.updatedAt.split("T")[0]}</td>
                <td>
                    <Button
                        className="btn btn-danger"
                        onClick={() => {
                            deleteUser(el.id);
                        }}
                    >
                        Delete User
                    </Button>
                </td>
                <td>
                    <Button
                        onClick={() => {
                            navigateToUser(el.id, el.email, el.role);
                        }}
                    >
                        User Forms
                    </Button>
                </td>
            </tr>
        ));

    const renderTable = (results) => (
        <table className="table table-striped">
            <thead>
            <tr>
                <th>User email</th>
                <th>Created on</th>
                <th>Modified on</th>
                <th> Action:</th>
                <th className="d-flex justify-content-center">Go To:</th>
            </tr>
            </thead>
            <tbody>{renderResults(results)}</tbody>
        </table>
    );

    // La responsabilidad de esto es cargar la data
    useEffect(() => {
        const storedData = localStorage.getItem(USER_DATA);
        const {localId, localRole} = JSON.parse(storedData);

        if (localRole !== "adm") {
            alert(`You're not an administrator`);
            navigateToUser(localId, localRole);
        }
        (async () => {
            const {results} = await readUsers();
            setResults(results);
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="container ">
            <h2 style={styles.title}>
                ADMINISTRACIÓN DE LA APP DE THE IMMIGRATION TIME
            </h2>
            <div className="row d-flex justify-content-center">
                <div>
                    <p style={styles.paragraph}>
                        Esta es la herramenta de <strong>administración</strong> de la app.
                        Aqui el administrador podrá borrar y/o modificar usuarios y
                        formularios.
                    </p>
                </div>
                <div>{renderTable(results)}</div>
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
export default AdminPage;
