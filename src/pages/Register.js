import React, { useState } from "react";
import "./register.css";
import google from "./images/google.png";
import facebook from "./images/facebook.png";
import gmail from "./images/gmail.png";
import register from "./images/register.jpg";
import { Link } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });

  const validateInputs = () => {
    // Validation logic here
    let isValid = true;

    for (const key in formData) {
      if (formData[key].trim() === "") {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [key]: "This field is required",
        }));
        isValid = false;
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, [key]: "" }));
      }
    }
    const nameRegex = /^[A-Za-z]+$/;
    if (!nameRegex.test(formData.firstName)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        firstName: "Only characters allowed",
      }));
      isValid = false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, firstName: "" }));
    }

    if (!nameRegex.test(formData.lastName)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        lastName: "Only characters allowed",
      }));
      isValid = false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, lastName: "" }));
    }

    const emailRegex = /^[A-Za-z]+@[A-Za-z]+\.com$/;
    if (!emailRegex.test(formData.email)) {
      setErrors((prevErrors) => ({ ...prevErrors, email: "Invalid email" }));
      isValid = false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
    }

    const phoneRegex = /^\d{11}$/;
    if (!phoneRegex.test(formData.phone)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: "Phone number must contain 11 digits",
      }));
      isValid = false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, phone: "" }));
    }

    const passwordRegex = /^(?=.*[A-Za-z\d])(?=.*[\W_]).{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password:
          "Password must be at least 8 characters and contain 2 symbols and 3 digits",
      }));
      isValid = false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateInputs()) {
      console.log("Form submitted successfully");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="register-container">
      <div className="left-section">
        <img src={register} alt="Register" className="register" />
      </div>

      <div className="right-section">
        <h2>SIGN UP</h2>
        <form onSubmit={handleSubmit}>
          <div className="label-input-container">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          {errors.firstName && <p className="error">{errors.firstName}</p>}

          <div className="label-input-container">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          {errors.lastName && <p className="error">{errors.lastName}</p>}

          <div className="label-input-container">
            <label htmlFor="email">Email </label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          {errors.email && <p className="error">{errors.email}</p>}

          <div className="label-input-container">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          {errors.phone && <p className="error">{errors.phone}</p>}

          <div className="label-input-container">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          {errors.password && <p className="error">{errors.password}</p>}

          <button type="submit">Submit</button>
        </form>

        <p>SignIn with</p>
        <div className="social-icons">
          <img src={google} alt="Google" className="google" />
          <img src={facebook} alt="Facebook" className="facebook" />
          <img src={gmail} alt="Gmail" className="gmail" />
        </div>

        <p>Already have an account?</p>
        <Link to={"/Login"} className="title">
          <button className="login-button">LOG IN</button>
        </Link>
      </div>
    </div>
  );
}

export default Register;
