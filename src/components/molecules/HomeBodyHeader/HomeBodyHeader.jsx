// molecules/HomeBodyHeader.jsx
import React from "react";
import Button from "../atoms/Buttons/Button";
import { Link } from "react-router-dom";
import "./HomeBodyHeader.style.scss";

const HomeBodyHeader = () => {
  return (
    <div className="menu">
      {/* Logo and Title */}
      <img src={logo} alt="Logo" className="logo" />
      <h1>DecorateMyNest</h1>

      {/* SignUp Button */}
      <div className="sign-up-container">
        <Link to={"/signup"} className="title">
          <Button text="SignUp" />
        </Link>
      </div>

      {/* SignIn Button */}
      <div className="login-container">
        <Link to={"/Login"} className="title">
          <Button text="SignIn" />
        </Link>
      </div>
    </div>
  );
};

export default HomeBodyHeader;
