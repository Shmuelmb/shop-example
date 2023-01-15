import React from "react";
import "./Nav.css";

import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  return (
    <nav className="nav">
      <h1
        onClick={() => {
          navigate("products");
        }}>
        Shop online
      </h1>
      <button
        onClick={() => {
          navigate("/");
        }}>
        Welcome Page
      </button>
      <button onClick={() => navigate("about")}>About me</button>
    </nav>
  );
};

export default Nav;
