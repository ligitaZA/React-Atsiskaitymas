import UserContext from "../../context/UserContext";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const Register = () => {
  const [formInputs] = useState({
    email: '',
    password: '',
    passwordRepeat: ''
  });
  const [invalidUsername, setInvalidUsername] = useState(false);

  const { users, addNewUser, setLoggedInUser } = useContext(UserContext);
  const navigate = useNavigate();
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      if (users.find(user => user.email === values.email)) {
        setInvalidUsername(true);
      } else {
        let newUser = {
          ...values,
          id: Date.now()
        };
        const response = await fetch('http://localhost:5000/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newUser)
        });
        const data = await response.json();
        console.log(data);
        addNewUser(newUser);
        setLoggedInUser(newUser);
        navigate('/');
        setSubmitting(false);
        resetForm();
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .test('email-taken', 'Email is already taken', async value => {
        const emailTaken = users.find(user => user.email === value);
        return !emailTaken;
      }),
      password: Yup.string()
      .min(8, 'Password must be at least 8 symbols length.')
      .required('Password is required'),
    passwordRepeat: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Password repeat is required'),
    avatar: Yup.string()
      .url('Must be a valid url')
  });
  return (
    <>
      <div className="registrationForm">
        <Formik
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => handleSubmit(values, { setSubmitting, resetForm })}
          initialValues={formInputs}
        >
          {({ errors, touched }) => (
            <Form>
              <h1>Register</h1>
              <label>
                Email:
                <Field
                  name="email"
                  type="text" />
                {errors.email && touched.email ? (
                  <span>{errors.email}</span>
                ) : null}
              </label>
              <label>
                Password:
                <Field
                  name="password"
                  type="password" />{errors.password && touched.password ? (
                  <span>{errors.password}</span>
                ) : null}
              </label>
              <label>
                Repeat Password:
                <Field
                  name="passwordRepeat"
                  type="password" />
                  {errors.passwordRepeat && touched.passwordRepeat ? (
                  <span>{errors.passwordRepeat}</span>
                ) : null}
              </label>
              <button type="submit">Register</button>
            </Form>
          )}
        </Formik>
      </div>

    </>
  );
}

export default Register;