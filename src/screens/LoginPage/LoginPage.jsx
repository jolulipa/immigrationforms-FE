import { Formik } from "formik";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginUser } from "../../api/auth";
import { readIntakeForm, readAllForms } from "../../api/formsAccess";
import * as yup from "yup";
import { Spinner, Button } from "react-bootstrap";
import { AUTH_TOKEN, CLIENT_DATA } from "../../constants/storageKeys";
import { useLocation, useHistory } from "react-router-dom";
import { useAppContext } from "../../context/Provider";
import "./styles.css";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Must be a valid email")
    .required("The email is required"),
  password: yup.string().required("The password is required"),
});

const Login = () => {
  const location = useLocation();
  const history = useHistory();
  const { updateIntake, updateForms } = useAppContext();
  const toastConfig = {
    position: "bottom-center",
    // autoClose: 5000,
    hideProgressBar: false,
  };

  const navigateToRegistration = () => {
    history.push("/screens/Registration");
  };

  const loadUserData = async (token, role, name, id, email) => {
    const response = await readIntakeForm(token);

    if (response.status > 399) {
      // Intake not found -- response.statusText="not found"
      updateIntake({
        userId: id,
        email,
        phone: "",
        fullName: name,
        role,
      });
      const cliEmail = email;
      const cliName = name;
      const cliUser = id;
      const cliRole = role;
      localStorage.setItem(
        CLIENT_DATA,
        JSON.stringify({ cliEmail, cliName, cliUser, cliRole })
      );
      history.push("/forms/Intake");
    }
    // intake found
    const { data, userId } = response;
    const intakeData = JSON.parse(data);
    let USNumber = intakeData.p1.phone.match(/(\d{3})(\d{3})(\d{4})/);
    USNumber = "(" + USNumber[1] + ") " + USNumber[2] + "-" + USNumber[3];
    const cliEmail = intakeData?.p1?.email;
    const cliName = intakeData?.p1?.petFullName;
    const cliUser = userId;
    updateIntake({
      userId,
      email: cliEmail || "",
      phone: USNumber || "Missing Phone Number",
      fullName: cliName || name,
      role,
    });
    localStorage.setItem(
      CLIENT_DATA,
      JSON.stringify({ cliEmail, cliName, cliUser, cliRole: role })
    );
    const formsData = await readAllForms(token);
    updateForms(formsData || ["User has no forms"]);
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    const res = await loginUser(values);
    if (res.status === 200) {
      // Code in case of success
      const { email } = values;
      const result = await res.json();
      const localId = result.id;
      const localRole = result.role;
      const name = result.name || "Name Missing";
      localStorage.removeItem(CLIENT_DATA);
      localStorage.setItem(AUTH_TOKEN, result.token);
      await loadUserData(result.token, result.role, name, result.id, email);
      resetForm();
      console.log("Login 89");

      if (result.role === "adm") {
        const { from } = location.state || {
          from: {
            pathname: "/screens/AdminPage",
            prev: "/screens/LoginPage",
            localId,
            email,
            localRole,
          },
        };
        history.replace(from);
      } else if (result.role === "con") {
        const { from } = location.state || {
          from: {
            pathname: "/screens/ConcessionaryPage",
            prev: "/screens/LoginPage",
            localId,
            email,
            localRole,
          },
        };
        history.replace(from);
      } else {
        const { from } = location.state || {
          from: {
            pathname: "/screens/UsersPage",
            prev: "/screens/LoginPage",
            localId,
            email,
            localRole,
          },
        };
        history.replace(from);
      }
    } else if (res.status > 400 && res.status < 500) {
      toast.error("Invalid username or password", toastConfig);
    } else {
      toast.error("An error occurred. Please try again later.", toastConfig);
    }
    setSubmitting(false);
  };

  return (
    <div className="container">
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <div className="auth-box">
            <div className="title-container">
              <h2>Login</h2>
            </div>
            <form onSubmit={formik.handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-danger small font-weight-bold">
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  aria-describedby="passwordHelp"
                  placeholder="Enter password"
                  {...formik.getFieldProps("password")}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-danger small font-weight-bold">
                    {formik.errors.password}
                  </div>
                ) : null}
              </div>
              <div className="button-container">
                <button
                  className="btn btn-primary"
                  style={{
                    marginTop: 15,
                  }}
                  type="submit"
                  disabled={formik.isSubmitting}
                >
                  Submit
                </button>
                {formik.isSubmitting ? (
                  <Spinner animation="border" variant="primary" />
                ) : null}
              </div>
            </form>
          </div>
        )}
      </Formik>
      <div className="no-account">
        <h6 className="no-account-text">Don't have an account?</h6>
        <Button variant="link" onClick={navigateToRegistration}>
          Create one
        </Button>
      </div>
    </div>
  );
};

export default Login;
