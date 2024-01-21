import React from "react";
import { Controller } from "react-hook-form";
import { BiShowAlt, BiHide } from "react-icons/bi";
import { useState } from "react";
import "./PasswordInput.style.scss";

const PasswordInput = ({ control, errors, text, watch }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return !text ? (
    <div className="input-group">
      <label htmlFor="password"> Password</label>
      <Controller
        name="password"
        control={control}
        defaultValue=""
        rules={{
          required: "Password is required",
          maxLength: {
            value: 32,
            message: "Password should be less than 32 characters",
          },
          minLength: {
            value: 8,
            message: "Password should be at least 8 characters",
          },
          pattern: {
            value:
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]+$/,
            message:
              "Password should include at least:\n- one small letter\n- one capital letter\n- one number\n- one symbol",
          },
        }}
        render={({ field }) => (
          <>
            <div className="pass-field">
              <input
                {...field}
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
              />
              <div
                onClick={toggleShowPassword}
                className="show-password-button"
              >
                {showPassword ? <BiShowAlt /> : <BiHide />}
              </div>
            </div>
            <span className="error">*{errors.password?.message}</span>
          </>
        )}
      />
    </div>
  ) : (
    <div className="input-group">
      <label htmlFor="cpassword">Confirm Password</label>
      <Controller
        name="cpassword"
        control={control}
        defaultValue=""
        rules={{
          required: "Confirm Password is required",
          maxLength: {
            value: 32,
            message: "Password should be less than 32 characters",
          },
          validate: (value) =>
            value === watch("password") || "Passwords do not match",
        }}
        render={({ field }) => (
          <>
            <div className="pass-field">
              <input
                {...field}
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your password"
              />
              <div
                onClick={toggleShowConfirmPassword}
                className="show-password-button"
              >
                {showConfirmPassword ? <BiShowAlt /> : <BiHide />}
              </div>
            </div>
            <span className="error">*{errors.cpassword?.message}</span>
          </>
        )}
      />
    </div>
  );
};

export default PasswordInput;
