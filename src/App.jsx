import React from "react";
import Login from "./components/login/Login";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import Register from "./components/register/Register";
import Home from "./pages/home/Home";

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
