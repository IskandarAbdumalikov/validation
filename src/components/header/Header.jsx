import React from "react";
import { useTranslation } from "react-i18next";
import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";
import "./header.scss";

const Header = () => {
  const { t, i18n } = useTranslation();
  return (
    <header className="header container">
      <NavLink to={"/"} className="header__logo">
        <img src={logo} alt="" />
      </NavLink>
      <ul className="header__list">
        <NavLink to={"/"}>{t("home")}</NavLink>
        <NavLink to={"/register"}>{t("login.register")}</NavLink>
        <NavLink to={"/login"}>{t("register.login")}</NavLink>
        <select onChange={(e) => i18n.changeLanguage(e.target.value)}>
          <option value="">{t("choose-lang")}</option>
          <option value="en">English</option>
          <option value="uz">Uzbek</option>
        </select>
      </ul>
    </header>
  );
};

export default Header;
