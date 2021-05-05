import {Formik, Field, Form, ErrorMessage} from 'formik';
import {registerUser} from "../../api/auth";
import * as yup from 'yup';
import "./styles.css";

const handleSubmit = async (values, {setSubmitting, resetForm}) => {
    setSubmitting(true);
    const result = await registerUser(values);
    if(result.status === 200) {
        // Code in case of sucess
        const data = await result.json();
        console.log(data);
        resetForm();
    } else {
        // Code in case of error
        const errorData = await result.json();
        console.log('An error occurred', errorData);
    }
    setSubmitting(false);
}

const validationSchema = yup.object().shape({
    email: yup.string().email("Must be a valid email").required("Email is required"),
    password: yup.string().required("The password is required"),
});
// TODO: For Liranzo. Add the missing password validation schema.

const Registration = () => {
    return (
        <Formik
            initialValues={{email: '', password: ''}}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
        >
            {({isSubmitting}) => (
                <Form className='form-container'>
                    <div>
                        <label htmlFor="email">Email Address</label>
                        <Field className="form-control col-2" name="email" type="email"/>
                        <ErrorMessage className="text-danger" name="email"/>
                    </div>
                    <div className="mt-3">
                        <label htmlFor="password">Password</label>
                        <Field className="form-control col-2" name="password" type="text"/>
                        <ErrorMessage className="text-danger" name="password"/>
                    </div>
                    <button disabled={isSubmitting} className="btn btn-primary mt-3" type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    )
};

export default Registration;
