import React from "react";
import "./register.css";
import google from "./images/google.png";
import facebook from "./images/facebook.png";
import gmail from "./images/gmail.png";
import register from "./images/register.jpg";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register-container">
      <div className="left-section">
        <img src={register} alt="Register" className="register" />
      </div>

      <div className="right-section">
        <h2>SIGN IN</h2>
        <form>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />

          <button type="submit">Submit</button>
        </form>

        <p>SignUp with</p>
        <div className="social-icons">
          <img src={google} alt="Google" className="google" />
          <img src={facebook} alt="Facebook" className="facebook" />
          <img src={gmail} alt="Gmail" className="gmail" />
        </div>

        <p>Don't have an account?</p>
        <Link to={"/Register"} className="title">
          <button className="login-button">Sign Up</button>
        </Link>
      </div>
    </div>
  );
}

export default Register;
