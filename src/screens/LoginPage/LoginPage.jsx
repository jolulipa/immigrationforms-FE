import { Formik } from "formik";
import { toast } from "react-toastify";
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

  const navigateToRegistration = () => {
    history.push("/screens/Registration");
  };

  const toastConfig = { position: "bottom-center" };

  const loadUserData = async (token, role, name, id, email) => {
    const response = await readIntakeForm(token);
    if (response?.status > 399 && response?.status < 500) {
      // Intake not found
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
      localStorage.setItem(
        CLIENT_DATA,
        JSON.stringify({ cliEmail, cliName, cliUser })
      );
      history.replace("/forms/Intake");
      return;
    }
    // intake found
    const { data, userId } = await response?.json();
    const intakeData = JSON.parse(data);

    var USNumber = intakeData?.p1?.phone.match(/(\d{3})(\d{3})(\d{4})/);
    USNumber = "(" + USNumber[1] + ") " + USNumber[2] + "-" + USNumber[3];
    console.log(USNumber);

    updateIntake({
      userId,
      email: intakeData?.p1?.email || "",
      phone: USNumber || "Missing Phone Number",
      fullName: intakeData?.p1?.petFullName || name,
      role,
    });
    const formsData = await readAllForms(token);
    updateForms(formsData || ["User has no forms"]);
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    const res = await loginUser(values);
    if (res.status === 200) {
      // Code in case of success
      const { email } = values;
      // updateEmail(email);
      const result = await res.json();
      const localId = result.id;
      const localRole = result.role;
      const name = result.name || "Name Missing";
      localStorage.removeItem(CLIENT_DATA);
      localStorage.setItem(AUTH_TOKEN, result.token);
      await loadUserData(result.token, result.role, name, result.id, email);
      resetForm();

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
    <>
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
    </>
  );
};

export default Login;
