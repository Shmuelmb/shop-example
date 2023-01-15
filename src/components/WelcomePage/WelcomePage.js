import React from "react";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Welcome to my online shop</h1>
      <button
        onClick={() => {
          navigate("products");
        }}>
        Click here to start Shopping!!
      </button>
    </div>
  );
};

export default WelcomePage;
