import React, { useEffect, useState } from "react";
import SignupFormMolecules from "../../molecules/SignupFormMolecules/SignupFormMolecules";
import "./SignupOrganism.style.scss";
import signin from "../../../assets/images/googlesignup.jpg";
import { auth, provider } from "../../../apis/FirebaseSDK";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignupOrganism = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState("");

  const signinwithgoogle = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("signupemail", data.user.email);
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem("signupemail"));
  });

  return (
    <>
      {value ? (
        navigate("/")
      ) : (
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
            <button onClick={signinwithgoogle}>
              <img className="signUpImage" src={signin} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SignupOrganism;
