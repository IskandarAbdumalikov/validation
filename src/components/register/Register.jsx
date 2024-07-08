import React, { useState } from "react";
import "./register.scss";
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
  phone: "",
  country: "",
  city: "",
  confirmPassword: "",
};

const SignupSchema = Yup.object().shape({
  password: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required(),
  email: Yup.string().email("Invalid email").required(),
  phone: Yup.string().required(),
  country: Yup.string().required(),
  city: Yup.string().required(),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required(),
});

const Register = () => {
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
    <div className="register container">
      <img src={logo} alt="ByTrend logo" />
      <h1>{t("register.welcome")}</h1>
      <div className="to__register">
        {t("register.already-have-account")}{" "}
        <Link to="/login">{t("register.login")}</Link>
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
                {t("register.email")} <span>*</span>
              </label>
              <div
                className={
                  errors.email && touched.email
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
            <div className="phone">
              <label htmlFor="phone">
                {t("register.phone")} <span>*</span>
              </label>
              <div
                className={
                  errors.phone && touched.phone
                    ? "phone__input error"
                    : "phone__input"
                }
              >
                <Field
                  className={"inp"}
                  name="phone"
                  id="phone"
                  type="text"
                  placeholder="phone"
                />
                {errors.phone && touched.phone && (
                  <div className="warning">
                    <RiErrorWarningFill />
                  </div>
                )}
              </div>
              <div className="error__message">
                <ErrorMessage name="phone" />
              </div>
            </div>
            <div className="row">
              <div className="country">
                <label htmlFor="country">
                  {t("register.country")} <span>*</span>
                </label>
                <div
                  className={
                    errors.country && touched.country
                      ? "country__input error"
                      : "country__input"
                  }
                >
                  <Field
                    className={"inp"}
                    name="country"
                    id="country"
                    as="select"
                    placeholder="country"
                  >
                    <option value="" label="Select country" />
                    <option value="USA" label="USA" />
                    <option value="Canada" label="Canada" />
                    <option value="UK" label="UK" />
                    {/* Add more options as needed */}
                  </Field>
                  {errors.country && touched.country && (
                    <div className="warning">
                      <RiErrorWarningFill />
                    </div>
                  )}
                </div>
                <div className="error__message">
                  <ErrorMessage name="country" />
                </div>
              </div>
              <div className="city">
                <label htmlFor="city">
                  {t("register.city")} <span>*</span>
                </label>
                <div
                  className={
                    errors.city && touched.city
                      ? "city__input error"
                      : "city__input"
                  }
                >
                  <Field
                    className={"inp"}
                    name="city"
                    id="city"
                    type="text"
                    placeholder="city"
                  />
                  {errors.city && touched.city && (
                    <div className="warning">
                      <RiErrorWarningFill />
                    </div>
                  )}
                </div>
                <div className="error__message">
                  <ErrorMessage name="city" />
                </div>
              </div>
            </div>
            <div className="password">
              <label htmlFor="password">
                {t("register.password")} <span>*</span>
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
            <div className="confirm-password">
              <label htmlFor="confirmPassword">
                {t("register.confirm-password")} <span>*</span>
              </label>
              <div
                className={
                  errors.confirmPassword && touched.confirmPassword
                    ? "confirm-password__input error"
                    : "confirm-password__input"
                }
              >
                <Field
                  className={"inp"}
                  id="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  autoComplete="on"
                  name="confirmPassword"
                  placeholder="confirm password"
                />
                {errors.confirmPassword && touched.confirmPassword && (
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
                <ErrorMessage name="confirmPassword" />
              </div>
            </div>
            <button disabled={isSubmitting} type="submit">
              {t("register.continue")}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
