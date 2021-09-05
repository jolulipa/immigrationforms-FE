import { Formik } from "formik";
import { toast } from "react-toastify";
import { loginUser } from "../../api/auth";
import * as yup from "yup"; //modulo de validacion de campos
import { Spinner, Button } from "react-bootstrap";
import { AUTH_TOKEN, USER_DATA } from "../../constants/storageKeys";
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
  const { updateEmail } = useAppContext();

  const navigateToRegistration = () => {
    history.push("/screens/Registration");
  };

  const toastConfig = { position: "bottom-center" };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    const result = await loginUser(values);
    if (result.status === 200) {
      // Code in case of success
      const { email } = values;
      updateEmail(email);
      const localId = result.id;
      const localRole = result.role;
      localStorage.setItem(
        USER_DATA,
        JSON.stringify({ localId, localRole, email })
      );
      localStorage.setItem(AUTH_TOKEN, result.token);
      resetForm();
      setTimeout(() => {
        if (result.role === "adm") {
          const { from } = location.state || {
            from: { pathname: "/screens/AdminPage" },
          };
          history.replace(from);
        } else {
          const { from } = location.state || {
            from: { pathname: "/screens/UsersPage" },
          };
          history.replace(from);
        }
      }, 1000);
    } else if (result.status === 401) {
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
