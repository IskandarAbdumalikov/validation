import React from "react";
import { useTranslation } from "react-i18next";
import "./home.scss";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="home-container">
      <h2>{t("home")}</h2>
      <p>{t("welcome-home")}</p>
    </div>
  );
};

export default Home;
