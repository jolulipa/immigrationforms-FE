import { Formik, Field, Form, ErrorMessage } from "formik";
import { loginUser } from "../../api/auth";
import * as yup from "yup"; //modulo de validacion de campos
import "./styles.css";
import { AUTH_TOKEN } from "../../constants/storageKeys";
import { useLocation, useHistory } from "react-router-dom";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Must be a valid email")
    .required("Email is required"),
  password: yup.string().required("The password is required"),
});

const Login = () => {
  const location = useLocation();
  const history = useHistory();

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    const result = await loginUser(values);
    if (result.status === 200) {
      // Code in case of success
      const data = await result.json();
      localStorage.setItem(AUTH_TOKEN, data.token);
      const { from } = location.state || {
        from: { pathname: "/screens/UsersPage" },
      };
      history.replace(from);
      resetForm();
    } else {
      // Code in case of error
      const errorData = await result.json();
      console.log("An error occurred", errorData);
    }
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ isSubmitting }) => (
        <Form className="form-container loginForm">
          <h2 className="col-10">Log In</h2>
          <div>
            <label htmlFor="email">Email Address</label>
            <Field
              className="form-control"
              placeholder="Enter email"
              name="email"
              type="email"
            />
            <ErrorMessage className="text-danger" name="email" />
          </div>
          <div className="mt-3">
            <label htmlFor="password">Password</label>
            <Field
              className="form-control"
              placeholder="Enter password"
              name="password"
              type="text"
            />
            <ErrorMessage className="text-danger" name="password" />
          </div>
          <button
            disabled={isSubmitting}
            className="btn btn-secondary mt-5 btn-block"
            type="submit"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
