import { Formik, Field, Form, ErrorMessage } from "formik";
import { registerUser } from "../../api/auth";
import * as yup from "yup"; //modulo de validacion de campos
import "./styles.css";
import { useHistory } from "react-router-dom";
import { useAppContext } from "../../context/Provider";
import { AUTH_TOKEN, USER_DATA } from "../../constants/storageKeys";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .min(10, "Too Short!")
    .max(80, "Too Long!")
    .email("Must be a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(7, "Password is too short - should be 8 chars minimum!")
    .max(50, "Password is Too Long!")
    .required("The password is required"),
  // .matches(
  //   "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$",
  //   "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
  // ),
});

const Registration = () => {
  const history = useHistory();
  const { updateEmail } = useAppContext();

  const redirectLocation = () => {
    history.push(`/screens/UsersPage`);
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);

    const result = await registerUser(values);
    if (result.isSuccessful) {
      // redirect to Client tray
      const { email } = result;
      updateEmail(email);
      const localId = result.id;
      const localRole = result.role;

      localStorage.setItem(
        USER_DATA,
        JSON.stringify({ localId, localRole, email })
      );
      localStorage.setItem(AUTH_TOKEN, result.token);
      resetForm();
      redirectLocation();
    } else {
      // Code in case of error
      console.log("An error occurred");
    }
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{ email: "", password: "", role: "reg" }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ isSubmitting }) => (
        <Form className="form-container registrationForm">
          <h2 className="col-10">Registro de Usuarios</h2>
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

export default Registration;
