import React from "react";
import "./login.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import logo from '../../assets/logo.svg'

const initialState = {
  firstName: "",
  password: "",
  email: "",
};

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const Login = () => {
  let handleSubmit = (values, { setSubmitting, setValues }) => {
    setTimeout(() => {
      setSubmitting(false);
      console.log(values);
    }, 2000);
  };
  return (
    <div className="login container">
      <img src={logo} alt="" />
      <Formik
        initialValues={initialState}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form className="form">
            <Field
              className={
                errors.firstName && touched.firstName ? "inp error" : "inp"
              }
              name="firstName"
              placeholder="FirstName"
            />
            <div className="error__message">
              <ErrorMessage name="firstName" />
            </div>
            <Field
              className={
                errors.password && touched.password ? "inp error" : "inp"
              }
              type="password"
              autoComplete="on"
              name="password"
              placeholder="password"
            />
            <div className="error__message">
              <ErrorMessage name="password" />
            </div>
            <Field
              className={errors.email && touched.email ? "inp error" : "inp"}
              name="email"
              type="email"
              placeholder="email"
            />
            <div className="error__message">
              <ErrorMessage name="email" />
            </div>
            <button disabled={isSubmitting} type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
