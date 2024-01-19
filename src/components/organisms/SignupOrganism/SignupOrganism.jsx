import React from "react";
import SignupFormMolecules from "../../molecules/SignupFormMolecules/SignupFormMolecules";
import "./SignupOrganism.style.scss";

const SignupOrganism = () => {
  return (
    <>
      <div className="right-div-signup">
        <div className="content-left">
          <h2
            style={{
              textAlign: "center",
              marginBottom: "1rem",
              fontFamily: "sans-serif",
            }}
          >
            Register Now
          </h2>
          <p
            style={{
              textAlign: "center",
              marginBottom: "2rem",
              fontFamily: "sans-serif",
            }}
          >
            Register to get access to all the features
          </p>
          <SignupFormMolecules />
          <img src=""
        </div>
      </div>
    </>
  );
};

export default SignupOrganism;
