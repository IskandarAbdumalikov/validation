import React from "react";
import { useTranslation } from "react-i18next";
import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";
import './header.scss'

const Header = () => {
  const { t, i18n } = useTranslation();
  return (
    <header className="header container">
      <div className="header__logo">
        <img src={logo} alt="" />
      </div>
      <ul className="header__list">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/login"}>Login</NavLink>
        <NavLink to={"/register"}>Register</NavLink>
        <select
          onChange={(e) => i18n.changeLanguage(e.target.value)}
          name=""
          id=""
        >
          <option value="">{t("choose-lang")}</option>
          <option value="en">English</option>
          <option value="uz">Uzbek</option>
        </select>
      </ul>
    </header>
  );
};

export default Header;
