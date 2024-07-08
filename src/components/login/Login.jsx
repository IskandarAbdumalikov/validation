import React, { useState } from "react";
import "./login.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { RiErrorWarningFill } from "react-icons/ri";
import { useTranslation } from "react-i18next";

const initialState = {
  password: "",
  email: "",
};

const SignupSchema = Yup.object().shape({
  password: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required(),
  email: Yup.string().email("Invalid email").required(),
});

const Login = () => {
  const { t } = useTranslation();
  const handleSubmit = (values, { setSubmitting, setValues }) => {
    setTimeout(() => {
      setSubmitting(false);
      setValues(initialState);
      console.log(values);
    }, 2000);
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login container">
      <img src={logo} alt="ByTrend logo" />
      <h1>{t("login.welcome")}</h1>
      <div className="to__login">
        {t("login.dont-have-account")}{" "}
        <Link to="/register">{t("login.register")}</Link>
      </div>
      <Formik
        initialValues={initialState}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form className="form">
            <div className="email">
              <label htmlFor="email">
                {t("login.email")} <span>*</span>
              </label>
              <div
                className={
                  errors.password && touched.password
                    ? "email__input error"
                    : "email__input"
                }
              >
                <Field
                  className={"inp"}
                  name="email"
                  id="email"
                  type="email"
                  placeholder="email"
                />
                {errors.email && touched.email && (
                  <div className="warning">
                    <RiErrorWarningFill />
                  </div>
                )}
              </div>
              <div className="error__message">
                <ErrorMessage name="email" />
              </div>
            </div>
            <div className="password">
              <label htmlFor="password">
                {t("login.password")} <span>*</span>
              </label>
              <div
                className={
                  errors.password && touched.password
                    ? "password__input error"
                    : "password__input"
                }
              >
                <Field
                  className={"inp"}
                  id="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="on"
                  name="password"
                  placeholder="password"
                />
                {errors.password && touched.password && (
                  <div className="warning">
                    <RiErrorWarningFill />
                  </div>
                )}
                {showPassword ? (
                  <FaEyeSlash onClick={() => setShowPassword(false)} />
                ) : (
                  <FaEye onClick={() => setShowPassword(true)} />
                )}
              </div>
              <div className="error__message">
                <ErrorMessage name="password" />
              </div>
            </div>
            <button disabled={isSubmitting} type="submit">
              {t("login.continue")}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
