import { Formik, Field, Form, ErrorMessage } from "formik";
import { registerUser } from "../../api/auth";
import * as yup from "yup"; //modulo de validacion de campos
import "./styles.css";
import { readIntakeForm } from "../../api/formsAccess";
import { useHistory } from "react-router-dom";
import { useAppContext } from "../../context/Provider";
import { AUTH_TOKEN } from "../../constants/storageKeys";
import { INTAKE_TYPE, CONCE_TYPE } from "../../context/types";

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
  const { updateIntake } = useAppContext();

  const loadUserData = async (token, role) => {
    const response = await readIntakeForm(token);
    if (response.status > 399 && response.status < 501) {
      // Intake not found
      localStorage.removeItem(INTAKE_TYPE);
      history.replace("/forms/Intake");
      return;
    }
    // Get intake data
    const { data, userId } = await response.json();
    const intakeData = JSON.parse(data);
    updateIntake({
      userId,
      email: intakeData?.p1?.email || "",
      phone: intakeData?.p1?.phone || "",
      fullName: intakeData?.p1?.petFullName || "",
      role,
    });
  };

  const redirectLocation = () => {
    history.push(`/screens/LandingPage`);
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    const concessionary = JSON.parse(localStorage.getItem(CONCE_TYPE));
    values.concessionary = concessionary;
    values.role = "reg";
    console.log(values);
    const result = await registerUser(values);
    if (result.isSuccessful) {
      //HAY QUE CREAR EL INTAKE_TYPE AQUI

      localStorage.setItem(AUTH_TOKEN, result.token);
      await loadUserData(result.token, result.role);
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
          <div className="mt-3">
            <label htmlFor="name">Full Name</label>
            <Field
              className="form-control"
              placeholder="Enter Full Name"
              name="name"
              type="text"
            />
            <ErrorMessage className="text-danger" name="name" />
          </div>
          <div className="mt-3">
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
